import React, { useState } from 'react';
import { Button, Typography, Input, Box, Stack, Divider, Container, Avatar } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import DomainIcon from '@mui/icons-material/Domain';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NotesGallery from './NotesGallery';
import { keyframes } from '@emotion/react';

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

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.6), 0 0 15px rgba(0, 123, 255, 0.4), 0 0 25px rgba(0, 123, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.7), 0 0 20px rgba(0, 123, 255, 0.5), 0 0 30px rgba(0, 123, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.6), 0 0 15px rgba(0, 123, 255, 0.4), 0 0 25px rgba(0, 123, 255, 0.2);
  }
`;

export default function UserDescription({ user }: UserDescriptionProps): React.JSX.Element {
    const [editStatus, setEditStatus] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedMajor, setEditedMajor] = useState(user.major);
    const [editedMinor, setEditedMinor] = useState(user.minor);
    const [editedBio, setEditedBio] = useState(user.bio);
    const [editedSchool, setEditedSchool] = useState(user.school);

    const handleSave = () => {
        // Send this data to the backend
        setEditStatus(false);
    };

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: 2,
                    mt: 4,
                    mb: 4,
                    p: 2,
                    textAlign: { xs: 'center', md: 'left' }
                }}
            >
                <Avatar
                    src={user.avatar}
                    sx={{
                        width: { xs: 100, md: 140 },
                        height: { xs: 100, md: 140 },
                        animation: `${glowAnimation} 2s infinite ease-in-out`,
                        mb: { xs: 2, md: 0 }
                    }}
                />

                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4">{editedName}</Typography>
                    <Typography variant="subtitle2">@{user.username}</Typography>
                    {editStatus ? (
                        <Box sx={{
                            mt: 3,
                            p: 2,
                            border: '1px solid gray',
                            borderRadius: 2,
                            width: { xs: '100%', md: '80%' }
                        }}>
                            <Typography variant="h5" mb={2}>Edit Profile</Typography>
                            {['Name', 'Major', 'Bio', 'School', 'Minor'].map((field, index) => (
                                <Box key={index} mb={2}>
                                    <label>{field}:</label>
                                    <Input
                                        fullWidth
                                        value={eval(`edited${field}`)}
                                        onChange={(e) => eval(`setEdited${field}(e.target.value)`)}
                                    />
                                </Box>
                            ))}
                            <Button
                                variant="outlined"
                                onClick={handleSave}
                                sx={{
                                    color: 'blue',
                                    borderColor: 'blue',
                                    '&:hover': { backgroundColor: 'blue', color: 'white' }
                                }}
                            >
                                Save
                            </Button>
                        </Box>
                    ) : (
                        <>
                            <Typography variant="h6" mt={2}>{user.bio}</Typography>
                            <Typography variant="subtitle2" mt={2}>
                                <Box display="flex" flexWrap="wrap" gap={2}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: '1px solid',
                                        padding: 1,
                                        borderRadius: 1,
                                        bgcolor: 'grey.200',
                                        '&:hover': { bgcolor: 'grey.300' }
                                    }}>
                                        <DomainIcon /> {user.school}
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: '1px solid',
                                        padding: 1,
                                        borderRadius: 1,
                                        bgcolor: 'grey.200',
                                        '&:hover': { bgcolor: 'grey.300' }
                                    }}>
                                        <SchoolIcon /> {user.year} - {user.gradStatus}
                                    </Box>
                                </Box>
                                Major: {editedMajor} <br />
                                {user.minor && `Minor: ${user.minor}`} <br />
                                GPA: {user.gpa} <br />
                                Joined {user.joinDate}
                            </Typography>
                        </>
                    )}
                </Box>

                <Button
                    variant="outlined"
                    onClick={() => setEditStatus(!editStatus)}
                    sx={{
                        mt: { xs: 2, md: 0 },
                        alignSelf: { xs: 'center', md: 'flex-start' },
                        color: 'blue',
                        borderColor: 'blue',
                        borderRadius: '25px',
                        '&:hover': { bgcolor: 'blue', color: 'white' }
                    }}
                >
                    {editStatus ? "Cancel" : "Edit Profile"} <EditNoteIcon />
                </Button>
            </Box>

            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" mt={3} mb={3}>
                {[
                    { title: "Notes Uploaded", value: user.notesUploaded, icon: <DescriptionIcon fontSize="small" /> },
                    { title: "Notes Downloaded", value: user.notesDownloaded, icon: <DownloadIcon fontSize="small" /> },
                    { title: "Courses Taken", value: user.coursesTaken.length, icon: <MenuBookIcon fontSize="small" /> },
                ].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: '1 1 30%',
                            p: 2,
                            m: 1,
                            border: '1px solid #ccc',
                            borderRadius: 1,
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h6">{item.title} {item.icon}</Typography>
                        <Typography variant="body1">{item.value}</Typography>
                    </Box>
                ))}
            </Box>

            <Box mt={3} p={2} border={1} borderColor="grey.300" borderRadius={2}>
                <Typography variant="h5" mb={2}>Courses Taken</Typography>
                <Stack divider={<Divider />} spacing={1}>
                    {user.coursesTaken.map((course, index) => (
                        <Typography key={index} variant="body1">{course}</Typography>
                    ))}
                </Stack>
            </Box>

            <NotesGallery notes={notes} />
        </Container>
    );
}
