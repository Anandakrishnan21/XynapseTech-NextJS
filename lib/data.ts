import digital_agency from "@/public/digital_agency.json";
import unique_approach from "@/public/unique_approach.json";
import marketingIcon from "@/public/marketing.png";
import contactBannerImage from "@/public/contactBannerImage.png";

export const links = [
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "Blog",
    hash: "blog",
  },
  {
    name: "Career",
    hash: "careers",
  },
] as const;

export const HeroSectionContent = [
  {
    id: 1,
    flagTitle: "A TRUSTED DIGITAL AGENCY",
    flagColor: "#1f4fc9",
    title: "Empowering your digital journey",
    description:
      "We are a trusted digital agency dedicated to empowering businesses and individuals in their digital endeavours. Our mission is to provide comprehensive solutions that drive online success. From establishing your brand to enhancing visibility and engaging customers, we guide you every step of the way. Let us be your partner in unlocking new digital opportunities and achieving sustainable growth.",
    bannerLottie: digital_agency,
  },
] as const;

export const ServiceSectionContent = [
  {
    id: 1,
    flagTitle: "OUR SERVICES",
    flagColor: "#f45050",
    title: "Your Complete Digital Partner",
    description:
      "We are your one-stop destination for all your digital needs. From web development to marketing strategies, we offer comprehensive solutions tailored to your business. With our expertise and dedicated approach, we empower your digital journey and drive your success. Trust us as your reliable partner to deliver outstanding digital solutions that propel your business forward.",
    services: [
      {
        id: 1,
        title: "Digital Marketing",
        description:
          "Xynapse Technologies offers digital marketing solutions, including SEO, PPC, social media, content, and email marketing. Using data-driven insights and advanced tools, we create customized campaigns to boost brand visibility, reach target audiences, and drive conversions. Our comprehensive services deliver measurable results in the digital era.",
        imageUrl:
          "https://img.freepik.com/free-vector/digital-marketing-team-with-laptops-light-bulb-marketing-team-metrics-marketing-team-lead-responsibilities-concept-white-background_335657-2022.jpg?w=900&t=st=1683365749~exp=1683366349~hmac=badc6d0f2427bb34aa06ba5eaa104dacabb95acd71e4763266d374fdae4013ad",
        iconUrl: marketingIcon,
      },
      {
        id: 2,
        title: "Web Development",
        description:
          "Xynapse Technologies creates visually appealing, user-friendly websites. Our developers use latest tech and best practices to deliver custom solutions. We collaborate with clients to understand their brand, goals, and audience. From responsive design to seamless navigation, we ensure your website reflects your brand and engages visitors effectively.",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IhGijgoVTEs0_4rPuUXboQHaE8%26pid%3DApi&f=1&ipt=9777489add2f29ae2d7dd5045a57c140a0fcfa564a88ad2960de8e9d1a69e871&ipo=images",
        iconUrl:
          "https://cdn4.iconfinder.com/data/icons/web-development-5/500/responsive-layout-screen-512.png",
      },
      {
        id: 3,
        title: "E Commerce",
        description:
          "Achieve online retail success with Xynapse Technologies' e-commerce solutions. Our tailored services include secure platforms, payment gateways, inventory management, personalized shopping experiences, and efficient order fulfillment. Drive conversions, revenue growth, and customer satisfaction with our user-friendly and visually appealing e-commerce solutions.",
        imageUrl:
          "https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg?w=1060&t=st=1683367369~exp=1683367969~hmac=8504b5ee08f5a997e0e859d2845caae82288230526d6214525b8fe1189cf3729",
        iconUrl:
          "https://cdn1.iconfinder.com/data/icons/ecommerce-and-business-icon-set/256/google-nexus.png",
      },
      {
        id: 4,
        title: "App Development",
        description:
          "In the mobile-driven world, Xynapse Technologies delivers powerful and intuitive mobile applications. Our services span iOS and Android platforms, offering native, hybrid, and cross-platform solutions. Our skilled developers prioritize intuitive interfaces, robust functionality, and seamless integration, ensuring your app excels in the competitive market.",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KPE9YqPuD8xCVAOEwXD-UAHaE8%26pid%3DApi&f=1&ipt=aba17784015792f1ede5d2a2f4b1f521540197ba1c25aab2980f0f12d1aabb6a&ipo=images",
        iconUrl:
          "https://cdn4.iconfinder.com/data/icons/coronavirus-flat/64/mobile-news-app-follow-read-64.png",
      },
    ],
  },
] as const;

export const WorkSectioncontent = [
  {
    id: 1,
    flagTitle: "HOW IT WORKS",
    flagColor: "#de6d07",
    title: "Our unique approach",
    approaches: [
      {
        id: 1,
        title: "Strategy",
        description:
          "We stay updated with emerging technologies, market trends, and customer demands to provide innovative and tailored solutions.",
      },
      {
        id: 2,
        title: "Deploy",
        description:
          "Implementing customized digital marketing strategies for the industry.",
      },
      {
        id: 3,
        title: "Measure",
        description:
          "Tracking and analyzing results of digital marketing campaigns for companies.",
      },
    ],
    bannerLottie: unique_approach,
  },
] as const;

export const ProjectsSectionContent = [
  {
    id: 1,
    flagTitle: "OUR PROJECTS",
    flagColor: "#000",
    title: "We use our tool to tell about your story.",
    description:
      "We have successfully completed several projects that showcase our expertise and capabilities in various domains. These projects encompassed a wide range of industries, including technology, healthcare, finance, and manufacturing, among others",

    projects: [
      {
        id: 1,
        title: "Beyond",
        description: "Go beyond the expected",
        brandName: "Brand|Website",
        siteUrl: "",
      },
      {
        id: 2,
        title: "Beyond",
        description: "Go beyond the expected",
        brandName: "Brand|Website",
        siteUrl: "",
      },
      {
        id: 3,
        title: "Beyond",
        description: "Go beyond the expected",
        brandName: "Brand|Website",
        siteUrl: "",
      },
      {
        id: 4,
        title: "Beyond",
        description: "Go beyond the expected",
        brandName: "Brand|Website",
        siteUrl: "",
      },
    ],
  },
] as const;

export const TestimonialSectionContent = [
  {
    id: 1,
    flagTitle: "TESTIMONIALS",
    flagColor: "gold",
    title: "What our clients say about us",
    description: "Discover how our products/services have made a difference.",
    testimonials: [
      {
        id: 1,
        name: "Rajesh Kumar",
        designation: "CEO of ABC Painting Services",
        comment:
          "Xynapse Technologies has been instrumental in taking our business to new heights. Their digital marketing strategies have significantly increased our online visibility, leading to a boost in customer engagement and sales. We highly recommend their services.",
      },
      {
        id: 2,
        name: "Neha Sharma",
        designation: "Owner of XYZ Painters",
        comment:
          "I am extremely satisfied with the web development services Xynapse Technologies provides. They created a stunning and user-friendly website for my painting business, which has greatly enhanced our online presence. Their team is highly professional and delivers exceptional results",
      },
      {
        id: 3,
        name: "Ankit Patel",
        designation: "Marketing Manager at PaintPro India",
        comment:
          "The digital marketing expertise of Xynapse Technologies has helped us reach a wider audience and generate quality leads. Their team understands the nuances of the Indian market and has tailored their strategies accordingly. We have seen remarkable growth in our business thanks to their efforts",
      },
      {
        id: 4,
        name: "Dimti Karlenkov",
        designation: "Developer, Xynapse Tech",
        comment:
          "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 5,
        name: "Ferro Quereshi",
        designation: "Developer, Xynapse Tech",
        comment:
          "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
] as const;

export const ContactSectionContent = [
  {
    id: 1,
    flagTitle: "GET IN TOUCH",
    flagColor: "#9cff2e",
    title: "Let's work together!",
    bannerImage: contactBannerImage,
  },
] as const;

export const BlogPageContent = [
  {
    id: 1,
    title: "Overview of Xynapse Technologies",
    description: [
      "Welcome to Xynapse Technologies, a leading software company committed to delivering innovative solutions that empower businesses in the digital age. With a strong focus on web development, app development, e-commerce building, startup support, and digital marketing, we offer a comprehensive suite of services designed to meet your specific needs. In today's fast-paced and highly competitive business landscape, having a robust online presence is crucial. At Xynapse Technologies, we understand the importance of leveraging technology to drive growth and success. With our expertise and dedication, we help businesses harness the power of digital solutions to reach their full potential.",
      "Xynapse Technologies is a team of skilled professionals who are passionate about crafting exceptional digital experiences. Our company ethos revolves around innovation, collaboration, and a client-centric approach. We believe in building long-lasting partnerships with our clients, understanding their unique requirements, and delivering tailor-made solutions that drive tangible results.",
      "",
    ],
  },
] as const;

export const CareerPageContent = [
  {
    id: 1,
    title: "Shift your career for better output",
    subtitle: "Work smarter than ever",
    description:
      "New path brings together every action required to perform better in your career.Register as an intern in our company.",
    bannerImage:
      "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
] as const;

export const interestArea = [
  "Web development",
  "App development",
  "Machine learning",
  "Cyber security",
] as const;

export const internDuration = [
  "2 Weeks",
  "1 Month",
  "2 Months",
  "3 Months",
  "6 Months",
] as const;

export const hearSource = [
  "Referral from a Friend or Colleague",
  "Online Job Board",
  "Company Website/Careers Page",
  "Social Media Platforms",
  "University or College Career Center",
  "Print Advertisement",
  "Company Presentation or Workshop",
  "Other",
] as const;
