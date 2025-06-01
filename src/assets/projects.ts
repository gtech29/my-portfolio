import { ProjectCardProps } from "@/components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "NAVFAC Digital Twin",
    date: "Deployed December 2024 \u2013  Under Active Maintenance",
    description:
      "Designed and implemented a containerized Digital Twin system for the Department of Defense using Docker, Kubernetes, and Python. Developed virtual PLCs and sensor applications to simulate control logic and real-time data exchange over isolated networks. Leveraged CI/CD pipelines to automate deployment and integrated secure SSH access for field-level interaction. Addressed real-world challenges such as offline operation and constrained network environments, enabling reliable testing and validation of mission-critical infrastructure prior to field deployment.",
    image: "/img/navfac.jpg",
    tags: ["Docker", "Kubernetes", "SSH", "DevSecOps", "Linux/Ubuntu", "CI/CD"],
    showPlaceholder: false,
  },
  {
    title: "Stelesthetics",
    date: "Deployed February 2022 \u2013  Under Active Maintenance",
    description:
      "Led the full design and launch of a client-facing Webflow site for a skincare esthetician, focusing on responsive UX/UI to streamline the booking experience and improve service visibility. Integrated Google Analytics to monitor user behavior and inform conversion improvements, resulting in a 15% increase in appointment volume. Built and maintained mobile-first layouts and collaborated closely with the client to refine copy, service offerings, and visual branding through iterative feedback.",
    image: "/img/stelesthetics.jpg",
    tags: ["Webflow", "Google Analytics", "Responsive Design"],
    link: "https://www.stelesthetics.net/",
    showPlaceholder: false,
  },
  {
    title: "ACM @ CSUN",
    date: "Deployed June 2024 \u2013  Under Active Maintenance",
    description:
      "Developed and maintained the official website for CSUN\u2019s ACM chapter to support events, outreach, and student engagement. Implemented a responsive, mobile-friendly layout using Bootstrap, HTML/CSS, and JavaScript. Automated content updates and integrated analytics tools to monitor site traffic, contributing to a 15% increase in user interaction. Regularly published announcements, resources, and event updates to keep the student community informed and engaged.",
    image: "/img/acm.png",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript", "Web Development"],
    showPlaceholder: false,
    link: "https://csunacm.org/", // Update to real link if needed
  },
  {
    title: "LifeAid App",
    date: "Launched September 2024 \u2013 Actively Supporting",
    description:
      "Served as a technical advisor for an early-stage mobile app aimed at improving the well-being of veterans and first responders. Supported the founder in architectural decisions, user engagement strategies, and analytics integration. Contributed to product planning through wireframe reviews and infrastructure evaluations. Researched tools and trends at Google developer events to inform development. Provided ongoing technical support and documentation to enhance functionality, data privacy, and overall usability.",
    image: "/img/lifeaid.jpeg",
    tags: ["App Consulting", "Tech Strategy", "Analytics", "User Engagement"],
    showPlaceholder: false,
  },
];

export default projects;
