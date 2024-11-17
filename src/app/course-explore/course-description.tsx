import { Typography, Container, Box } from "@mui/material";


interface CourseProps {
    id: string;
    name: string;
    description: string;
    professor: string;
    semester: string;
}

export default function CourseDescription({ course }: { course: CourseProps }) {
    return (
        <Container>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                {course.name}
            </Typography>
            <Typography variant="body1" sx={{ color: 'gray', mb: 3, mt: 3 }}>
                {course.description}
            </Typography>
            <div className="rounded-2xl flex flex-row gap-4">
                <Box className="bg-white rounded-full px-4 py-2 text-center shadow-md animate-soft-glow">
                    {course.id}
                </Box>
                <Box className="bg-white rounded-full px-4 py-2 text-center shadow-md animate-soft-glow">
                    {course.professor}
                </Box>
                <Box className="bg-white rounded-full px-4 py-2 text-center shadow-md animate-soft-glow">
                    {course.semester}
                </Box>
            </div>
        </Container>
    );
}
