// page.tsx
import React from 'react';
import UserDescription from './UserDescription';
import HeaderCard from '@/app/components/headercard/HeaderCard';


// Static example user data to be passed as a prop
const user: User = {
    name: "Alex Johnson",
    username: "alex_j",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Computer Science enthusiast | Note-taking aficionado",
    school: "Stanford University",
    year: "Junior",
    gradStatus: "Undergraduate",
    major: "Computer Science",
    minor: "Data Science",
    gpa: "3.8",
    coursesTaken: [
        "CS101: Introduction to Computer Science",
        "CS201: Data Structures and Algorithms",
        "CS301: Database Systems",
        "MATH101: Calculus I",
        "MATH201: Linear Algebra",
        "DS101: Introduction to Data Science",
        "DS201: Machine Learning Fundamentals"
    ],
    joinDate: "September 2022",
    notesUploaded: 12,
    notesDownloaded: 87,
};

export default function Page(): React.JSX.Element {
    return (
        <>
            <HeaderCard />
            <UserDescription user={user} />
        </>
    );
}
