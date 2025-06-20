const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-4 p-6">
      {/* Text Section */}
      <div className="flex-1 space-y-4">
        <div className="h-6 rounded w-3/4 shimmer"></div>
        <div className="h-4 rounded w-1/2 shimmer"></div>
        <div className="h-4 rounded w-1/3 shimmer"></div>
        <div className="h-20 rounded w-full shimmer"></div>
        <div className="h-10 rounded w-32 shimmer"></div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-48 md:h-auto rounded shimmer"></div>
    </div>
  );
};

export default SkeletonCard;
