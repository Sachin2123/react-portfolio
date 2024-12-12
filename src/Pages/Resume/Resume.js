import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { Button, Grid, Typography, Paper, Box } from "@mui/material";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sachin_Vishwakarma.pdf";
    link.click();
  };
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Animated Background */}
      <AnimatedBackground />

      <Grid
        container
        spacing={5}
        sx={{
          position: "relative",
          zIndex: 1,
          marginTop: "50px",
          justifyContent: "center",
          minHeight: "calc(100vh - 50px)",
        }}
      >
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              //   backdropFilter: "blur(10px)",
              color: "white",
              borderRadius: "15px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                marginTop: "3rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Ready to collaborate? Download my resume and let's create
              something impactful together!
            </Typography>

            <Button
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              variant="outlined"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                marginTop: "3rem",
                marginBottom: "2.5rem",
                fontWeight: "700",
                padding: "0.8rem 2.5rem",
                color: "white",
                borderColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
              }}
            >
              Download{" "}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
