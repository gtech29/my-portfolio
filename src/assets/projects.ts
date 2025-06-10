import { ProjectCardProps } from "@/components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "NAVFAC Digital Twin",
    date: "Deployed December 2024 \u2013  Under Active Maintenance",
    description:
      "Designed and implemented a containerized Digital Twin system for the Department of Defense using Docker, Kubernetes, and Python. Created virtual PLCs and sensor applications to simulate control logic and real-time data exchange across isolated networks. Automated deployment with CI/CD workflows and enabled secure SSH access for remote field interaction. Solved challenges related to offline operation and limited connectivity, supporting reliable testing and validation of mission-critical infrastructure before deployment.",
    image: "/img/navfac.jpg",
    tags: ["Docker", "Kubernetes", "SSH", "DevSecOps", "Linux/Ubuntu", "CI/CD"],
    showPlaceholder: false,
  },
  {
    title: "Stelesthetics",
    date: "Deployed February 2022 \u2013  Under Active Maintenance",
    description:
      "Led the end-to-end design and launch of a client-facing Webflow site for a skincare esthetician, with a focus on responsive UX/UI to streamline booking and improve service visibility. Integrated Google Analytics to track user behavior and guide conversion improvements, contributing to a 15 percent increase in appointment volume. Built and maintained mobile-first layouts, and collaborated closely with the client to refine content, service offerings, and branding through iterative feedback.",
    image: "/img/stelesthetics.jpg",
    tags: ["Webflow", "Google Analytics", "Responsive Design"],
    link: "https://www.stelesthetics.net/",
    showPlaceholder: false,
  },
  {
    title: "ACM @ CSUN",
    date: "Deployed June 2024 \u2013  Under Active Maintenance",
    description:
      "Developed and maintained the official website for CSUN’s ACM chapter to support events, outreach, and student engagement. Built a responsive, mobile-first layout using Bootstrap, HTML/CSS, and JavaScript. Automated content updates and integrated analytics tools to track site traffic, contributing to a 15 percent increase in user interaction. Published announcements, resources, and event details to keep the student community informed and active.",
    image: "/img/acm.png",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript", "Web Development"],
    showPlaceholder: false,
    link: "https://csunacm.org/", 
  },
  {
    title: "LifeAid App",
    date: "Launched September 2024 \u2013 Actively Supporting",
    description:
      "Served as a technical advisor for an early-stage mobile app focused on supporting the well-being of veterans and first responders. Guided architectural decisions, user engagement strategies, and analytics integration. Contributed to product planning through wireframe reviews and infrastructure assessments. Researched tools and industry trends at Google developer events to inform development. Provided ongoing technical support and documentation to improve functionality, privacy, and user experience.",
    image: "/img/lifeaid.jpeg",
    tags: ["App Consulting", "Tech Strategy", "Analytics", "User Engagement"],
    showPlaceholder: false,
  },
];

export default projects;
