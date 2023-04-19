/* eslint-disable prettier/prettier */
import React from "react";
import "tailwindcss/tailwind.css";

const WindowChaineVideos = () => {
  return (
    <div
      className="bg-gray-100 border border-gray-300 flex items-center justify-between py-2 px-4 w-full"
      style={{ marginLeft: "80px" }}
    >
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow">
        Publier
      </button>
    </div>
  );
};

export default WindowChaineVideos;
