import { Suspense } from "react";
import SearchClient from "./SearchClient"; // we’ll create this

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading search...</p>}>
      <SearchClient />
    </Suspense>
  );
}
