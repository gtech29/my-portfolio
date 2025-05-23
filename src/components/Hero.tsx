// src/pages/Home.tsx or wherever this component is
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center px-4 text-white"
        style={{ backgroundImage: "url('/img/_ahero1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center  text-center bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-6 py-10 max-w-3xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Securing mission-critical systems at scale.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 text-center max-w-2xl mx-auto">
            Research & Development Engineer with hands-on experience in
            DevSecOps, containerized infrastructure, and real-time system
            integration for public sector environments.
          </p>

          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mt-6">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
