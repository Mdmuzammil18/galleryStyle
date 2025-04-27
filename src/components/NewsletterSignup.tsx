import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <form
      className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto max-w-xs"
      aria-label="Newsletter signup"
      onSubmit={handleSubmit}
    >
      <label htmlFor="newsletter" className="sr-only">
        Subscribe to our newsletter
      </label>
      <div className="flex w-full">
        <input
          id="newsletter"
          type="email"
          required
          placeholder="Your email address"
          className="px-4 py-2 rounded-l-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 w-full"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={submitted}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-bold hover:scale-105 transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-blue-400"
          disabled={submitted}
          aria-label="Submit newsletter signup"
        >
          <FiSend />
        </button>
      </div>
      {error && <span className="text-xs text-red-400">{error}</span>}
      {submitted && (
        <span className="text-xs text-green-300">Thank you for subscribing!</span>
      )}
      <span className="text-xs text-blue-200 opacity-70">Get AI tips & updates. No spam.</span>
    </form>
  );
};

export default NewsletterSignup;
