import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import connectDB from '@/lib/mongodb/mongodb'
import User, { IUser } from '@/models/user'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data
  const eventType = evt.type
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  console.log('Webhook payload:', body)

  await connectDB()

  // Handle different event types
  try {
    if (eventType === 'user.created') {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;

      if (!id || !email_addresses) {
        return new Response('Error: Missing user data', {
          status: 400,
        });
      }

      const userToCreate: Partial<IUser> = {
        clerkUserId: id,
        emailAddresses: email_addresses.map((e: any) => e.email_address),
        firstName: first_name ?? undefined,
        lastName: last_name ?? undefined,
        imageUrl: image_url ?? undefined,
      };

      const newUser = await User.create(userToCreate);
      console.log('User created:', newUser);

    } else if (eventType === 'user.updated') {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;

      if (!id || !email_addresses) {
        return new Response('Error: Missing user data', {
          status: 400,
        });
      }

      const userToUpdate: Partial<IUser> = {
        emailAddresses: email_addresses.map((e: any) => e.email_address),
        firstName: first_name ?? undefined,
        lastName: last_name ?? undefined,
        imageUrl: image_url ?? undefined,
      };

      const updatedUser = await User.findOneAndUpdate(
        { clerkUserId: id },
        userToUpdate,
        { new: true }
      );
      console.log('User updated:', updatedUser);

    } else if (eventType === 'user.deleted') {
      const { id } = evt.data;

      if (!id) {
        return new Response('Error: Missing user data', {
          status: 400,
        });
      }

      const deletedUser = await User.findOneAndDelete({ clerkUserId: id });
      console.log('User deleted:', deletedUser);
    } else {
      console.log('Unhandled event type:', eventType);
    }

  } catch (error) {
    console.error(`Error handling ${eventType}:`, error);
    return new Response(`Error occurred processing ${eventType}`, {
      status: 400,
    });
  }
 
  return new Response('Webhook received', { status: 200 })
}