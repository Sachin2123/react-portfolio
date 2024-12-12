import React from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
// import "./Resume.css"; // Import the CSS for the animated background

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-resume.pdf"; // Replace with the actual path to your resume file
    link.download = "Sachin_Vishwakarma_Resume.pdf"; // The name the file will have when downloaded
    link.click();
  };

  return (
    <Box className="animated-background">
      <Container maxWidth="md" sx={{ minHeight: "100vh", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ color: "#fff", marginTop: "3rem", fontWeight: "bold" }}
        >
          Download My Resume
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            margin: "1rem 0 3rem",
            fontSize: "1.2rem",
          }}
        >
          Interested in my profile? Download my resume and let’s work together!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "0.75rem 2rem",
            textTransform: "none",
          }}
        >
          Download Resume
        </Button>
      </Container>
    </Box>
  );
};

export default Resume;
