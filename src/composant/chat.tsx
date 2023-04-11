export function Chat() {

  function getMessageChat(){
    fetch("http://127.0.0.1:5600/chat",{
      method : "GET",
      })
  }

    return (
      <>
        <div>
          <p id="titre_chat" className="text-lg font-bold text-blue-500">
            Espace de modération
          </p>
          <button className="bg-blue-500 text-white font-bold py-1 px-2 rounded">test</button>
        </div>
        <div
          style={{
            width: '30%',
            height: '600px',
            backgroundColor: '#grey',
            border: '1px solid #ccc',
            borderRadius: '20px',
            marginTop: '20px',
            marginLeft: '10px',
          }}
        ></div>
      </>
    );
  }
  