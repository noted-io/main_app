'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  InputBase,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Grid,
} from '@mui/material';
import {
  Search as SearchIcon,
  Upload as UploadIcon,
  Star as StarIcon,
  Book as BookIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
  Bookmark as BookmarkIcon,
} from '@mui/icons-material';

const MovingConveyor = ({ items }) => {
  return (
    <Box overflow="hidden" whiteSpace="nowrap">
      <Box display="inline-block" className="animate-marquee">
        {items.map((item, index) => (
          <Button key={index} variant="outlined" sx={{ mx: 1, my: 0.5 }}>
            {item}
          </Button>
        ))}
      </Box>
      <Box display="inline-block" className="animate-marquee">
        {items.map((item, index) => (
          <Button key={index} variant="outlined" sx={{ mx: 1, my: 0.5 }}>
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default function Component() {
  const universities = [
    'Harvard',
    'MIT',
    'Stanford',
    'Yale',
    'Princeton',
    'Columbia',
    'Berkeley',
    'Oxford',
    'Cambridge',
    'ETH Zurich',
  ];
  const apClasses = [
    'AP Biology',
    'AP Calculus',
    'AP Chemistry',
    'AP Physics',
    'AP Literature',
    'AP History',
    'AP Economics',
    'AP Computer Science',
  ];
  const ibClasses = [
    'IB Biology',
    'IB Mathematics',
    'IB Chemistry',
    'IB Physics',
    'IB Literature',
    'IB History',
    'IB Economics',
    'IB Computer Science',
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="grey.50">
      {/* Header */}
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
      {/* Main Content */}
      <Box component="main" flexGrow={1}>
        {/* First Section */}
        <Box py={{ xs: 12, md: 24 }} bgcolor="white">
          <Container>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              gap={2}
            >
              <Typography variant="h3" component="h1" fontWeight="bold">
                Making learning accessible and open
              </Typography>
              <Typography variant="h4" component="p" fontWeight="bold" color="primary">
                Notes for students -- by students
              </Typography>
              <Box
                component="form"
                mt={4}
                display="flex"
                gap={1}
                maxWidth={600}
                width="100%"
              >
                <InputBase
                  sx={{ flex: 1, bgcolor: 'grey.100', px: 2, py: 1, borderRadius: 1 }}
                  placeholder="Search by school, class, or semester"
                  inputProps={{ 'aria-label': 'search' }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
        {/* Second Section */}
        <Box py={{ xs: 12, md: 24 }} bgcolor="grey.100">
          <Container>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              textAlign="center"
              color="secondary"
              mb={8}
            >
              Benefits and Positive Impact
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      textAlign="center"
                      gap={2}
                    >
                      <PeopleIcon fontSize="large" color="primary" />
                      <Typography variant="h5" component="h3" fontWeight="bold">
                        Community-Driven
                      </Typography>
                      <Typography color="textSecondary">
                        Collaborate with peers and share knowledge across a global student
                        network.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      textAlign="center"
                      gap={2}
                    >
                      <AttachMoneyIcon fontSize="large" color="success" />
                      <Typography variant="h5" component="h3" fontWeight="bold">
                        No More Paywalls
                      </Typography>
                      <Typography color="textSecondary">
                        Access quality educational resources without financial barriers.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      textAlign="center"
                      gap={2}
                    >
                      <BookmarkIcon fontSize="large" color="secondary" />
                      <Typography variant="h5" component="h3" fontWeight="bold">
                        Specialized Notes
                      </Typography>
                      <Typography color="textSecondary">
                        Find tailored notes for your specific courses and learning needs.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Third Section */}
        <Box py={{ xs: 12, md: 24 }} bgcolor="white">
          <Container>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              textAlign="center"
              color="primary"
              mb={8}
            >
              Explore by Institution and Course
            </Typography>
            <Box mb={8}>
              <MovingConveyor items={universities} />
            </Box>
            <Box mb={8}>
              <MovingConveyor items={apClasses} />
            </Box>
            <Box>
              <MovingConveyor items={ibClasses} />
            </Box>
          </Container>
        </Box>
        {/* Fourth Section */}
        <Box py={{ xs: 12, md: 24 }} bgcolor="grey.100">
          <Container>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              textAlign="center"
              color="primary"
              mb={8}
            >
              How It Works
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  gap={2}
                >
                  <UploadIcon fontSize="large" color="primary" />
                  <Typography variant="h5" component="h3" fontWeight="bold" color="primary">
                    Upload
                  </Typography>
                  <Typography color="textSecondary">
                    Share your notes and help fellow students.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  gap={2}
                >
                  <SearchIcon fontSize="large" color="secondary" />
                  <Typography variant="h5" component="h3" fontWeight="bold" color="secondary">
                    Search
                  </Typography>
                  <Typography color="textSecondary">
                    Find the notes you need for your classes.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  gap={2}
                >
                  <StarIcon fontSize="large" sx={{ color: 'pink' }} />
                  <Typography variant="h5" component="h3" fontWeight="bold" sx={{ color: 'pink' }}>
                    Rate
                  </Typography>
                  <Typography color="textSecondary">
                    Help others by rating and reviewing notes.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Fifth Section */}
        <Box py={{ xs: 12, md: 24 }} bgcolor="white">
          <Container>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              gap={2}
            >
              <Typography variant="h4" component="h2" fontWeight="bold" color="secondary">
                Join Our Community
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                maxWidth={700}
                sx={{ mx: 'auto' }}
              >
                Start sharing and accessing quality notes today. Join thousands of students
                helping each other succeed.
              </Typography>
              <Box mt={4} display="flex" gap={2}>
                <Button variant="contained" color="primary">
                  Sign Up
                </Button>
                <Button variant="outlined" color="primary">
                  Explore Notes
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      {/* Footer */}
      <Box
        component="footer"
        py={6}
        bgcolor="white"
        borderTop={1}
        borderColor="grey.300"
      >
        <Container>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            gap={2}
          >
            <Typography variant="caption" color="textSecondary">
              © 2024 NoteShare. All rights reserved.
            </Typography>
            <Box display="flex" gap={2}>
              <Link href="#" passHref>
                <Button color="inherit" size="small">
                  Terms of Service
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button color="inherit" size="small">
                  Privacy
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
