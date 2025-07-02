"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer
      id="about"
      data-aos="fade-up"
      className="bg-gray-900 text-gray-300 py-12 px-4 scroll-mt-28"
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {/* Company Info */}
        <div data-aos="fade-right" data-aos-delay="100">
          <h4 className="text-lg font-semibold mb-4 text-white">
            Tripura Tourism
          </h4>
          <p className="text-sm mb-4">
            Discover breathtaking destinations, vibrant culture, and serene
            nature in Tripura.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-4 text-lg">
            {[
              { href: "https://facebook.com", icon: "facebook-f", color: "text-blue-500" },
              { href: "https://instagram.com", icon: "instagram", color: "text-pink-500" },
              { href: "https://twitter.com", icon: "twitter", color: "text-sky-400" },
              { href: "https://linkedin.com", icon: "linkedin-in", color: "text-blue-300" },
              { href: "https://youtube.com", icon: "youtube", color: "text-red-500" },
              { href: "https://pinterest.com", icon: "pinterest-p", color: "text-red-400" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${item.color} transition duration-300`}
              >
                <i className={`fab fa-${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Blogs */}
        <div data-aos="fade-up" data-aos-delay="200">
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
        <div data-aos="fade-up" data-aos-delay="300">
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
        <div data-aos="fade-left" data-aos-delay="400">
          <h4 className="text-lg font-semibold mb-4 text-white">
            Recent Trips
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/gallery${(i % 6) + 1}.jpg`}
                alt={`Trip ${i}`}
                className="w-full h-16 object-cover rounded hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        © 2025 Tripura Tourism. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
