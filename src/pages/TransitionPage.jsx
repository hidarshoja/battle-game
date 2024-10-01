import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./TransitionPage.css";

const TransitionPage = () => {
  const [timer, setTimer] = useState(5);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showFinalTimer, setShowFinalTimer] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdown);
          setIsContentVisible(true);
        }
        return prevTimer - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isContentVisible) {
      let index = 0;
      const interval = setInterval(() => {
        setActiveImageIndex(index);
        index += 1;
        if (index === 3) {
          clearInterval(interval);
          setShowFinalTimer(true);
          setIsOverlayVisible(true);
          startFinalCountdown();
        }
      }, 3000);
    }
  }, [isContentVisible]);

  const startFinalCountdown = () => {
    setTimer(5);
    let countdownTimer = 5;
    const countdownInterval = setInterval(() => {
      setTimer(countdownTimer);
      countdownTimer -= 1;

      if (countdownTimer < 0) {
        clearInterval(countdownInterval);
        navigate("/gamePage");
      }
    }, 1000);
  };

  return (
    <div className={`transition-page ${isContentVisible ? "visible" : ""}`}>
      {!isContentVisible ? (
        <div className="timer">
          <h1>{timer}</h1>
        </div>
      ) : (
        <div className="content">
          <h1 className="text-2xl">Find opponents</h1>
          <p className="text-[#ffffff33] mt-3">
            Please wait while we search for the best opponents based on your
            selected fight type. This process may take a moment.
          </p>
          <div className="opponents">
            <div className="circle">
              <img
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt="User 1"
                className={`opponent ${activeImageIndex >= 0 ? "visible" : ""}`}
              />
              <img
                src="https://randomuser.me/api/portraits/men/16.jpg"
                alt="User 2"
                className={`opponent ${activeImageIndex >= 1 ? "visible" : ""}`}
              />
              <img
                src="https://randomuser.me/api/portraits/men/17.jpg"
                alt="User 3"
                className={`opponent ${activeImageIndex >= 2 ? "visible" : ""}`}
              />
              <img
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt="User 4"
                className={`opponent ${activeImageIndex >= 3 ? "visible" : ""}`}
              />

              <div className="center-circle">
                <span>150 x 150</span>
              </div>
            </div>
          </div>
          {showFinalTimer && (
            <div className="final-timer">
              <h1>{timer}</h1>
            </div>
          )}
        </div>
      )}
      <Link to="/">
        <button className="cancel-button">Cancel</button>
      </Link>
      {isOverlayVisible && <div className="overlay" />}
    </div>
  );
};

export default TransitionPage;
