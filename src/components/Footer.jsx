import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-2xl font-semibold">Pokémon Explorer</h2>
            <p className="text-sm mt-2">
              Explore the world of Pokémon and more.
            </p>
          </div>

          <nav className="flex gap-8 mb-6 sm:mb-0">
            <a href="/about" className="footer-link">
              About
            </a>
            <a href="/contact" className="footer-link">
              Contact
            </a>
            <a href="/privacy-policy" className="footer-link">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
          </nav>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Pokémon Explorer. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
