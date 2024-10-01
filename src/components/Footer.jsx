import { useState } from "react";
import "./FooterStyle.css";

export default function Footer() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="bottom-menu">
      <div
        className={`menu-item ${activeMenu === "home" ? "active" : ""}`}
        onClick={() => setActiveMenu("home")}
      >
        <i className="icon">🏠</i>
        {activeMenu === "home" && <div className="underline"></div>}
      </div>
      <div
        className={`menu-item ${activeMenu === "heart" ? "active" : ""}`}
        onClick={() => setActiveMenu("heart")}
      >
        <i className="icon">❤️</i>
        {activeMenu === "heart" && <div className="underline"></div>}
      </div>
      <div
        className={`menu-item ${activeMenu === "plus" ? "active" : ""}`}
        onClick={() => setActiveMenu("plus")}
      >
        <i className="icon">➕</i>
        {activeMenu === "plus" && <div className="underline"></div>}
      </div>
      <div
        className={`menu-item ${activeMenu === "grid" ? "active" : ""}`}
        onClick={() => setActiveMenu("grid")}
      >
        <i className="icon">🔲</i>
        {activeMenu === "grid" && <div className="underline"></div>}
      </div>
      <div
        className={`menu-item ${activeMenu === "profile" ? "active" : ""}`}
        onClick={() => setActiveMenu("profile")}
      >
        <i className="icon">👤</i>
        {activeMenu === "profile" && <div className="underline"></div>}
      </div>
    </div>
  );
}
