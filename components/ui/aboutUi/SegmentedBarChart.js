import React from 'react';

export default function SegmentedBarChart() {
  return (
    <div className="w-full h-16 bg-gray-200 rounded-full overflow-hidden mt-24">
      <div className="h-full flex ">
        <div className="w-1/3 bg-gradient-to-r from-orange-400 to-orange-500"></div>
        <div className="w-1/3 bg-gradient-to-r from-blue-400 to-blue-500"></div>
        <div className="w-1/3 bg-gradient-to-r from-green-400 to-green-500"></div>
      </div>
      <div className="h-full flex">
        <div className="w-1/3 text-center text-white font-bold">17%</div>
        <div className="w-1/3 text-center text-white font-bold">13%</div>
        <div className="w-1/3 text-center text-white font-bold">6%</div>
      </div>
    </div>
  );
}
