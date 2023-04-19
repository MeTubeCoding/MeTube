import React, { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  pseudo: string;
  message: string;
}

export function ModerationChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const invisibleButtonRef = useRef<HTMLButtonElement>(null);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);

  useEffect(() => {
    getChat();
    const interval = setInterval(() => {
      getChat();
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  function getChat() {
    fetch("http://127.0.0.1:5600/moderation", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessages(res);
      });
  }

  function handleInvisibleButtonClick() {
    fetchMessages();
  }

  function handleBanButtonClick(id: string) {
    fetch(`http://127.0.0.1:5600/moderation/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        getChat();
      });
  }

  function fetchMessages() {
    fetch("http://127.0.0.1:5600/moderation", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessages(res);
      });
  }

  return (
    <div className="h-300 border border-gray-300 p-10 bg-me-background rounded-xl">
      <form className="margin-top: 10px;">
        <label
          htmlFor="message-input"
          className="px-4 py-2 rounded-md bg-me-colorprimary text-me-white font-bold"
        >
          Espace Modération :
        </label>
        <section id="espace-Moderation" className="text-white mt-3">
          {messages.map((msg) => (
            <p className="text-me-white" key={msg.id}>
              {msg.pseudo}: {msg.message}
              <button
                onClick={() => handleBanButtonClick(msg.id)}
                className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md"
              >
                Bannir
              </button>
            </p>
          ))}
        </section>
      </form>
      <button
        ref={invisibleButtonRef}
        onClick={handleInvisibleButtonClick}
        style={{ display: "none" }}
      ></button>
    </div>
  );
		  }