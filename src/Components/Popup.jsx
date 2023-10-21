import React, { useState } from "react";

export default function PopUp() {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handlePopupClick = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className={`bg-green-300 border border-black w-56 h-10 rounded-xl fixed ${
        isPopupVisible ? "block" : "hidden"
      }`}
      id="popup"
      onClick={handlePopupClick}
    >
      <div className="justify-start items-start flex ml-2 mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-check-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>
        <h1 className="ml-4 font-bold text-lg">Chat Succes Send</h1>
      </div>
    </div>
  );
}
