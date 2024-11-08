import React, { useState } from 'react';
import { Button, Typography, Input, Box } from '@mui/material';

interface Note {
    id: number;
    title: string;
    subject: string;
    downloads: number;
    thumbnail: string;
}
interface User {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    school: string;
    year: string;
    gradStatus: string;
    major: string;
    minor?: string;
    gpa: string;
    coursesTaken: string[];
    joinDate: string;
    notesUploaded: number;
    notesDownloaded: number;
}

interface UserDescriptionProps {
    user: User;
    notes: Note[];
}

export default function UserDescription({ user }: UserDescriptionProps): React.JSX.Element {
    const [editStatus, setEditStatus] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedMajor, setEditedMajor] = useState(user.major);

    const handleSave = () => {
        // In a real application, you would send this data to the backend
        setEditStatus(false);
    };

    return (
        <div className='profile-page'>
            <Button onClick={() => setEditStatus(!editStatus)}>
                {editStatus ? "Cancel" : "Edit Profile"}
            </Button>

            {editStatus ? (
                <div>
                    <h2>Edit Profile</h2>
                    <label>
                        Name:
                        <Input 
                            type="text" 
                            value={editedName} 
                            onChange={(e) => setEditedName(e.target.value)} 
                        />
                    </label>
                    <label>
                        Major:
                        <Input 
                            type="text" 
                            value={editedMajor} 
                            onChange={(e) => setEditedMajor(e.target.value)} 
                        />
                    </label>
                    <Button onClick={handleSave}>Save</Button>
                </div>
            ) : (
                <div>


// This is non editing GUI. Displaying profile 
                    <Typography variant="h1">{editedName}</Typography>
                    <Typography variant="subtitle2">
                        @{user.username} <br />
                        Major: {editedMajor} <br />
                        {user.minor && `Minor: ${user.minor}`} <br />
                        Joined {user.joinDate}
                    </Typography>
                    <Box display="flex" justifyContent="space-around" mt={3} mb={3} p={2} bgcolor="background.paper" borderRadius={1}>
                        <Box
                            sx={{
                                border: '1px solid #ccc',
                                padding: '20px',
                                borderRadius: '5px',
                                marginBottom: '10px',
                            }}
                        >
                            <Typography variant="h6">Notes Uploaded</Typography>
                            <Typography variant="body1">{user.notesUploaded}</Typography>
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid #ccc',
                                padding: '20px',
                                borderRadius: '5px',
                                marginBottom: '10px',
                            }}
                        >
                            <Typography variant="h6">Notes Downloaded</Typography>
                            <Typography variant="body1">{user.notesDownloaded}</Typography>
                        </Box>
                        <Box
                            sx={{
                                border: '1px solid #ccc',
                                padding: '20px',
                                borderRadius: '5px',
                                marginBottom: '10px',
                            }}
                        >
                            <Typography variant="h6">Notes Uploaded</Typography>
                            <Typography variant="body1">{user.coursesTaken.length}</Typography>
                        </Box>
                       
                    </Box>
                    <div className="course-list">
                        <h2>Courses Taken</h2>
                        <ul>
                            {user.coursesTaken.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
