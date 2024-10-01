import React, { useState, useRef } from "react";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import "./PlayBox.css";
export default function PlayBox() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (modal) => {
    if (modal === 1) {
      setIsModal1Open((prev) => !prev);
      setIsModal2Open(false);
    } else {
      setIsModal2Open((prev) => !prev);
      setIsModal1Open(false);
    }
  };

  const closeModal = () => {
    setIsModal1Open(false);
    setIsModal2Open(false);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    moveSlider(event.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    checkPosition();
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = (event) => {
    moveSlider(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    checkPosition();
  };

  const moveSlider = (clientX) => {
    const sliderBounds = sliderRef.current.getBoundingClientRect();
    const newPosition = clientX - sliderBounds.left - 25;
    if (newPosition >= 0 && newPosition <= sliderBounds.width - 50) {
      setPosition(newPosition);
    }
  };

  const checkPosition = () => {
    if (position >= 200) {
       navigate('/transition');
    } else {
      setPosition(0);
    }
  };

  return (
    <>
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-white font-bold text-md">10 $</span>
          <span className="text-xs text-[#ffffff33]">
            1.715 <span>TON</span>
          </span>
        </div>
        <div className="flex gap-2 items-start">
          <div onClick={() => handleIconClick(1)} className="cursor-pointer">
            <svg
              className={`arrow text-white ${isModal1Open ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="m19 9-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-sm flex gap-1">
              <span>4</span>
              <span>User</span>
            </span>
            <span className="text-xs text-[#ffffff33]">ln Battlw</span>
          </div>
        </div>
        <div onClick={() => handleIconClick(2)} className="cursor-pointer">
          <svg
            className={`arrow text-white ${isModal2Open ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              d="m19 9-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      <div
        className="container-track"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="track" ref={sliderRef}>
          <div
            className="draggable"
            style={{ left: `${position}px` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <span className="draggable-box">

            &#187;
            </span>
          </div>
          <div className="startBattle">Start Battle</div>
          <div className="start">START</div>
        </div>
      </div>

      {isModal1Open && (
        <div className="fixed flex items-center justify-center bg-black ">
          <div className="p-4 relative w-full h-full animate-slide-up">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white"
            >
              ✖
            </button>
           
            <div className="flex justify-between mb-6 px-4 mt-[140%]">
              <span className="text-lg font-semibold">Select Amount</span>
              <button className="text-lg  font-semibold" onClick={closeModal}>
                Done
              </button>
            </div>

           
            <ul className="overflow-y-auto max-h-40  border-gray-200 customModal-list">
              {["100$", "200$", "300$", "400$", "500$"].map((amount, index) => (
                <li
                  key={index}
                  className={`px-4 py-3 text-center cursor-pointer  ${
                    selectedAmount === amount ? "font-bold  border-b-2 border-t-2 border-red-600" : ""
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  {amount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isModal2Open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black ">
          <div className="p-4 relative w-full h-full animate-slide-up">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white"
            >
              ✖
            </button>
            <div className="flex justify-between mb-6 px-4 mt-[140%]">
              <span className="text-lg font-semibold">Select User</span>
              <button className="text-lg  font-semibold" onClick={closeModal}>
                Done
              </button>
            </div>
            <ul className="overflow-y-auto max-h-40  border-gray-200 customModal-list">
              {["1 User", "2 User", "3 User", "4 User", "5 User", "6 User", "7 User"].map((amount, index) => (
                <li
                  key={index}
                  className={`px-4 py-3 text-center cursor-pointer  ${
                    selectedAmount === amount ? "font-bold text-white" : "opacity-5"
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  {amount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Footer />
    </div>
    </>
  );
}

