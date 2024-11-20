'use client';
import { useState } from "react";
import CourseMaterial from "./course-material";
import CourseSearch from "./course-search";
import CourseDescription from "./course-description"
import { Container } from '@mui/material';


const course = {
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "This course provides a broad introduction to computer science and programming.",
    professor: "Dr. Jane Smith",
    semester: "Fall 2024",
  }

const notes = [
{ 
    id: 1, 
    title: "Week 1: Introduction to Programming", 
    author: "Alice Johnson", 
    authorAvatar: "/placeholder.svg?height=32&width=32", 
    type: "Lecture Notes", 
    pages: 10, 
    downloads: 230, 
    likes: 45, 
    rating: 4.7,
    imageUrl: "/placeholder.svg?height=400&width=300&text=Intro+to+Programming"
},
{ 
    id: 2, 
    title: "Data Types and Variables", 
    author: "Bob Williams", 
    authorAvatar: "/placeholder.svg?height=32&width=32", 
    type: "Study Guide", 
    pages: 5, 
    downloads: 189, 
    likes: 32, 
    rating: 4.5,
    imageUrl: "/placeholder.svg?height=400&width=300&text=Data+Types+and+Variables"
},
{ 
    id: 3, 
    title: "Control Structures Cheat Sheet", 
    author: "Charlie Brown", 
    authorAvatar: "/placeholder.svg?height=32&width=32", 
    type: "Cheat Sheet", 
    pages: 2, 
    downloads: 156, 
    likes: 28, 
    rating: 4.8,
    imageUrl: "/placeholder.svg?height=400&width=300&text=Control+Structures"
},
{ 
    id: 4, 
    title: "Midterm Review", 
    author: "Diana Martinez", 
    authorAvatar: "/placeholder.svg?height=32&width=32", 
    type: "Review", 
    pages: 15, 
    downloads: 301, 
    likes: 67, 
    rating: 4.9,
    imageUrl: "/placeholder.svg?height=400&width=300&text=Midterm+Review"
},
{ 
    id: 5, 
    title: "Object-Oriented Programming Basics", 
    author: "Ethan Lee", 
    authorAvatar: "/placeholder.svg?height=32&width=32", 
    type: "Lecture Notes", 
    pages: 12, 
    downloads: 178, 
    likes: 39, 
    rating: 4.6,
    imageUrl: "/placeholder.svg?height=400&width=300&text=OOP+Basics"
},
{ 
    id: 6, 
    title: "Algorithms and Data Structures", 
    author: "Fiona Clark", 
    authorAvatar: "/placeholder.svg?height=32&width=32", 
    type: "Study Guide", 
    pages: 20, 
    downloads: 245, 
    likes: 53, 
    rating: 4.7,
    imageUrl: "/placeholder.svg?height=400&width=300&text=Algorithms+and+Data+Structures"
},
]

export default function Page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("Most Popular");
    const [noteType, setNoteType] = useState("All Types");
    return (
        <>
            <Container sx = {{mt:5}}>
                <CourseDescription course={course} />
                <CourseSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterType={filterType} setFilterType={setFilterType} noteType ={noteType} setNoteType = {setNoteType}/>
                <CourseMaterial notes={notes} searchTerm={searchTerm} filterType={filterType} noteType={noteType}/>
            </Container>
        </>
    )
        
}