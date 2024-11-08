import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Grid2 } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface Note {
    id: number;
    title: string;
    subject: string;
    downloads: number;
    thumbnail: string;
}

interface NotesGalleryProps {
    notes: Note[];
}

export default function NotesGallery({ notes }: NotesGalleryProps): React.JSX.Element {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Uploaded Notes Gallery
            </Typography>
            <Grid2 container spacing={2}>
                {notes.map((note) => (
                    <Grid2 item xs={12} sm={6} md={4} key={note.id}>
                        <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 1 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={note.thumbnail || 'https://via.placeholder.com/150'} // Placeholder if no thumbnail
                                alt={note.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {note.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {note.subject}
                                </Typography>
                                <Box display="flex" alignItems="center" mt={1}>
                                    <DownloadIcon fontSize="small" sx={{ mr: 0.5 }} />
                                    <Typography variant="body2">{note.downloads}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}