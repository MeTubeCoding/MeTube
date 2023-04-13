import React, { useState, useEffect } from 'react';

interface Message {
  id: string;
  pseudo: string;
  message: string;
}

export function ModerationChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const forbiddenWords = ['higu', 'gay', 'nardinemouk']; 
  useEffect(() => {
    fetchMessages();
  }, []);

  function fetchMessages() {
    fetch('http://127.0.0.1:5600/chat', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setMessages(res);
      });
  }

  function TestClique() {
    const filtered = messages.filter(
      (message) =>
        forbiddenWords &&
        forbiddenWords.some(
          (word) =>
            message.message &&
            message.message.toLowerCase().includes(word.toLowerCase())
        )
    );
    setFilteredMessages(filtered);
  }

  return (
    <div>
      <p id='titre' className='text-lg font-bold text-blue-500'>
        Espace de modération
      </p>
      <button onClick={TestClique} className='bg-blue-500 text-white font-bold py-1 px-2 rounded'>
        Test
      </button>
      <section className='p-2'>
        {filteredMessages.map((message) => (
          <p key={message.id}>{`${message.pseudo}: ${message.message}`}</p>
        ))}
      </section>
    </div>
  );
}
