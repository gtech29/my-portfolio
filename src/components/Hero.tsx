

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className=" relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 "
        style={{
          backgroundImage: "url('/img/hero.png')",
          backgroundSize: "cover", // Ensures the image scales to cover the area
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0 min-h-screen" />
        {/*  */}
        <div className="max-w-3xl text-center bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-2">
            Helping teams build secure, scalable systems that make sense.
          </h1>
          <p className="text-lg md:text-xl text-center text-black/80 max-w-2xl mx-auto mb-10">
            I work with secure automation, real-time integration, and applied AI
            to build systems that are practical and maintainable.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
              Build for me
            </button>
            <button className="bg-gray-100 text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Start building
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
