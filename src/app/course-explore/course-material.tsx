import { Box } from '@mui/material'
import React from 'react'


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


export default function CourseMaterial({ notes }) {
    return (
        <div className = 'mt-10'>
            {notes.map((note) => ( 
            <Box sx = {{
                borderRadius: '20px',
                border: '2px solid gray',
                height:'750px',
                marginBottom: '20px'
            }}>


                {/* This is just a placeholder  */}
                <p>{note.title}</p>
                {/* This is just a placeholder  */}


            </Box>
            ))}
        </div>
    )
}