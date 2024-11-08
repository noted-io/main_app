import React from "react";
import Link from "next/link";
import{AppBar, Toolbar, IconButton, Button, Box, Typography} from'@mui/material'; 
import { Book  as BookIcon} from "@mui/icons-material";
export default function HeaderCard(){
    return (
        <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Link href="#" passHref>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <BookIcon color="primary" />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NoteShare
          </Typography>
          <Box display="flex" gap={2}>
            <Link href="#" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="#" passHref>
              <Button color="inherit">Explore</Button>
            </Link>
            <Link href="#" passHref>
              <Button color="inherit">Contribute</Button>
            </Link>
            <Link href="#" passHref>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="#" passHref>
              <Button color="inherit">Log In</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    )
}