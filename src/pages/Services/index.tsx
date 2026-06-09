import Box from "@mui/material/Box";
import { serviceStyle } from "./styles";
import ImageIntro from "../../components/Cards/ImageIntro";

const solutions = [
  {
    title: "Web Design & Development",
    description:
      "We specialize in creating visually stunning, user-friendly, and responsive websites tailored to your business needs. Our team combines cutting-edge design principles with robust development techniques to ensure seamless functionality across all devices. From custom layouts to e-commerce solutions, we build websites that not only look great but also drive engagement and conversions. We focus on optimizing performance, security, and scalability to future-proof your online presence. Let us transform your vision into a digital reality that stands out in today’s competitive market.",
    image: "/web.png",
  },
  {
    title: "App Design & Development",
    description:
      "Our app design and development services are designed to deliver intuitive, high-performance mobile applications for iOS and Android platforms. We focus on creating apps that offer exceptional user experiences, combining sleek design with powerful functionality. Whether you need a business app, a gaming platform, or a custom solution, we ensure your app is scalable, secure, and aligned with your goals. From concept to launch, we handle every step of the process, ensuring your app stands out in the crowded app marketplace.",
    image: "/app.png",
  },
  {
    title: "Graphic Designing & Video Animation",
    description:
      "We bring your brand to life with captivating graphic design and video production services. Our team creates visually compelling content, including logos, banners, infographics, animations, and promotional videos, that resonate with your audience. By blending creativity with strategic messaging, we ensure your visuals leave a lasting impression. Whether it’s for social media, advertising, or branding, we deliver high-quality designs and videos that enhance your brand identity and drive engagement.",
    image: "/graphics.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing services are designed to elevate your online presence and drive measurable results. From SEO and social media marketing to PPC campaigns and email marketing, we craft strategies tailored to your business goals. We focus on increasing brand visibility, generating leads, and boosting conversions through data-driven approaches. Our team stays ahead of the latest trends and algorithms to ensure your campaigns are effective and impactful. Let us help you connect with your audience and grow your business in the digital space.",
    image: "/marketing.png",
  },
  {
    title: "AI Based Solutions",
    description:
      "We harness the power of artificial intelligence to provide innovative solutions that streamline operations and enhance decision-making. From predictive analytics and chatbots to machine learning models, we develop AI tools tailored to your specific needs. Our solutions help businesses automate processes, improve efficiency, and gain actionable insights from data. By integrating AI into your workflow, we empower you to stay ahead of the competition and deliver smarter, faster, and more personalized experiences to your customers.",
    image: "/ai-solution.png",
  },
  {
    title: "Prototyping",
    description:
      "Our prototyping services help you bring your ideas to life before full-scale development. We create interactive, high-fidelity prototypes that allow you to visualize and test your product’s functionality and design. This process ensures that your concept is user-friendly, feasible, and aligned with your goals. By identifying potential issues early, we save you time and resources while delivering a product that meets user expectations. Let us help you turn your vision into a tangible, testable reality.",
    image: "/prototyping.png",
  },
  {
    title: "Digital Health",
    description:
      "We provide innovative digital health solutions designed to transform the healthcare industry. From telemedicine platforms to health monitoring apps, we develop tools that improve patient care and streamline medical processes. Our solutions focus on enhancing accessibility, accuracy, and efficiency in healthcare delivery. By leveraging the latest technologies, we help healthcare providers and patients connect seamlessly, ensuring better outcomes and experiences. Partner with us to create a healthier, more connected future.",
    image: "/digital-health.png",
  },
];

const Services = () => {
  return (
    <Box>
      {solutions.map((item, index) => (
        <Box
          sx={[
            serviceStyle.solution,
            {
              backgroundColor:
                index % 2 === 0 ? "rgb(217,217,217)" : "transparent",
            },
          ]}
        >
          <ImageIntro
            title={item.title}
            description={item.description}
            imageLeft={index % 2 === 0}
            image={item.image}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Services;
