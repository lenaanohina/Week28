import React, { useState } from "react";

const TextFormatComponent = () => {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormatText = () => {
    const formatted = inputText.toUpperCase();
    setFormattedText(formatted);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleFormatText}>ДОБАВИТЬ</button>
      <p>{formattedText}</p>
    </div>
  );
};

export default TextFormatComponent;
