/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */

import React from "react";
import "tailwindcss/tailwind.css";

const WindowUploadInfos = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-yt-bg-primary bg-red-600 flex justify-between items-center p-2 md:p-3">
                <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                    Publish Video
                </h2>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 text-sm md:text-base font-medium">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                        About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                        Contact
                        </a>
                    </li>
                    </ul>
                </nav>
                <button
                    className="block md:hidden focus:outline-none"
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </header>
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-md shadow-lg">
                    <div className="relative aspect-w-16 aspect-h-9">
                    <img
                        src="https://via.placeholder.com/640x360.png?text=Preview+Image"
                        alt="Video Preview"
                        className="absolute inset-0 w-full h-full object-cover rounded-t-md"
                    />
                    </div>
                    <form className="px-6 py-4">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="video-title" className="font-medium text-gray-800" aria-label="Video title" aria-required="true">
                        Titre de la vidéo
                        </label>
                        <input
                        type="text"
                        id="video-title"
                        name="video-title"
                        className="w-full px-3 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="video-description" className="font-medium text-gray-800" aria-label="Video description" aria-required="true">
                        Description de la vidéo
                        </label>
                        <textarea
                        id="video-description"
                        name="video-description"
                        rows={4}
                        className="w-full px-3 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600"
                        ></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="video-tags" className="font-medium text-gray-800" aria-label="Video tags">
                        Tags de la vidéo
                        </label>
                        <input
                        type="text"
                        id="video-tags"
                        name="video-tags"
                        className="w-full px-3 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                        type="submit"
                        className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 focus:outline-none focus:bg-red-800"
                        >
                        Publier
                        </button>
                    </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default WindowUploadInfos;