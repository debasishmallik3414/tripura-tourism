"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const floatingTags = [
  { icon: "🕌", label: "#heritage", top: "-1.2rem", left: "-3rem" },
  { icon: "🌿", label: "#nature", top: "1rem", right: "-3rem" },
  { icon: "🎭", label: "#culture", bottom: "-1.2rem", left: "-2.8rem" },
  { icon: "🏯", label: "#temples", bottom: "-1.2rem", right: "-2.8rem" },
  { icon: "👑", label: "#royal", top: "-2.2rem", right: "2.5rem" },
];

const TripuraPopup = () => {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShow(true);
      const hideTimer = setTimeout(() => {
        setClosing(true);
        setTimeout(() => setShow(false), 500); // Wait for exit animation
      }, 3000);
      return () => clearTimeout(hideTimer);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
      <div
        className={`relative bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl transition-all duration-500 transform ${
          closing
            ? "opacity-0 scale-90 translate-y-4"
            : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setClosing(true);
            setTimeout(() => setShow(false), 400);
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
        >
          ✕
        </button>

        {/* Logo with Floating Tags */}
        <div className="relative flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center shadow-md relative z-10">
            <Image src="/tripuratourismlogo.png" alt="Tripura Logo" width={60} height={60} />
          </div>

          {/* Floating Tags */}
          {floatingTags.map((tag, index) => (
            <div
              key={index}
              className="absolute flex items-center gap-2 px-3 py-1 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg rounded-full text-xs font-medium text-black"
              style={{
                top: tag.top,
                bottom: tag.bottom,
                left: tag.left,
                right: tag.right,
                animation: `floatTag${index} 5s ease-in-out infinite`,
              }}
            >
              <span className="text-base">{tag.icon}</span>
              <span className="drop-shadow">{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <h2 className="text-xl font-bold text-center text-gray-800">
          Discover the Wonders of Tripura!
        </h2>
        <p className="text-center text-gray-600 mt-2 text-sm">
          Explore lush valleys, ancient temples, royal palaces and vibrant cultures — all in one trip.
        </p>

        {/* CTA */}
        <div className="mt-6 space-y-3">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            onClick={() => {
              setClosing(true);
              setTimeout(() => {
                setShow(false);
                window.location.href = "#top-deals";
              }, 400);
            }}
          >
            Plan My Trip
          </button>
          <button
            onClick={() => {
              setClosing(true);
              setTimeout(() => setShow(false), 400);
            }}
            className="w-full text-sm text-gray-600 hover:text-green-600 transition"
          >
            Maybe later →
          </button>
        </div>
      </div>

      {/* Floating Keyframes */}
      <style jsx>{`
        @keyframes floatTag0 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatTag1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes floatTag2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes floatTag3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes floatTag4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default TripuraPopup;
