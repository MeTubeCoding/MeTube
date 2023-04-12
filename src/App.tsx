import React from 'react';

function History() {
  return (
    <div className="History">
      <div className="bg-neutral-900 object-cover absolute top-0 left-0 right-0">
        <img src="menu-btn.png" className="object-cover w-5 m-5"></img>
        <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 m-3"></div>
      </div>
        <div className="absolute top-20 left-0 right-0 bottom-0 flex">
          <iframe
            width="357"
            height="201"
            src="https://www.youtube.com/embed/UUYv3kk37oQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
}

export default History;