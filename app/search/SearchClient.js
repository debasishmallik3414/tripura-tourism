"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const data = [
  { title: "Unakoti", category: "Destination", image: "/unakoti.jpg" },
  { title: "Neermahal", category: "Destination", image: "/neermahal.jpg" },
  { title: "Hotel Royal", category: "Hotel", image: "/hotel1.jpg" },
];

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for: <span className="text-orange-600">"{query}"</span>
      </h2>

      {results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl transition">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
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
