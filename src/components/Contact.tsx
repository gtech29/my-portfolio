"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot field
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

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

    if (!validateForm()) return;

    if (!recaptchaToken) {
      setStatus("Please complete the CAPTCHA before submitting.");
      return;
    }

    if (formData.website) {
      setStatus("Spam detected.");
      return;
    }

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
      setStatus("Failed to send. Try again later.");
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
          Feel free to reach out if you&#39;re interested in working together, have
          a question, or just want to say hi.
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-white text-slate-800 border-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-3 rounded-md bg-white text-slate-800 border-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
