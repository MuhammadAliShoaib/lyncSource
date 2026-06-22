import Box from "@mui/material/Box";
import { styles } from "./styles";
import ImageIntro from "../../components/Cards/ImageIntro";
import { Text } from "../../components/Text";

const projects = [
  {
    title: "Lync Source Accounting",
    description:
      "Lync Source is a full-stack Asset and Liability Ledger Management System that helps businesses manage financial operations, accounts, vendors, and invoices.",
    image: '/lyncSource',
  },
  {
    title: "Shift Trader",
    description:
      "Shift Trader is a mobile application for essential workers, including police officers, firefighters, and healthcare professionals, to swap shifts, manage schedules, and coordinate with colleagues.",
    image: "/shiftTrader",
  },
  {
    title: "Flagship Towing",
    description:
      "Developed a towing and marine assistance management platform for Flagship Towing, a leading provider of on-water support services, featuring real-time vessel tracking, service dispatching, and operational management tools to enhance response times and customer experience.",
    image: "/flagship",
  },
  {
    title: "Eclinic Assist",
    description:
      "EClinic Assist is a healthcare credentialing and provider management platform that streamlines payor enrollment, compliance tracking, contract review, and credential management for medical practices.",
    image: "/eclinicAssist",
  },
];

const Products = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={[styles.solution]}>
        <ImageIntro
          title={"Some of our favourite Projects"}
          description={
            "Explore a selection of web applications, mobile solutions, AI-powered platforms, and digital experiences we've crafted to help businesses innovate, grow, and scale with confidence."
          }
          imageLeft={true}
          image={"/contact-us.png"}
        />
      </Box>
      <Box sx={styles.projectsGrid}>
        {projects.map((project) => (
          <Box key={project.title} sx={styles.projectCard}>
            <Box sx={styles.projectImageCarousel}>
              <Box className="project-image-track" sx={styles.projectImageTrack}>
                {[1,2,3].map((_,index) => (
                  <Box
                    key={`${project.image}/page${index+1}.jpeg`}
                    component="img"
                    src={`${project.image}/page${index+1}.jpeg`}
                    alt={project.title}
                    sx={styles.projectImage}
                  />
                ))}
              </Box>
            </Box>
            <Box sx={styles.projectContent}>
              <Text
                size="header"
                weight={800}
                color="text.primary"
                sx={styles.projectTitle}
              >
                {project.title}
              </Text>
              <Text
                component="p"
                size="body"
                color="text.primary"
                sx={styles.projectDescription}
              >
                {project.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
