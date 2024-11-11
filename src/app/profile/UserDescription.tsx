import React, { useState } from 'react';
import { Button, Typography, Input, Box, Stack, Divider, Container } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotesGallery from './NotesGallery'; 
import { Avatar } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import DomainIcon from '@mui/icons-material/Domain';

interface Note {
    id: number;
    title: string;
    subject: string;
    downloads: number;
    thumbnail: string;
}


const notes: Note[] = [
    { id: 1, title: "CS101 Midterm Review", subject: "Computer Science", downloads: 230, thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Data Structures Cheat Sheet", subject: "Computer Science", downloads: 189, thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Calculus I Formula Sheet", subject: "Mathematics", downloads: 156, thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "Machine Learning Algorithms", subject: "Data Science", downloads: 201, thumbnail: "/placeholder.svg?height=200&width=300" },
];

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
    const [editedMinor, setEditedMinor] = useState(user.minor);
    const [editedBio, setEditedBio] = useState(user.bio);
    const [editedSchool, setEditedSchool] = useState(user.school)

    const handleSave = () => {
        // send this data to the backend
        setEditStatus(false);
    };

    return (
        <Container>
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
                    <label>
                        Bio:
                        <Input 
                            type="text" 
                            value={editedBio} 
                            onChange={(e) => setEditedBio(e.target.value)} 
                        />
                    </label>
                    <label>
                        School:
                        <Input 
                            type="text" 
                            value={editedSchool} 
                            onChange={(e) => setEditedSchool(e.target.value)} 
                        />
                    </label>
                    <label>
                        Minor:
                        <Input 
                            type="text" 
                            value={editedMinor} 
                            onChange={(e) => setEditedMinor(e.target.value)} 
                        />
                    </label>
                    <Button onClick={handleSave}>Save</Button>
                </div>
            ) : (
                <div>



//Construct

                    <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'left',
          
                    }}>
                        <Container>
                            <Avatar src={user.avatar} sx={{ width: 140, height: 140}}>
                            </Avatar>
                        </Container>
                        <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <Typography variant="h2">{editedName}</Typography>
                            

                            <Typography variant="subtitle2">
                                @{user.username} <br />
                                <Typography variant='h6'>{user.bio}</Typography>
                                <Box display='flex' justifyContent='flex-start' gap='5px'>
                                    <Box
                                        sx={{
                                            border: '1px',
                                            padding: '5px',
                                            borderRadius: '20px',
                                            backgroundColor: '#D3D3D3'
                                        }}>
                                        <DomainIcon />{user.school}
                                    </Box>
                                    <Box
                                        sx={{
                                            border: '1px',
                                            padding: '5px',
                                            borderRadius: '20px',
                                            backgroundColor: '#D3D3D3'
                                        }}>
                                        <SchoolIcon />{user.year} - {user.gradStatus}
                                    </Box>
                                </Box>
                                Major: {editedMajor} <br />
                                {user.minor && `Minor: ${user.minor}`} <br />
                                GPA; {user.gpa} <br />
                                Joined {user.joinDate}
                            </Typography>

                        </Container>
                    </Container>

//Construct


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
                                Notes Uploaded 
                                <DescriptionIcon fontSize="small" />
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
                                Courses Taken <MenuBookIcon fontSize="small" />
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
                    <NotesGallery notes={notes} />
                </div>
            )}
        </Container>
    );
}
