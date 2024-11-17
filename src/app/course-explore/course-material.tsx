import { Avatar, Box, Grid, Typography, Button} from "@mui/material";
import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
}

export default function CourseMaterial({ notes }: CourseMaterialProps) {
  return (
    <div className="mt-10">
      {notes.map((note) => (
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
            {/* Left Half - Text */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
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
            <Box sx={{
                display: 'flex',
                aligntitems:'left',
                marginTop: '2',
                gap: '15px',
                mt: '5px'
            }}>
                <Typography><DescriptionIcon />{note.pages}  pages</Typography>
                <Typography><DownloadIcon />{note.downloads}</Typography>
                <Typography><ThumbUpIcon /> {note.likes}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                aligntitems:'left',
                marginTop: '2',
                gap: '15px',
                mt: '15px',
            }}>
            <Typography sx={{fontSize:'20px'}}><StarBorderIcon/> {note.rating}</Typography>

                <Button variant='outlined' sx={{padding:'10px'}}>View Note</Button>
                <Button variant='outlined' sx={{padding:'10px'}}>Download Note</Button>

            </Box>

            </Grid>

            {/* Right Half - Image */}
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
    </div>
  );
}
