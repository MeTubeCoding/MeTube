/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BsPatchCheck } from 'react-icons/bs';
import { FaThumbsUp, FaThumbsDown, FaShareAlt } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const WindowVideo = () => {

  return (
    <body className="bg-me-darkpurple min-h-screen">
      <div className="max-w-screen-lg mx-auto mt-0" style={{ marginLeft: "10%" }}>
        <div className="flex flex-col items-start">
          <video
            className="w-full flex-grow-1 transform -translate-x-1/2 translate-x-5"
            controls
            width="560"
            height="315"
          >
            <source src="https://www.youtube.com/watch?v=UbFOU_XR85E" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="mt-4 text-xl font-bold pl-4 text-me-yellow">CODING FACTORY DE CERGY : LA CALIFORNIE !</h2>
          <div className="flex items-center justify-between mt-4 pl-4 w-full">
            <div className="flex items-center">
              <div className="flex items-center">
                <div
                  className="w-14 h-14 bg-me-yellow rounded-full"
                  style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
                ></div>
                <div className="ml-2">
                  <h3 className="text-lg font-bold text-me-yellow">André From The Valley</h3>
                  <p className="text-sm text-me-yellow">100 000 abonnés</p>
                </div>
              </div>
              <button className="ml-4 px-4 py-2 text-me-yellow bg-me-lightpurple rounded-full shadow-md hover:shadow-lg h-10">
                S&apos;abonner
              </button>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex flex-row items-center mt-3">
                <div className="mr-2 flex items-center">
                  <button className="p-2 rounded-full bg-me-lightpurple shadow-md hover:shadow-lg">
                    <FaThumbsUp className="text-me-yellow w-4 h-4" />
                  </button>
                  <span className="text-me-yellow font-medium ml-2">500 k</span>
                </div>
                <span className="text-me-yellow mx-2">|</span>
                <button className="p-2 rounded-full bg-me-lightpurple shadow-md hover:shadow-lg">
                  <FaThumbsDown className="text-me-yellow w-4 h-4" />
                </button>
                <span className="text-me-yellow mx-2">|</span>
                  <button className="p-2 rounded-full bg-me-lightpurple shadow-md hover:shadow-lg">
                    <FaShareAlt className="text-me-yellow w-4 h-4" />
                  </button>
                <span className="text-me-yellow ml-2">Partager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default WindowVideo;