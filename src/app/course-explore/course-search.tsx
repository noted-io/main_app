import { Input, Box } from "@mui/material"
import { useState } from "react"



export default function CourseSearch() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className = 'display-flex flex-direction-row gap-4'>
            <div className="flex-grow">
                <Input sx= {{mt:'20px'}}
                    placeholder="Search notes..."
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"  
                />
            </div>

        </div>
    )
}