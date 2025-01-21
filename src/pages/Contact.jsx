import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-purple-600 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Please fill out the form below or reach out to us directly.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows="4"
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reach Us At</h2>
          <p className="text-gray-600">
            Email: <a href="mailto:support@excellence.com" className="text-blue-500">support@excellence.com</a>
          </p>
          <p className="text-gray-600">
            Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a>
          </p>
        </div>

        {/* Embedded Map Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Location</h2>
          <iframe
            className="w-full h-64 border rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0865279205194!2d144.95605431531698!3d-37.81627944202196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c3f76578e5db!2sExcellence%20Headquarters!5e0!3m2!1sen!2sus!4v1616542265763!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Excellence Headquarters"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
