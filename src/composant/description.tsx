import React from "react";

export function Description() {
    const [description, setDescription] = React.useState("");
  
    function handleInputChange(event: { target: { value: React.SetStateAction<string>; }; }) {
      setDescription(event.target.value);
    }
      
    function post() {
      console.log('log');
      const message = document.getElementById('description') as HTMLInputElement;
      const local = {
        description: message.value,
        live: 'Zerator',
      };
      fetch('http://127.0.0.1:5600/desc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(local),
      })
        .then((res) => {
          return res.text();
        })
        .then((res) => {
          console.log(res);
        });
      }
  
    return (
      <>
        <textarea id="description" value={description} onChange={handleInputChange} />
        <button onClick={post}>desc</button>
      </>
    );
  }
  
