import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">About Me</h3>
            <p className="text-white">
              I'm a passionate developer, eager to create innovative and
              user-friendly applications. Let's connect and build something
              amazing together!
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Connect with Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/your-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-white hover:text-blue-400 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
