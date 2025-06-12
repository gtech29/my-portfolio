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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (/[^a-zA-Z\s'-]/.test(formData.name)) {
      newErrors.name = "Name contains invalid characters.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (formData.email.includes("%")) {
      newErrors.email = "Email cannot contain special characters like %.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;
    if (!recaptchaToken) {
      setStatus("Please complete the CAPTCHA before submitting.");
      return;
    }

    if (formData.website) {
      setStatus("Spam detected.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "", website: "" });
        setErrors({ name: "", email: "", message: "" });
        setRecaptchaToken("");
      } else {
        setStatus(data.error || "CAPTCHA failed. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
          Let&#39;s Connect
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Whether you have a question, a project idea, or just want to chat —
          I&#39;d love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-sm bg-white/70 rounded-xl shadow-lg p-6 md:p-8 space-y-5 border border-slate-200 transition"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

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
            disabled={isSubmitting}
            className={`w-full py-3 rounded-md font-semibold tracking-wide transition duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm mt-2 text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
