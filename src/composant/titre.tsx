import react from "react";

export function Titre(){

    const [titre, setTitre] = react.useState("");

    function handleInputChange(event: {target:{value: React.SetStateAction<string>;};  }){
        setTitre(event.target.value);

    }

    function postData() {
        fetch("http://127.0.0.1:5600/dataset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ Titre })
        })
          .then((res) => res.text())
          .then((res) => console.log(res));
      }
      
      return(
        <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md">
        </div>
      );
    
}