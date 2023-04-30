import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "rgb(11, 8, 25)" }}>
      <div className="container">
        <a className="navbar-brand" href="/">
        <h1 style={{background: 'linear-gradient(94.37deg, #3387D5 -5.94%, #7A06C9 115.34%)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'}}>
  NeoFi
</h1>

        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Trade</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Earn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn btn-primary" style={{ backgroundColor: "blue" }}>Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
