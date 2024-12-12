import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RoomIcon from "@mui/icons-material/Room";
import { Button, Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Contact = () => {
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
              padding: "50px",
              textAlign: "center",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              color: "white",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <TextField
                id="name"
                name="name"
                placeholder="Enter Your Name"
                variant="outlined"
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />
              <TextField
                id="email"
                name="email"
                placeholder="Enter Your Email"
                variant="outlined"
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />

              <TextField
                type="textarea"
                id="textarea"
                name="textarea"
                placeholder="Your Message"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                sx={{ backgroundColor: "white", borderRadius: "5px" }}
              />

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    backgroundColor: "white",
                    padding: "10px 30px",
                    "&:hover": {
                      backgroundColor: "#f1f1f1",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>

            <Typography
              sx={{
                mt: 3,
                fontSize: "18px",
                fontWeight: "500",
                color: "#1976d2",
              }}
            >
              Feel free to connect with me through any of the platforms below!
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                mt: 3,
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
      </Grid>
    </Box>
  );
};

export default Contact;
