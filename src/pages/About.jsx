import React from "react";
import { useTitle } from "../hooks/useTitle";

export default function About() {
  useTitle("About");
  return (
    <div>
      <div
        className="  flex items-center justify-center
      p-6
      "
      >
        <div
          className="h-[100vh] max-w-4xl mx-auto bg-white 
         rounded-lg p-8 my-10"
        >
          <h1 className="text-4xl font-bold text-purple-600 text-center mb-4">
            About Us
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-purple-500">Excellence</span>
            , we believe in delivering exceptional solutions that meet your
            needs and exceed your expectations. With a passionate team of
            professionals, we strive to create innovative, reliable, and
            user-friendly products and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To empower individuals and organizations by providing
                high-quality services that drive success and foster growth.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be a global leader in our industry, known for innovation,
                integrity, and excellence in everything we do.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              Core Values
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Commitment to quality and innovation</li>
              <li>Customer-centric approach</li>
              <li>Integrity and transparency</li>
              <li>Fostering teamwork and collaboration</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
