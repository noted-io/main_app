import React from 'react';


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
}

export default function UserDescription({ user }: UserDescriptionProps): React.JSX.Element {
    return (
        <div className='profile-page'>
            <h1>{user.name}</h1>
            <p>@{user.username}</p>
            <p>Major: {user.major}</p>
            {user.minor && <p>Minor: {user.minor}</p>}
            <p>Joined {user.joinDate}</p>
            <div className='description-notes'>
                <ul>
                    <li>Notes Uploaded {user.notesUploaded}</li>
                    <li>Notes Downlaoded {user.notesDownloaded}</li>
                    <li>Courses Taken {user.coursesTaken.length}</li>
                </ul>
            </div>
            <div className="course-list">
                <h2>Courses Taken</h2>
                <ul>
                    {user.coursesTaken.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
            <div className="notes-gallery">
                
            </div>
        </div>
    );
}