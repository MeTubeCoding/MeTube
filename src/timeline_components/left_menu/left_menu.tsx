import React, { useState } from 'react';

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionChange(event: React.MouseEvent<HTMLButtonElement>) {
    setSelectedOption(event.currentTarget.value);
  }

  return (
    <div>
      <select value={selectedOption}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default DropdownMenu;