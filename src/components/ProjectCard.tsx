import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  icon?: string;
};

export default function ProjectCard({
  title,
  description,
  image = "/img/python.png", // fallback project image
}: ProjectCardProps) {
  return (
    <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-md bg-white">
      {/* Project Image */}
      <div className="relative w-full h-auto">
        <Image
          src={image}
          alt={title}
          width={200} // you can adjust this
          height={100} // fixed aspect
          className="object-contain w-full h-auto rounded-t-2xl"
        />
      </div>
      <div className="px-6 pt-4 pb-6 ">
        <h3 className="text-lg font-semibold text-black mb-2 text-center">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
