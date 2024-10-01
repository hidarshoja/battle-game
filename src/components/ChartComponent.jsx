import { useState } from "react";

export default function ChartComponent() {
  const [usdAmount, setUsdAmount] = useState(3500);
  const [tonRate, setTonRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const fetchTonRate = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd"
      );
      const data = await response.json();
      if (data["the-open-network"] && data["the-open-network"].usd) {
        const tonRate = data["the-open-network"].usd;
        setTonRate(tonRate);
        const tonAmount = calculateTonAmount(usdAmount, tonRate);
        setConvertedAmount(tonAmount);
      } else {
        console.error("TON rate data is not available in the response:", data);
      }
    } catch (error) {
      console.error("Error fetching TON rate:", error);
      setTonRate(0);
    }
  };

  const calculateTonAmount = (usdAmount, tonRate) => {
    if (tonRate && tonRate > 0) {
      return (usdAmount / tonRate).toFixed(1);
    } else {
      return "...";
    }
  };

  const calculateUsdAmount = (tonAmount, tonRate) => {
    if (tonRate && tonRate > 0) {
      return (tonAmount * tonRate).toFixed(1);
    } else {
      return "...";
    }
  };

  const handleAmountClick = () => {
    if (!tonRate) {
      fetchTonRate();
    } else if (convertedAmount) {
      const usd = calculateUsdAmount(convertedAmount, tonRate);
      setConvertedAmount(null);
      setUsdAmount(usd);
    } else {
      const tonAmount = calculateTonAmount(usdAmount, tonRate);
      setConvertedAmount(tonAmount);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <div className="w-[45%]">
        <div className="text-white text-[35px] font-bold mb-1 tracking-wider" onClick={handleAmountClick}>
          {convertedAmount ? `${convertedAmount}` : usdAmount}
        </div>
        <h4 className="text-white text-sm">
          (<span className="text-white">TON</span>)
        </h4>
      </div>
      <div className="svg-container text-white w-[52%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 200 2000 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0 700h0c34.912-15.849 69.824-31.698 108-70s79.616-99.058 121-43c41.384 56.058 82.714 228.929 116 271s58.53-46.657 89-86 66.168-29.3 109-4c42.832 25.3 92.797 65.856 135 35 42.203-30.856 76.642-133.126 110-158 33.358-24.874 65.635 27.647 102 58 36.365 30.353 76.82 38.539 111 19 34.18-19.539 62.088-66.802 95-40 32.912 26.802 70.827 127.67 113 146s88.604-45.88 132-86 83.757-56.152 116 4c32.243 60.152 56.366 196.49 90 125 33.634-71.49 76.778-350.805 117-362 40.222-11.195 77.524 245.731 110 336s60.128 13.88 102-87 97.963-226.251 121-240c23.037-13.749 13.018 84.126 43 182"
            fill="none"
            stroke="#fff"
            strokeWidth="15"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </div>
  );
}
