/* eslint-disable prettier/prettier */
import React from 'react';
import 'tailwindcss/tailwind.css';

interface VideoPlayerProps {
    videoId: string;
}

const WindowVideo: React.FC = () => {
    
    return (

        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                            Titre de la vidéo
                        </h2>
                        <div className="flex mt-1">
                            <span className="inline-flex items-center text-sm leading-5 font-medium text-gray-500 mr-6">
                            1 234 vues
                            </span>
                            <span className="inline-flex items-center text-sm leading-5 font-medium text-gray-500 mr-6">
                            Publié le 12 mars 2022
                            </span>
                        </div>
                        <div className="mt-6">
                            <div className="relative h-0 overflow-hidden pb-9/16">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/N-TCJquxeFk"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WindowVideo;