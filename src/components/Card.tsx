import React from "react";

interface ProjectCardProps {
  logoUrl: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  logoUrl,
  description,
  link,
}) => (
  <div
    className="rounded-2xl shadow-lg overflow-hidden bg-cover  bg-center p-6 text-white relative"
    style={{ backgroundImage: `url(${logoUrl})` }}
  >
    <div className="backdrop-brightness-50 rounded-xl p-4">
      <p className="text-sm mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
      >
        Visit Site
      </a>
    </div>
  </div>
);

export default ProjectCard;
