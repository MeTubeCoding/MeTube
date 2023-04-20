/* eslint-disable prettier/prettier */
import React from "react";
import "tailwindcss/tailwind.css";

import logo from './user.jpg';
import cover from './coverprank2.jpg';

const WindowChaineVideosPrank2 = () => {
  return (
    <div className="relative bg-me-darkpurple" style={{ marginLeft: '13%' }}>
      <div className="w-full h-64" style={{ backgroundImage: `url(${cover})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
      <div className="absolute top-64 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-64 left-0 right-0 flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 right-0 flex items-center bg-me-darkpurple justify-start pl-10">
          <img src={logo} alt="Logo de la chaîne" className="w-25 h-25 object-cover rounded-full border-4 border-me-orange mt-8 mr-4" />
          <div className="flex flex-col">
            <h1 className="text-me-orange font-bold text-4xl mt-4 mb-2">André From The Valley</h1>
            <div className="flex space-x-4">
              <p className="text-me-yellow font-medium text-lg">@AndreFromTheValley</p>
              <p className="text-me-yellow font-medium text-lg">•</p>
              <p className="text-me-yellow font-medium text-lg">100 000 abonnés 1 vidéo</p>
            </div>
            <p className="text-me-yellow font-medium text-lg">Founder Agile@School® // Agile Coach // Product Ops // Product & Coding Bootcamp Shamane</p>
            <div className="mt-4 flex space-x-4">
              <button className="text-me-yellow py-2 px-4 font-bold rounded-lg">ACCUEIL</button>
              <button className="text-me-yellow py-2 px-4 font-bold rounded-lg">VIDÉOS</button>
              <button className="text-me-yellow py-2 px-4 font-bold rounded-lg">EN DIRECT</button>
              <button className="text-me-yellow py-2 px-4 font-bold rounded-lg">À PROPOS</button>
              <button className="bg-me-orange text-me-yellow font-bold py-2 px-4 rounded-lg ml-auto">S&apos;abonner</button>
            </div>
          </div>
          <div className="flex flex-col">

          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowChaineVideosPrank2;
