

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Your business deserves modern software
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            I help businesses build secure, scalable systems using DevSecOps,
            real time integration, and AI — no complex setup required.
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
