import Card from "./Card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] px-4">
        <div className="max-w-4xl mx-auto pt-20 text-center px-4">
          <h1 className="text-2xl md:text-2xl font-bold mb-4 text-black">
            Securing mission-critical systems at scale.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Research & Development Engineer with hands-on experience in
            DevSecOps, containerized infrastructure, and real-time system
            integration for public sector environments.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-20">
          <Card
            logoUrl="https://example.com/logo1.png"
            description="Description for Project 1."
            link="https://example.com/project1"
          />
          <Card
            logoUrl="https://example.com/logo2.png"
            description="Description for Project 2."
            link="https://example.com/project2"
          />
          <Card
            logoUrl="https://example.com/logo3.png"
            description="Description for Project 3."
            link="https://example.com/project3"
          />
        </div>
      </section>
    </>
  );
}
