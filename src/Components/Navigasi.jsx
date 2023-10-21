import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export default function Navigasi() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function toggleSidebar(e) {
    e.preventDefault();
    if (sidebarVisible) {
      setSidebarVisible(false); // Menutup sidebar jika sudah terbuka
    } else {
      setSidebarVisible(true); // Membuka sidebar jika sebelumnya tertutup
    }
  }

  return (
    <div>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? "show" : ""}`}>
          <li>
            <a href="" onClick={toggleSidebar}>
              {sidebarVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              ) : null}
            </a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/Lokasi">Lokasi</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/" className=" font-bold text-xl">
              <img src="logo.png" className=" w-12" alt="" />
            </Link>
          </li>
          <li className="hideOnMobile">
            <Link to="/">Home</Link>
          </li>

          <li className="hideOnMobile">
            <Link to="/">About</Link>
          </li>

          <li className="hideOnMobile">
            <Link to="/Lokasi">Lokasi</Link>
          </li>
          <li onClick={toggleSidebar}>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
