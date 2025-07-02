"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Dummy data for testing
const allPlaces = [
  { title: "Unakoti", category: "Destination", image: "/unakoti.jpg" },
  { title: "Neermahal", category: "Destination", image: "/neermahal.jpg" },
  { title: "Hotel Royal", category: "Hotel", image: "/hotel1.jpg" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = allPlaces.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Results for: <span className="text-orange-500">{query}</span>
      </h2>

      {results.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((item, index) => (
            <div key={index} className="bg-white shadow rounded overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
}
