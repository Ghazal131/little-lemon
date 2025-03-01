import React from "react";
function Header() {
    return (
      <header className="header">
        <div className="header-content">
          <img  src="https://littlelemonproject.com/Logo.png" alt="Little Lemon Logo" className="header-logo" 
          />
          <div className="header-text">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
          </div>
        </div>
        <button className="header-button">Reserve a Table</button>
      </header>
    );
}
export default Header;