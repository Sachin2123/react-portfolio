import React from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HotelIcon from "@mui/icons-material/Hotel";
import TvIcon from "@mui/icons-material/Tv";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Grid, Typography, Paper, Box } from "@mui/material";
import { FolderClosed, Hospital } from "lucide-react";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Projects = () => {
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
        {/* Project Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              //   textAlign: "center",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              //   backdropFilter: "blur(10px)",
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
              <FolderClosed color="#1976d2" sx={{ fontSize: "25px", ml: 2 }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Projects
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
              }}
            >
              <ApartmentIcon
                sx={{ color: "#1976d2", fontSize: "25px", ml: 0 }}
              />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 0 }}>
                Danube Properties - Real Estate (Dubai){" "}
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Designed and developed a high-performance real estate portal using
              Next.js, tailored to client requirements.{" "}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Created a modular architecture to enhance code reusability and
              maintainability across the application.{" "}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Implemented server-side rendering (SSR) to improve SEO rankings
              and reduce page load times for a better user experience.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
                mt: 3,
              }}
            >
              <ReceiptIcon sx={{ color: "#1976d2", fontSize: "25px", ml: 0 }} />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 0, mt: 0 }}>
                InvoiceWale – Invoice Firm (India){" "}
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Designed and deployed a robust invoicing platform tailored for
              businesses, using React.js for a dynamic and interactive user
              experience.{" "}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Ensured a responsive and visually appealing design with Material
              UI and Bootstrap for seamless usage across devices.{" "}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Implemented dynamic components like Advanced Search and Filters
              throughout the application.{" "}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
                mt: 3,
              }}
            >
              <BusinessIcon
                sx={{ color: "#1976d2", fontSize: "25px", ml: 0 }}
              />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2, mt: 0 }}>
                Durlax CRM – Textiles (India){" "}
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Developed a comprehensive Invoice Module in React.js for efficient
              inventory management and calculations.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Integrated MySQL for backend operations and used React Query for
              data fetching and state management.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Ensured cross-browser compatibility with Bootstrap.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Enhanced user experience with libraries such as Material UI, Lucid
              Icon, and Font Awesome.{" "}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
                mt: 3,
              }}
            >
              <HotelIcon sx={{ color: "#1976d2", fontSize: "25px", ml: 0 }} />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2, mt: 0 }}>
                Bellaviu - Hotel Booking (Dubai){" "}
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Built an intuitive hotel booking system using React.js for
              seamless user experience.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Integrated dynamic room availability and pricing using TenStack
              Query.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Optimized frontend performance to ensure fast page loading for
              users.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
                mt: 3,
              }}
            >
              <DirectionsCarIcon
                sx={{ color: "#1976d2", fontSize: "25px", ml: 0 }}
              />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2, mt: 0 }}>
                PR Hyundai (India)
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Built an intuitive hotel booking system using React.js for
              seamless user experience.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
                mt: 3,
              }}
            >
              <Hospital color="#1976d2" sx={{ fontSize: "25px", ml: 0 }} />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2, mt: 0 }}>
                MGM Hospital & Research Centre (India)
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Built an intuitive hotel booking system using React.js for
              seamless user experience.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
                mt: 3,
              }}
            >
              <TvIcon sx={{ color: "#1976d2", fontSize: "25px", ml: 0 }} />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2, mt: 0 }}>
                Panasonic (India)
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Built an intuitive hotel booking system using React.js for
              seamless user experience.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
