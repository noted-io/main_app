import { TextField, Box } from "@mui/material";
import { useState } from "react";

export default function CourseSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-row gap-4">
      {/* Input Field */}
      <div className="flex-grow">
        <TextField
          variant="outlined"
          label="Search Notes"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth 
          sx={{
            mt: 2,
            borderRadius: "8px", 
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray", 
              },
              "&:hover fieldset": {
                borderColor: "blue", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "green", 
              },
            },
          }}
        />
      </div>
    </div>
  );
}
