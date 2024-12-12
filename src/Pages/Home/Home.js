import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import RoomIcon from "@mui/icons-material/Room";
import ComputerIcon from "@mui/icons-material/Computer";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HotelIcon from "@mui/icons-material/Hotel";
import TvIcon from "@mui/icons-material/Tv";
import { Button, Grid, Typography, Paper, Box, Divider } from "@mui/material";
import { FileUser, Hospital, FolderClosed } from "lucide-react";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";
import Projects from "../Projects/Projects";

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
        {/* First Section */}
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
              Sachin Vishwakarma
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", mb: 4, fontStyle: "" }}
            >
              Full-Stack Developer | Creating Innovative Digital Solutions
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
                    mt:1
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
              Experienced{" "}
              <span style={{ color: "#1976d2", fontWeight: "bold" }}>
                Full-Stack Developer
              </span>{" "}
              with over 2+ years of expertise in designing and delivering
              scalable web solutions across industries such as real estate,
              hospitality, and textiles. Proficient in modern technologies
              including React.js, Next.js, and Node.js, with a strong focus on
              creating intuitive user interfaces and optimizing backend
              performance for seamless user experiences.
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

        {/* Skills Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              borderRadius: "15px",
              // mb: 5,
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
                          color: "white",
                          mb: 1,
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

        {/* Project Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
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
                // justifyContent: "center",
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
              <Hospital color="#1976d2" sx={{ fontSize: "25px", ml: 0 }} />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2, mt: 0 }}>
                MGM Hospital & Research Centre (India)
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Installed Spine HRMS, Payroll, and MobileHR solutions on client
              premises.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Developed customized letter and payslip templates using HTML and
              CSS to meet client requirements.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Installed and configured Microsoft SQL Server Management Studio
              for database management of the Spine HR Suite.
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
              Integrated biometric devices for attendance tracking with Spine HR
              Suite, enhancing accuracy and efficiency.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Designed and implemented customized letter and payslip templates
              using HTML and CSS to meet client specifications.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Managed application migration during the transition from desktop
              to web-based platforms.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
