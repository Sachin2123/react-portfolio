import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import RoomIcon from "@mui/icons-material/Room";
import { Button, Grid, Typography, Paper, Box } from "@mui/material";
import { FileUser } from "lucide-react";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const AboutMe = () => {
  const Icons = [
    {
      link: "https://www.linkedin.com/in/sachin-vishwakarma8286/",
      IconName: "LinkedIn",
      icons: LinkedInIcon,
    },
    {
      link: "https://github.com/Sachin2123",
      IconName: "GitHub",
      icons: GitHubIcon,
    },
    {
      IconName: "Email",
      icons: EmailIcon,
    },
    {
      IconName: "Mumbai",
      icons: RoomIcon,
    },
    {
      link: "https://wa.me/8286694649",
      IconName: "WhatsApp",
      icons: WhatsAppIcon,
    },
  ];

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
        {/* My Self Section */}
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
              variant="h3"
              sx={{ color: "#1976d2", mb: 2, fontWeight: "bold" }}
            >
              Hi, I'm Sachin Vishwakarma!
            </Typography>
            <Typography variant="h5" sx={{ color: "white", mb: 5 }}>
              A SQL / PL/SQL Developer | React & Node.js | Payroll & HRMS
              Implementation Analyst
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {Icons.map((item, index) => (
                <Box
                  item
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<item.icons />}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      borderColor: "#1976d2",
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "white",
                      },
                    }}
                  >
                    {item.IconName}
                  </Button>
                </Box>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Professional Summary Section */}
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
                mb: 2,
              }}
            >
              <FileUser color="#1976d2" sx={{ fontSize: "25px", ml: 2 }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Professional Summary
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              I am a Full-Stack Developer and Implementation Engineer with 3
              years of experience, specializing in SQL and PL/SQL along with
              Node.js, Express.js, SQL Server, MySQL, RESTful APIs, and modern
              frontend technologies. My expertise lies in database design, query
              optimization, and backend development, combined with building
              secure, high-performance, and scalable applications. I am
              passionate about continuously learning and quickly mastering new
              technologies.
            </Typography>
          </Paper>
        </Grid>

        {/* Education Section */}
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
                mb: 2,
              }}
            >
              <SchoolIcon sx={{ color: "#1976d2", fontSize: "25px", ml: 2 }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Education
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h5" sx={{ color: "#1976d2", ml: 2 }}>
                Bachelor of Science in Information Technology
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Mumbai University | 2019 - 2022
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Focused on software development, data structures, and web
                technologies.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
