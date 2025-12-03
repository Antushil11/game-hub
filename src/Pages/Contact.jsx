import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-center mb-8 text-lg">
          Have questions or feedback? Send us a message and we will get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none resize-none h-32"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white font-semibold py-3 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
