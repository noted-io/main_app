import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Button  } from '@mui/material';
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
    const [open, setOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    
    const handleOpen = (note: Note) => {
        setSelectedNote(note);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };
    
    
    
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Uploaded Notes Gallery
            </Typography>
            <Grid container spacing={3}>
                {notes.map((note) => (
                    <Grid item xs={12} sm={6} md={4} key={note.id}>
                        <Card onClick={() => handleOpen(note)} style={{cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={note.thumbnail}
                            />
                            <CardContent>
                                <Typography variant="h6">{note.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {note.subject}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Downloads: {note.downloads}
                                </Typography>
                            </CardContent>
                            <IconButton>
                                <DownloadIcon />
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>





            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                {selectedNote && (
                    <>
                        <DialogTitle>{selectedNote.title}</DialogTitle>
                        <DialogContent>
                            <Box textAlign="center">
                                <CardMedia
                                    component="img"
                                    alt={selectedNote.title}
                                    height="200"
                                    image={selectedNote.thumbnail}
                                    style={{ marginBottom: '20px' }}
                                 />
                                <Typography variant="h6">{selectedNote.subject}</Typography>
                                <Typography variant="body1" color="textSecondary" paragraph>
                                    Downloads: {selectedNote.downloads}
                                </Typography>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<DownloadIcon />}
                                fullWidth
                            >
                                </Button>

                        </DialogActions>
                    </>
                )}
            
            </Dialog>  

        </Box>
    );
}
