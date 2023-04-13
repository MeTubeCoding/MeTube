import React, {useState} from 'react';
import { resolveProjectReferencePath } from 'typescript';
import './abonnements.css';

const test = document.getElementById("test");

test?.addEventListener("click",()=>{
  fetch('http://localhost:5600/demo')
    // .then(response => response.text())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
});

// const Menu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="menu-container">
//       <div className="menu-button" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <button className="material-icons">Close</button>
//         ) : (
//           <button className="material-icons">Menu</button>
//         )}
//       </div>
//       <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
//         <ul>
//           <li>
//             <a href="index.tsx">Accueil</a>
//           </li>
//           <li>
//             <a href="timeline.tsx">Recommandés</a>
//           </li>
//           <li>
//             <a href="#">Tendances</a>
//           </li>
//           <li>
//             <a href="Abonnements">Abonnements</a>
//           </li>
//           <li>
//             <a href="#">Bibliothèque</a>
//           </li>
//           <li>
//             <a href="#">Historique</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };


// // ================================================================================================
// // ================================================================================================
// // ================================================================================================


// function App() {
//   return (
//     <div>
//       <body>
//         <div className = "haut">
//           <a href='App.tsx'><h1>MeTUBE</h1></a>
//           <div className="search">
//             <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
//             <button className='rechercher'>Rechercher</button>
//           </div>
//         </div>
//         <div>
//           {Menu()}
//         </div>
//       </body>
//     </div>
//   )
// }

// function video() {
//   const videos = [
//     {
//       titre: "Titre de la vidéo 1",
//       chaine: "Nom de la chaîne 1",
//       tags: ["tag1", "tag2", "tag3"]
//     },
//     {
//       titre: "Titre de la vidéo 2",
//       chaine: "Nom de la chaîne 2",
//       tags: ["tag4", "tag5", "tag6"]
//     },
//     {
//       titre: "Titre de la vidéo 3",
//       chaine: "Nom de la chaîne 3",
//       tags: ["tag7", "tag8", "tag9"]
//     }
//   ];

//   return (
//     <div>
//       {videos.map((video, index) => (
//         <div key={index}>
//           <h2>{video.titre}</h2>
//           <p>Chaîne : {video.chaine}</p>
//           <p>Tags : {video.tags.join(", ")}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

export default function Abonnements(){
    return (
    <div className="bg-neutral-900 text-white font-sans font-normal text-lg ">
      <div className=" w-4/5 h-1/4 justify ">
      <p><strong>Aujourd&apos;hui</strong></p>
      <div className='flex justify-around flew-row '>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
            <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/wEMjgqgoN3E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/uUD_dl3_ChE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/okKBQ1Gp5pQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          </div>
        </div>

        <div className= "">
        <p><strong>Hier</strong></p>
        <div className='flex justify-around flew-row'>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/kdGOPrfNgIo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/DLUkTQxL7Hc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/GxHbBuHm0ug"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          </div>
        </div>

        <div className= "">
        <p><strong>Récentes</strong></p>
        <div className='flex justify-around flew-row'>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/Vv98-xIax3M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/GNbV9tcCVSA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/ZwLRjyO_Tks"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          </div>
        </div>


        <div className= "">
        <p><strong>Cette semaine</strong></p>
        <div className='flex justify-around flew-row'>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
        , <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/4YKyAJiN1O0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/cgz5neFRyfs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/N61GZLej7Gw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          </div>
        </div>

        <div className="">
        <p><strong>Ce mois-ci </strong> </p>
        <div className='flex justify-around flew-row'>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/2Z-trfG1Q58"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/8RBEoqndm9w"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/Myo5YjK8Xoo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          </div>
        </div>

        <div className="">
        <p><strong>Publications plus anciennes</strong></p>
        <div className='flex justify-around flew-row'>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
         <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/vvh-jcSUCnc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/11s4BlpI4oA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='relative mb-4 rounded-xl overflow-hidden'>
          <iframe
            width="270"
            height="150"
            src="https://www.youtube.com/embed/nOdDtnHWaDo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>
          </div>
        </div>
  )
}
