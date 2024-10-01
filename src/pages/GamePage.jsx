import  { useState, useEffect } from "react";
import { RiTimer2Fill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./GamePage.css";

const GamePage = () => {
  const [userCount, setUserCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); 
  const [canClick, setCanClick] = useState(true); 

  useEffect(() => {
   
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanClick(false); 
    }
  }, [timeLeft]);

  const createBubble = (x, y) => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 8 + 2;
    bubble.style.width = `${size}vw`;
    bubble.style.height = `${size}vw`;
    bubble.style.left = `${x}px`;
    bubble.style.bottom = `${y - 300}px`;
    bubble.style.animationDuration = "4s";
    bubble.style.animationName = "float";

    const bubbleText = document.createElement("span");
    bubbleText.textContent = "+1";
    bubbleText.classList.add("bubble-text");
    bubbleText.style.fontSize = `${size / 2}vw`;
    bubble.appendChild(bubbleText);

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  };

  const handleClick = (event) => {
    if (canClick) {
      setUserCount(userCount + 1);

      const { clientX, clientY } = event;
      createBubble(clientX, clientY);
    }
  };

  return (
    <div className="game-page">
      <div className="game-board">
        <div className="flex w-[70px] flex-col py-4 rounded-3xl bg-[#ffffff33] items-center justify-between h-48 px-1">
          <div>
            <RiTimer2Fill className="timer-icon" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl">{timeLeft}s</h1>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
        <div className="flex w-[70px] flex-col  rounded-3xl  items-center justify-between h-48 px-1">
            
          <div className="w-full h-12 rounded-2xl flex items-center justify-center border-2 border-red-600 text-red-600 text-sm">
            <Link to="/">Close</Link>
          </div>
          <div className="bg-[#ffffff33] w-[70px] h-32 rounded-3xl flex flex-col items-center justify-between py-1">
            <div className="p-1 rounded-full bg-[#ffffff33] w-10 h-10 flex items-center justify-center">
              <IoMenu />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="text-3xl">1</h1>
              <span className="text-sm">Round</span>
            </div>
          </div>
        </div>
        <div className="flex w-[70px] flex-col gap-2  rounded-3xl  items-center justify-between h-48 px-1">
          <div className="bg-[#ffffff33] w-[70px] h-24 rounded-3xl flex flex-col items-center justify-center">
            <div className="p-[2px] rounded-full bg-[#ffffff33] w-8 h-8 flex items-center justify-center">
              <FaUsers />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-sm">4</span>
              <span className="text-xs text-[#ffffff33]">players</span>
            </div>
          </div>
          <div className="bg-[#ffffff33] w-[70px] h-24 rounded-3xl flex flex-col items-center justify-center">
            <div className="p-[2px] rounded-full bg-[#ffffff33] w-8 h-8 flex items-center justify-center">
              <FaStar />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-sm">40 $</span>
              <span className="text-xs text-[#ffffff33]">Total</span>
            </div>
          </div>
        </div>
        <div className="flex w-[70px] flex-col gap-2  rounded-3xl  items-center justify-between h-48 px-1">
          <div className="bg-[#ffffff33] w-[70px] h-24 rounded-3xl flex flex-col items-center justify-center">
            <div className="p-[2px] rounded-full bg-[#ffffff33] w-8 h-8 flex items-center justify-center">
              <RiCloseFill className="text-red-600" />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-sm">10 $</span>
              <span className="text-xs text-[#ffffff33]">loss</span>
            </div>
          </div>
          <div className="bg-[#ffffff33] w-[70px] h-24 rounded-3xl flex flex-col items-center justify-center">
            <div className="p-[2px] rounded-full bg-[#ffffff33] w-8 h-8 flex items-center justify-center">
              <RiCheckboxCircleFill className="text-green-500" />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-sm">40 $</span>
              <span className="text-xs text-[#ffffff33]">Win</span>
            </div>
          </div>
        </div>
      </div>

      <div className="players">
        <div className="player-circle">
          <img
            src="https://randomuser.me/api/portraits/men/15.jpg"
            alt="Player 1"
            className="player"
          />
          <FaMicrophone className="absolute left-0 p-1 bg-[#ffffff33] rounded-full w-6 h-6 top-[-6px]" />
          <span>{userCount}</span>
        </div>
        <div className="player-circle">
          <img
            src="https://randomuser.me/api/portraits/men/16.jpg"
            alt="Player 2"
            className="player"
          />
          <span>0</span>
        </div>
        <div className="player-circle">
          <img
            src="https://randomuser.me/api/portraits/men/17.jpg"
            alt="Player 3"
            className="player"
          />
          <span>0</span>
        </div>
        <div className="player-circle">
          <img
            src="https://randomuser.me/api/portraits/men/18.jpg"
            alt="Player 4"
            className="player"
          />
          <span>0</span>
        </div>
      </div>
      <div className="click-here w-full h-[600px]" onClick={handleClick}>
        <div className="tap-here">
          <span className="font-bold text-[#ffffff8f] mt-12">Tap Here</span>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
