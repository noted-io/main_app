import React, { useState } from 'react';
import { Button, Typography, Input, Box, Stack, Divider } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
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
        // send this data to the backend
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
                            <Typography variant="h6">
                                Notes Uploaded <DescriptionIcon fontSize="small" />
                                </Typography>
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
                            <Typography variant="h6">
                                Notes Downloaded <DownloadIcon fontSize="small" />
                                </Typography>
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
                            <Typography variant="h6">
                                Notes Uploaded <MenuBookIcon fontSize="small" />
                                </Typography>
                            <Typography variant="body1">{user.coursesTaken.length}</Typography>
                        </Box>
                       
                    </Box>
                    <Box className="course-list" mt={3} p={2} border={1} borderColor="grey.300" borderRadius={2} bgcolor="background.paper">
                        <Typography variant="h5" mb={2}>Courses Taken</Typography>
                        <Stack divider={<Divider />} spacing={1}>
                            {user.coursesTaken.map((course, index) => (
                                <Typography key={index} variant="body1" sx={{ padding: '8px 0' }}>
                                    {course}
                                </Typography>
                            ))}
                        </Stack>
                    </Box>
                </div>
            )}
        </div>
    );
}
