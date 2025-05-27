import { ProjectCardProps } from "@/components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "NAVFAC Digital Twin",
    date: "December 2024 \u2013 Present",
    description:
      "Designed and implemented a containerized Digital Twin system for the Department of Defense using Docker and Kubernetes. Built virtual PLC and sensor apps to simulate control logic and real-time data exchange over custom networks. Automated deployment with CI/CD pipelines and used Python to model sensor data streams. Integrated secure SSH access for field devices and validated system behavior under offline and constrained network conditions to support mission-critical testing and deployment.",
    image: "/img/navfac.jpg",
    tags: ["Docker", "Kubernetes", "SSH", "DevSecOps", "Linux/Ubuntu", "CI/CD"],
    showPlaceholder: true,
  },
  {
    title: "Stelesthetics",
    date: "February 2022 \u2013 Present",
    description:
      "Led the end-to-end design and deployment of a client-facing Webflow site for a skincare esthetician. Focused on UX/UI to improve booking flow and service visibility, increasing appointment volume by 15%. Integrated Google Analytics to track user behavior and optimize conversion paths. Created and maintained responsive layouts for mobile and desktop, and collaborated with the client to iteratively refine copy, service pages, and visual branding.",
    image: "/img/stelesthetics.jpg",
    tags: ["Webflow", "Google Analytics", "Responsive Design"],
    link: "https://www.stelesthetics.net/",
  },
  {
    title: "ACM @ CSUN",
    date: "June 2024 \u2013 Present",
    description:
      "Developed and maintained the official website for CSUN’s ACM chapter to support events, outreach, and student engagement. Used Bootstrap, HTML/CSS, and JavaScript to implement a clean, mobile-friendly layout. Automated content updates and monitored site traffic via analytics tools, contributing to a 15% increase in site interaction. Regularly updated news sections, meeting announcements, and resources to ensure visibility and usability for the student body.",
    image: "/img/acm.png",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript", "Web Development"],
    link: "https://csunacm.org/", // Update to real link if needed
  },
  {
    title: "LifeAid App",
    date: "September 2024 \u2013 Present",
    description:
      "Served as technical advisor for an early-stage mobile app focused on improving veteran and first responder well-being. Assisted the founder with strategic decisions on architecture, user engagement, and analytics integration. Participated in product planning, wireframe reviews, and infrastructure discussions. Attended Google developer events to research relevant tools and trends. Provided ongoing technical support and documentation to improve functionality, data privacy, and usability.",
    image: "/img/lifeaid.jpeg",
    tags: ["App Consulting", "Tech Strategy", "Analytics", "User Engagement"],
    showPlaceholder: false,
  },
];

export default projects;
