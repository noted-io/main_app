import React, { useState } from 'react';

interface Note {
    id: number;
    title: string;
    subject: string;
    downloads: number;
    thumbnail: string;
}
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

export default function UserDescription({ user }: UserDescriptionProps): React.JSX.Element {
    const [editStatus, setEditStatus] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedMajor, setEditedMajor] = useState(user.major);

    const handleSave = () => {
        // In a real application, you would send this data to the backend
        setEditStatus(false);
    };

    return (
        <div className='profile-page'>
            <button onClick={() => setEditStatus(!editStatus)}>
                {editStatus ? "Cancel" : "Edit Profile"}
            </button>

            {editStatus ? (
                <div>
                    <h2>Edit Profile</h2>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={editedName} 
                            onChange={(e) => setEditedName(e.target.value)} 
                        />
                    </label>
                    <label>
                        Major:
                        <input 
                            type="text" 
                            value={editedMajor} 
                            onChange={(e) => setEditedMajor(e.target.value)} 
                        />
                    </label>
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h1>{editedName}</h1>
                    <p>@{user.username}</p>
                    <p>Major: {editedMajor}</p>
                    {user.minor && <p>Minor: {user.minor}</p>}
                    <p>Joined {user.joinDate}</p>

                    <div className='description-notes'>
                        <ul>
                            <li>Notes Uploaded: {user.notesUploaded}</li>
                            <li>Notes Downloaded: {user.notesDownloaded}</li>
                            <li>Courses Taken: {user.coursesTaken.length}</li>
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
                </div>
            )}
        </div>
    );
}
