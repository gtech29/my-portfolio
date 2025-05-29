"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent!");
        setFormData({ name: "", email: "", message: "", website: "" });
        setRecaptchaToken("");
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-white to-slate-100 py-20 px-4 md:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-2">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-center text-black/80 max-w-2xl mx-auto mb-10">
          Feel free to reach out if you&#39;re interested in working together,
          have a question, or just want to say hi.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-xl shadow-sm p-6 space-y-5 border border-slate-200"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-white text-slate-800 border-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-white text-slate-800 border-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md bg-white text-slate-800 border-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <ReCAPTCHA
            sitekey="6LdyuU4rAAAAALn_RLtNUfKYKf3rfBsBraKppwUG"
            onChange={(token) => setRecaptchaToken(token || "")}
          />

          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p
              className={`text-center text-sm ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
