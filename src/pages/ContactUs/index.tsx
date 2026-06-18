import Box from "@mui/material/Box";
import ImageIntro from "../../components/Cards/ImageIntro";
import { styles } from "./styles";

const ContactUs = () => {
  return (
    <Box sx={styles.root}>
      <Box
        sx={[
          styles.solution,
        ]}
      >
        <ImageIntro
          title={'Contact Us'}
          description={'We look forward to hearing from you and appreciate your collaboration with us. Whether you need help with - questions, queries, or ideas - our committed team is ready to help. Use the information below to contact us or through the Contact Us form. Your suggestions are constructive as we aim to improve our services and your overall experience.'}
          imageLeft={true}
          image={'/contact-us.png'}
        />
      </Box>
    </Box>
  );
};

export default ContactUs;
