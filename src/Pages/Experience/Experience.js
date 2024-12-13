import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Experience = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
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
        {/* Professional Experience Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              //   textAlign: "center",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              //   backdropFilter: "blur(10px)",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                // justifyContent: "center",
                ml: 2,
                mb: 2,
              }}
            >
              <WorkIcon sx={{ color: "#1976d2", fontSize: "25px" }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Professional Experience
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2 }}>
                Full Stack Developer - Intern
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Rabsnet Solutions
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "white", ml: 2 }}>
                Sep 2024 - Dec 2024
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2, mt: 4 }}>
                Senior Software Implementation Engineer
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Spine Technologies Pvt. Ltd.
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "white", ml: 2 }}>
                Sep 2022 - Aug 2024
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
