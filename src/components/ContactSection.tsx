import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate with your backend or email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-20 py-12 md:py-16 overflow-hidden scroll-mt-32">
      <div className="max-w-xl w-full mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">Contact Us</h2>
        {submitted ? (
          <div className="text-center text-green-400 text-xl font-semibold py-16">Thank you! We’ll be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-black/60 rounded-2xl p-8 shadow-xl border border-blue-900/40 flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/60 border border-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company"
              className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/60 border border-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/60 border border-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/60 border border-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 rounded-full bg-[linear-gradient(90deg,_#6C63FF,_#1FC2BE)] hover:scale-105 transition-transform duration-300 text-white text-lg font-semibold shadow-lg"
              style={{ background: 'linear-gradient(90deg, #6C63FF, #1FC2BE)' }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
