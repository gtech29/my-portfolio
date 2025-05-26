import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  description,
  image = "/img/python.png",
  tags = [],
}: ProjectCardProps) {
  return (
    <div className="flex flex-col h-full max-w-sm rounded-2xl overflow-hidden border border-transparent bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.2)]">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-contain w-full h-auto rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 px-6 pt-4 pb-6">
        <div>
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
