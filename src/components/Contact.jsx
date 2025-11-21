import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Oops! Something went wrong. Try again.");
    }
  }

  return (
    <section className="p-6 max-w-xl mx-auto">
      <div
        id="contact"
        className="mt-6 p-8 rounded-2xl bg-gradient-to-br from-rose-50 via-white to-slate-50 shadow-lg ring-1 ring-slate-200"
      >
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
          Let's connect!
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          I'd love to hear from you! Whether it's a project idea, a question, or
          a collaboration — feel free to message me.
        </p>

        <form
          action="https://formsubmit.co/ymuskan3218@gmail.com"
          method="POST"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            required
            name="name"
            className="p-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-rose-400 outline-none transition"
            placeholder="Your name"
          />

          <input
            required
            name="email"
            type="email"
            className="p-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-rose-400 outline-none transition"
            placeholder="Your email"
          />

          <textarea
            required
            name="message"
            rows={4}
            className="p-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-rose-400 outline-none transition col-span-1 sm:col-span-2"
            placeholder="Your message..."
          />

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold shadow hover:shadow-md transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm font-medium text-green-600">{status}</p>
        )}
      </div>
    </section>
  );
}

export default Contact;
