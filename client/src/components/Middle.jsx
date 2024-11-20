import React from "react";

const Middle = ({ children }) => {
  return (
    <div className="bg-transparent flex items-center justify-center h-full">
      <div className="flex w-full h-[76vh] container mx-auto px-1">
        {/* Main Section */}
        <div className="flex-1 flex items-center justify-center p-2 rounded-xl m-4">
          <div className="text-center font-mono text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
