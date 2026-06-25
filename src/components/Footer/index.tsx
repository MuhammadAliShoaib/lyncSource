import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { Text } from "../Text";
import { footerStyles } from "./styles";

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/lyncsource",
    Icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/lyncsource",
    Icon: LinkedInIcon,
  },
];

const officeLocations = [
  {
    country: "USA Headquarter",
    address: "3 Sugar Creek Center Blvd, Sugar Land, TX 77478, USA",
  },
  {
    country: "Pakistan",
    address:
      "603, Al-Khaleej Tower, Shaheed-e-Millat Rd, BMCHS Sharafabad, Karachi, 75500",
  },
];

const Footer = () => {
  return (
    <Box component="footer" sx={footerStyles.root}>
      <Box sx={footerStyles.content}>
        <Box>
          <Box
            component="img"
            src="/fullLogo.png"
            alt="Lync Source"
            sx={footerStyles.brandLogo}
          />
          <Text size="main" component="p" sx={footerStyles.description}>
            Lync Source delivers scalable, AI-driven technology tailored to real
            business needs. From start-ups to enterprises, we turn ideas into
            intelligent systems.
          </Text>
          <Box aria-label="Social links" sx={footerStyles.socialList}>
            {socialLinks.map(({ label, href, Icon }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                sx={footerStyles.socialLink}
              >
                <Icon />
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Text size="header" component="h2" sx={footerStyles.sectionTitle}>
            Company
          </Text>
          <Box sx={footerStyles.linkList}>
            {companyLinks.map((link) => (
              <Box
                key={link.label}
                component={RouterLink}
                to={link.href}
                sx={footerStyles.footerLink}
              >
                {link.label}
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
         <Text size="header" component="h2" sx={footerStyles.sectionTitle}>
            Our Offices
          </Text>
          <Box sx={footerStyles.officeList}>
            {officeLocations.map((office) => (
              <Box key={office.country}>
                <Text
                  size="body"
                  component="h3"
                  sx={footerStyles.officeCountry}
                >
                  {office.country}
                </Text>
                <Text
                  size="body"
                  component="p"
                  sx={footerStyles.officeAddress}
                >
                  {office.address}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Text size="header" component="h2" sx={footerStyles.sectionTitle}>
            Contact Us
          </Text>
          <Box sx={footerStyles.contactList}>
            <Box
              component="a"
              href="tel:+923366356355"
              sx={footerStyles.contactItem}
            >
              <PhoneInTalkOutlinedIcon />
              US | +1 (254) 203 9560
            </Box>
            <Box
              component="a"
              href="tel:+923366356355"
              sx={footerStyles.contactItem}
            >
              <PhoneInTalkOutlinedIcon />
              PAK | +92 316 0403551
            </Box>
            <Box
              component="a"
              href="mailto:info@lyncsource.com"
              sx={footerStyles.contactItem}
            >
              <EmailOutlinedIcon />
              info@lyncsource.com
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={footerStyles.bottom}>
        <Text size="body" component="p" sx={footerStyles.copyright}>
          Copyright © 2026. Lync Source. All Right Reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
