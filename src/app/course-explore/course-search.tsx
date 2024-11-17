import { TextField, Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

export default function CourseSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Most Popular");
  const [noteType, setNoteType] = useState("All Types");

  const changeFilter = (event) => {
    setFilterType(event.target.value);
  };

  const changeNoteType = (event) => {
    setNoteType(event.target.value);
  };

  return (
    <div className="flex flex-row gap-4 mt-5">
      <div className="flex-grow">
        <TextField
          variant="outlined"
          label="Search Notes"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{
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
      
      <FormControl sx={{ minWidth: 160, height: "56px" }}>
        <InputLabel id="filter-type-label">Sort By</InputLabel>
        <Select
          labelId="filter-type-label"
          value={filterType}
          onChange={changeFilter}
          variant="outlined"
        >
          <MenuItem value="Most Popular">Most Popular</MenuItem>
          <MenuItem value="Highest Rated">Highest Rated</MenuItem>
          <MenuItem value="Most Recent">Most Recent</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 160, height: "56px" }}>
        <InputLabel id="note-type-label">Filter by Type</InputLabel>
        <Select
          labelId="note-type-label"
          value={noteType}
          onChange={changeNoteType}
          variant="outlined"
        >
          <MenuItem value="All Types">All Types</MenuItem>
          <MenuItem value="Lecture Notes">Lecture Notes</MenuItem>
          <MenuItem value="Study Guide">Study Guide</MenuItem>
          <MenuItem value="Cheat Sheet">Cheat Sheet</MenuItem>
          <MenuItem value="Review">Review</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
