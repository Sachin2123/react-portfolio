import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import RoomIcon from "@mui/icons-material/Room";
import { Button, Grid, Typography, Paper } from "@mui/material";
import "./Home.css";

const Home = () => {
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
      // link: "mailto:sachinvishwakarma82826@gmail.com",
      IconName: "Email",
      icons: EmailIcon,
    },
    {
      link: "https://wa.me/8286694649",
      IconName: "8286694649",
      icons: WhatsAppIcon,
    },
    {
      // link: "",
      IconName: "Mumbai",
      icons: RoomIcon,
    },
  ];

  return (
    <Grid
      container
      spacing={5}
      style={{ marginTop: "50px", justifyContent: "center" }}
    >
      {/* First Section */}
      <Grid item xs={11} sm={10} md={8}>
        <Paper
          sx={{ backgroundColor: "black" }}
          elevation={8}
          style={{
            padding: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1>Sachin Vishwakarma</h1>
          <h2>Full Stack Developer</h2>

          <Grid
            container
            spacing={2}
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            {Icons.map((item, index) => (
              <Grid
                item
                xs={8}
                sm={6}
                md={4}
                lg={2}
                key={index}
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      transition: "background-color 0.2 s ease",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black ",
                      },
                    }}
                  >
                    <item.icons sx={{ fontSize: "2rem" }} />
                    <Typography
                      style={{
                        marginTop: "2px",
                        textAlign: "center",
                        marginLeft: "5px",
                      }}
                    >
                      {item.IconName}
                    </Typography>
                  </Button>
                </a>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>

      {/* 2nd Section */}
      <Grid item xs={11} sm={10} md={8}>
        <Paper
          elevation={8}
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <SchoolIcon style={{ fontSize: "25px", color: "#1976d2" }} />
            <Typography variant="h5">Education</Typography>
          </div>

          <h3 style={{ color: "#1976d2" }}>
            Bachelor's in Information Technology (Bsc IT)
          </h3>
          <h3 style={{ color: "#1976d2" }}>Mumbai University</h3>
          <h3 style={{ color: "#1976d2" }}>2019 - 2022</h3>
        </Paper>
      </Grid>

      {/* 3rd Section */}
      <Grid item xs={11} sm={10} md={8}>
        <Paper
          elevation={8}
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
              color: "white",
            }}
          >
            <WorkIcon style={{ fontSize: "25px", color: "#1976d2" }} />{" "}
            <Typography variant="h5">Professional Experience</Typography>{" "}
          </div>
          <h3 style={{ color: "white" }}>
            Bachelor's in Information Technology (Bsc IT)
          </h3>
          <h3 style={{ color: "white" }}>Mumbai University</h3>
          <h3 style={{ color: "white" }}>2019 - 2022</h3>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
