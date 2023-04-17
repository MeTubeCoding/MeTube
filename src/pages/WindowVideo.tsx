/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const WindowVideo = () => {

    const [videos, setVideos] = useState([])
    const [comments, setComments] = useState([])
    const [data, setData] = useState(null)

    const { id } = useParams()

    console.log(id)
    
    return (

        <div className='py-20 px-9 bg-me-black flex flex-col h-full'>
            <div className='left flex-1'>
                <div className="flex justify-center">
                    <iframe 
                        src='https://www.youtube.com/watch?v=N-TCJquxeFk'
                        title='Le meilleur duo évite la prison (ft Mister V, Léna, Theo Juice)'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

    );
};

export default WindowVideo;