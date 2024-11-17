import React from "react";

function Navbar() {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          LOGO
        </a>
        <nav>
          <ul className="menu-items">
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Dropdown Menu
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Mega
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Image Menu
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
