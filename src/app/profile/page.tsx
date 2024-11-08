"use client";
import React from 'react';
import UserDescription from './UserDescription';
import HeaderCard from '@/app/components/headercard/HeaderCard';
import NotesGallery from './NotesGallery'; 

interface Note {
    id: number;
    title: string;
    subject: string;
    downloads: number;
    thumbnail: string;
}

const user = {
    name: "Alex Johnson",
    username: "alex_j",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Computer Science enthusiast | Note-taking aficionado",
    school: "Stanford University",
    year: "Junior",
    gradStatus: "Undergraduate",
    major: "Computer Science",
    minor: "Data Science",
    gpa: "3.8",
    coursesTaken: [
      "CS101: Introduction to Computer Science",
      "CS201: Data Structures and Algorithms",
      "CS301: Database Systems",
      "MATH101: Calculus I",
      "MATH201: Linear Algebra",
      "DS101: Introduction to Data Science",
      "DS201: Machine Learning Fundamentals"
    ],
    joinDate: "September 2022",
    notesUploaded: 12,
    notesDownloaded: 87,
  }

const notes: Note[] = [
    { id: 1, title: "CS101 Midterm Review", subject: "Computer Science", downloads: 230, thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Data Structures Cheat Sheet", subject: "Computer Science", downloads: 189, thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Calculus I Formula Sheet", subject: "Mathematics", downloads: 156, thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "Machine Learning Algorithms", subject: "Data Science", downloads: 201, thumbnail: "/placeholder.svg?height=200&width=300" },
];

export default function Page(): React.JSX.Element {
    return (
        <>
            <HeaderCard />
            <UserDescription user={user} notes={notes} /> {/* Pass notes as a prop */}

        </>
    );
}


///            <NotesGallery notes={notes} />