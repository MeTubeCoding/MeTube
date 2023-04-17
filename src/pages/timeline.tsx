import React, {useState} from 'react';


function App() {
    const video = [
      { name: "Video about vg", channel: "VideoGamer69", tag: "Jeux Vidéos" },
      { name: "VLOG : My adventure to Japan", channel: "Nael Happenings", tag: "VLOG" },
      { name: "Eating", channel: "DLFP", tag: "Degustation" },
    ];

    const chaine = [
        {
            name: "Random_Guy",
            fav_tags : "Jeux Vidéos"
        }
    ]

    for (let i = 0; i < video.length; i++) {
        if (video[i].tag === chaine[0].fav_tags) {
            console.log(video[i].name);
        }
    }

    console.log("Test");
    return (
        <div className="App">
            <h1>Test</h1>
        </div>
    );
}

export default App;