import React from "react";

export function Description() {
  const [description, setDescription] = React.useState("");

  function handleInputChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setDescription(event.target.value);
  }

  function postData() {
    fetch("http://127.0.0.1:5600/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description })
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  }

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <div className="">
        <svg
          className="h-6 w-6 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke=""
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-lg font-medium text-gray-900">Description</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
      <textarea className="mt-4 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={description} onChange={handleInputChange} placeholder="Enter your description here" />
      <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600" onClick={postData}>Send</button>
    </div>
  );
}
