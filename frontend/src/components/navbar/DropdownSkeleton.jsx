import React from 'react';

const WIDTHS = [60, 76, 68, 84, 72, 92, 64, 80, 70, 88, 66, 78, 74, 86, 62, 90, 82, 96];

const DropdownSkeleton = ({ columns = 3, rows = 6 }) => {
  return (
    <div className="absolute left-0 mt-2 w-[600px] max-w-[90vw] bg-white rounded-md shadow-lg py-3 z-50 border border-gray-200">
      <div className={`grid grid-cols-${columns} gap-1 px-2`}>
        {Array.from({ length: columns * rows }).map((_, i) => (
          <div key={i} className="px-3 py-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: `${WIDTHS[i % WIDTHS.length]}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownSkeleton;
