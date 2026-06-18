import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Button from "../../components/Button";
import { Text } from "../../components/Text";
import { styles } from "./styles";

const serviceOptions = [
  "Web Design & Development",
  "App Design & Development",
  "Digital Marketing",
  "AI Based Solutions",
  "Graphic Designing & Video Animation",
  "Prototyping",
  "Digital Health",
];

const ContactUs = () => {
  return (
    <Box sx={styles.root}>
      {/* <Box sx={[styles.solution]}>
        <ImageIntro
          title={"Contact Us"}
          description={
            "We look forward to hearing from you and appreciate your collaboration with us. Whether you need help with - questions, queries, or ideas - our committed team is ready to help. Use the information below to contact us or through the Contact Us form. Your suggestions are constructive as we aim to improve our services and your overall experience."
          }
          imageLeft={true}
          image={"/contact-us.png"}
        />
      </Box> */}
      <Box sx={styles.content}>
        <Box sx={styles.intro}>
          <Text size="subHeader" component="h1" sx={styles.title}>
            Let&apos;s talk about your next idea.
          </Text>
          <Text size="main" component="p" sx={styles.description}>
            Tell us what you are building, where you need support, and how we
            can reach you. Our team will get back to you with the right next
            step.
          </Text>
        </Box>

        <Box component="form" sx={styles.form}>
          <Text size="header" component="h2" sx={styles.formTitle}>
            Contact Us
          </Text>

          <Box sx={styles.fieldGrid}>
            <TextField
              required
              label="First name"
              placeholder="Enter here"
              variant="outlined"
              sx={styles.input}
            />
            <TextField
              required
              label="Last name"
              placeholder="Enter here"
              variant="outlined"
              sx={styles.input}
            />
          </Box>

          <TextField
            required
            fullWidth
            label="Company name"
            placeholder="Enter here"
            variant="outlined"
            sx={styles.input}
          />

          <Box sx={styles.fieldGrid}>
            <TextField
              required
              label="Work email"
              type="email"
              placeholder="example@email.com"
              variant="outlined"
              sx={styles.input}
            />
            <TextField
              label="Phone number"
              type="tel"
              placeholder="+1"
              variant="outlined"
              sx={styles.input}
            />
          </Box>

          <TextField
            required
            fullWidth
            select
            defaultValue=""
            label="Service interested in"
            variant="outlined"
            sx={styles.input}
          >
            {serviceOptions.map((service) => (
              <MenuItem key={service} value={service}>
                {service}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            fullWidth
            multiline
            minRows={5}
            label="Project details"
            placeholder="Briefly describe what you need help with"
            variant="outlined"
            sx={styles.input}
          />

          <Button
            buttonType="submit"
            type="secondary"
            size="lg"
            text="Submit"
            Icon={ArrowOutwardIcon}
            onClick={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
