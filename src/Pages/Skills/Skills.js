import React from "react";
import { Button, Grid, Typography, Paper, Box, Divider } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import { useRef, useEffect } from "react";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Skills = () => {
  const Skills = [
    { frontend: "React JS" },
    { frontend: "Next JS" },
    { frontend: "Javascript" },
    { frontend: "HTML" },
    { frontend: "CSS" },
    { backend: "Express JS" },
    { backend: "Node JS" },
    { backend: "MySQL" },
    { responsive: "Material UI" },
    { responsive: "Bootstrap" },
    { tools: "Postman" },
    { tools: "Visual Studio Code" },
    { tools: "Netlify" },
    { tools: "Github" },
    { tools: "Lucide" },
  ];
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
        {/* Skills Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              borderRadius: "15px",
              mb: 15,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
              }}
            >
              <ComputerIcon sx={{ color: "#1976d2", fontSize: "25px" }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Skills
              </Typography>
            </Box>

            {["Frontend", "Backend", "Tools", "Responsive"].map((category) => (
              <Grid
                container
                key={category}
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "5px",
                }}
              >
                <Divider />

                <Typography
                  sx={{
                    ml: 4,
                    color: "#1976d2",
                    fontSize: "25px",
                    mt: 1,
                  }}
                >
                  {category}
                </Typography>

                {Skills.filter((item) => item[category.toLowerCase()]).map(
                  (item, index) => (
                    <Box
                      item
                      key={index}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{
                          ml: 4,
                          color: "white",
                        }}
                      >
                        {item[category.toLowerCase()]}
                      </Typography>

                      <Typography
                        sx={{
                          mr: 3,
                          mb: 1,
                          color: "white",
                        }}
                      >
                        {category === "Frontend" ||
                        category === "Backend" ||
                        category === "Tools" ||
                        category === "Responsive"
                          ? "Advance"
                          : ""}
                      </Typography>
                    </Box>
                  )
                )}
              </Grid>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
