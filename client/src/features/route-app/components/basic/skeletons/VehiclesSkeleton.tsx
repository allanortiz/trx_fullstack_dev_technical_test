export const VehiclesSkeleton = ({ hasFilters = false }: { hasFilters?: boolean }) => {
  return (
    <div className="flex flex-col w-full h-full">
      {hasFilters && (
        <div className="flex flex-row justify-between mb-8 items-center">
          <div className="w-36 h-8 animate-pulse bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 animate-pulse bg-gray-200 rounded-lg"></div>
        </div>
      )}
      <div className="w-full h-4 bg-gray-200 mb-4 animate-pulse rounded-2xl h-20"></div>
      <div className="w-full h-4 bg-gray-200 mb-4 animate-pulse rounded-2xl h-20"></div>
      <div className="w-full h-4 bg-gray-200 mb-4 animate-pulse rounded-2xl h-20"></div>
      <div className="w-full h-4 bg-gray-200 mb-4 animate-pulse rounded-2xl h-20"></div>
      <div className="w-full h-4 bg-gray-200 mb-4 animate-pulse rounded-2xl h-20"></div>
    </div>
  );
};
