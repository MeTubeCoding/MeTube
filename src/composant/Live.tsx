import React from 'react';


export function Live(){
    return(
    <>
    <div id="videos" className='border flex justify-around'>
        <video className="video-player" id="user-1" autoPlay playsInline></video>
        <video className="video-player" id="user-2" autoPlay playsInline></video>
    </div>
    </>   

        
    )
}