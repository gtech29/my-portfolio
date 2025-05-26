import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  showPlaceholder?: boolean;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  showPlaceholder,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={`rounded-lg shadow-lg bg-white p-6 flex flex-col ${
        className || ""
      }`}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-black mb-4">{title}</h3>

      {/* Image under title */}
      {image && (
        <div className="mb-4 items-center justify-center flex">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="rounded-xl object-contain w-auto h-auto"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-gray-500 mb-4">{description}</p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Link or Placeholder */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 font-medium transition"
        >
          View Project →
        </a>
      ) : showPlaceholder ? (
        <span className="text-gray-400 italic">Coming Soon</span>
      ) : null}
    </div>
  );
};

export default ProjectCard;
