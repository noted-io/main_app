import {
  Avatar,
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface Note {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  type: string;
  pages: number;
  downloads: number;
  likes: number;
  rating: number;
  imageUrl: string;
}

interface CourseMaterialProps {
  notes: Note[];
  searchTerm: string;
  filterType: string;
  noteType: string;
}

export default function CourseMaterial({
  notes,
  searchTerm,
  filterType,
  noteType,
}: CourseMaterialProps) {
  const [openNote, setOpenNote] = useState<Note | null>(null);

  // Open Dialog for Note
  const handleOpen = (note: Note) => {
    setOpenNote(note);
  };

  // Close Dialog
  const handleClose = () => {
    setOpenNote(null);
  };

  // Filter and Sort Notes
  const filteredNotes = notes
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((note) => noteType === "All Types" || note.type === noteType)
    .sort((a, b) => {
      if (filterType === "Most Popular") return b.downloads - a.downloads;
      if (filterType === "Highest Rated") return b.rating - a.rating;
      if (filterType === "Most Recent") return b.id - a.id;
      return 0;
    });
 
  return (
    <div className="mt-10">
      {filteredNotes.map((note) => (
        <Box
          key={note.id}
          sx={{
            borderRadius: "20px",
            border: "2px solid gray",
            height: "750px",
            marginBottom: "20px",
            overflow: "hidden",
          }}
        >
          <Grid container>
            {/* Note Details */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f5f5f5",
                height: "750px",
                padding: 3,
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: 1 }}>
                {note.title}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1, color: "gray" }}>
                {note.type}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <Avatar
                  src={note.authorAvatar}
                  alt={note.author}
                  sx={{ marginRight: 1 }}
                >
                  {note.authorAvatar ? "" : note.author.charAt(0)}
                </Avatar>
                <Typography variant="body1">{note.author}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "left",
                  marginTop: 2,
                  gap: "15px",
                  mt: "10px",
                }}
              >
                <Typography>
                  <DescriptionIcon />
                  {note.pages} pages
                </Typography>
                <Typography>
                  <DownloadIcon />
                  {note.downloads}
                </Typography>
                <Typography>
                  <ThumbUpIcon /> {note.likes}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "left",
                  marginTop: 2,
                  gap: "15px",
                  mt: "15px",
                }}
              >
                <Typography sx={{ fontSize: "20px" }}>
                  <StarBorderIcon /> {note.rating}
                </Typography>

                <Box sx={{ display: "flex", gap: "10px", ml: "auto" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      padding: "10px",
                      backgroundColor: "white",
                      borderColor: "gray",
                      color: "gray",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "#d6dad8",
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() => handleOpen(note)}
                  >
                    View Note
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      padding: "10px",
                      backgroundColor: "black",
                      borderColor: "none",
                      color: "white",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "#393A39",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    Download Note
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Note Image */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={note.imageUrl}
                alt={`${note.title} image`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* Dialog to View Note */}
      {openNote && (
        <Dialog open={!!openNote} onClose={handleClose}>
          <DialogTitle>{openNote.title}</DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={openNote.authorAvatar}
                alt={openNote.author}
                sx={{ width: 100, height: 100, marginBottom: 2 }}
              >
                {openNote.authorAvatar ? "" : openNote.author.charAt(0)}
              </Avatar>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                {openNote.author}
              </Typography>
              <Box
                component="img"
                src={openNote.imageUrl}
                alt={`${openNote.title} image`}
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

