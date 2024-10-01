import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex w-full justify-between items-center mb-4">
        <div className="flex">
          <img
            className="header-img-user w-[33px] h-[33px] mr-2.5 rounded-full max-w-full block  border-2 border-white"
            src=""
            alt=""
          />
          <div className="info-infos">
            <div className="info-name">
              <h2 className="text-white text-0.8rem">No Name</h2>
              <h4 className="text-[#FFFFFF4D] text-[10px]">@chatid</h4>
            </div>
          </div>
        </div>

        <div className="text-white">
          <svg
            className="open-page icon"
            data-target="user-level-page"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
            <path d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path>
            <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
