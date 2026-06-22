import Box from "@mui/material/Box";
import { styles } from "./styles";
import ImageIntro from "../../components/Cards/ImageIntro";
import { Text } from "../../components/Text";

const projects = [
  {
    title: "Lync Source Accounting",
    description:
      "Schlumberger (now known as SLB) is a global leader in oilfield services and technology, providing innovative solutions for the energy industry.",
    image: '/lyncSource',
  },
  {
    title: "Flagship Towing",
    description:
      "HipLink (formerly Semotus Solutions) is a privately held company that provides text and voice based wireless alert and notification systems.",
    image: "/flagship",
  },
  {
    title: "Eclinic Assist",
    description:
      "Barnes & Noble is a leading bookseller and one of the largest retail bookstore chains in the United States, serving readers across every category.",
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
