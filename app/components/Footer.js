import React from "react";

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            Tripura Tourism
          </h4>
          <p className="text-sm mb-4">
            Discover breathtaking destinations, vibrant culture, and serene
            nature in Tripura.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        {/* Blogs */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Blogs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Top 10 Places to Visit
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Cultural Festivals of Tripura
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition">
                Hidden Gems for Nature Lovers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>📍 Agartala, Tripura</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@tripuratourism.in</li>
            <li>
              <a href="#contact" className="hover:text-green-600 transition">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Trips Gallery */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            Recent Trips
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/gallery${(i % 6) + 1}.jpg`}
                alt={`Trip ${i}`}
                className="w-full h-16 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Tripura Tourism. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
