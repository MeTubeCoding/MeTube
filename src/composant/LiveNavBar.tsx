import React, { useState } from "react"
import "../index.css"

interface LiveNavBarProps {
    onModeChange: (mode: string) => void;
}

export function LiveNavBar({ onModeChange }: LiveNavBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = (mode: string) => {
        toggleMenu()
        onModeChange(mode)
    }

    return (
        <>
            <div className='bg-indigo-500 relative'>
                <button onClick={toggleMenu} className="px-4 py-2 text-white">
                    Menu
                </button>
                {isOpen && (
                    <div className="absolute top-full mt-1 bg-white shadow-lg rounded w-32">
                        <p
                            onClick={() => handleMenuItemClick("streamer")}
                            className="p-2 border-b border-gray-300 cursor-pointer"
                        >
                            Streamer
                        </p>
                        <p
                            onClick={() => handleMenuItemClick("moderateur")}
                            className="p-2 border-b border-gray-300 cursor-pointer"
                        >
                            Moderateur
                        </p>
                        <p
                            onClick={() => handleMenuItemClick("viewer")}
                            className="p-2 cursor-pointer"
                        >
                            Viewer
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}
