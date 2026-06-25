import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Text } from "../../../components/Text";
import { faqStyles } from "./styles";

const faqs = [
  {
    id: "what-is-lync-source",
    question: "What is Lync Source?",
    answer:
      "Lync Source is a leading IT outsourcing partner offering a full suite of digital services. Our expertise covers website and app design and development, creative graphics and videos, strategic digital marketing, AI-based solutions, digital health innovations, and prototyping. We cater to all your digital needs with precision and care.",
  },
  {
    id: "benefits-of-it-outsourcing",
    question: "What are the benefits of IT outsourcing?",
    answer:
      "IT outsourcing helps reduce costs and gives you access to specialized expertise, allowing your business to focus on its core functions. It also offers scalability, increased efficiency, and a faster time-to-market for innovative solutions.",
  },
  {
    id: "data-security-confidentiality",
    question: "How does Lync Source ensure data security & confidentiality?",
    answer:
      "Lync Source uses advanced encryption, secure coding practices, and strict access controls to protect your data. We also adhere to industry standards and conduct regular security audits to ensure confidentiality and integrity.",
  },
  {
    id: "technology-legal-rights",
    question:
      "Who owned the legal right to technology developed by a Lync Source developer?",
    answer:
      "At Lync Source, the legal rights to technology we develop are typically transferred to you upon project completion, ensuring full ownership and control. Specific terms are clearly defined in our contract to protect your intellectual property.",
  },
  {
    id: "ios-android-apps",
    question: "Does Lync Source build apps for both iOS & Android?",
    answer:
      "Yes, Lync Source builds high-quality apps for both iOS and Android platforms, ensuring a seamless user experience across all devices.",
  },
];

const FAQ = () => {
  return (
    <Box component="section" sx={faqStyles.root}>
      <Box sx={faqStyles.header}>
        <Text size="bigHeader" component="h2" weight={600}>
          Frequently Asked Questions
        </Text>

        <Text size="main" component="p" sx={faqStyles.subtitle}>
          Everything you need to know about working with Lync Source. Can't find
          the answer you're looking for?{" "}
          <Box component={Link} to="/contact-us" sx={faqStyles.subtitleLink}>
            Chat to our friendly team.
          </Box>
        </Text>
      </Box>

      <Grid container spacing={faqStyles.gridSpacing} sx={faqStyles.grid}>
        {faqs.map((faq) => (
          <Grid
            key={faq.id}
            size={{ xs: 12, md: 6, lg: 4 }}
            sx={faqStyles.faqItem}
          >
            <Text size="subHeader" component="h3" sx={faqStyles.question}>
              {faq.question}
            </Text>

            <Text size="body" component="p" sx={faqStyles.answer}>
              {faq.answer}
            </Text>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQ;
