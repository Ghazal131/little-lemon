function Footer() {
    return (
      <footer className="footer">
        <div className="footer-column">
          <img src="https://marimelle.github.io/little-lemon/logos/little-lemon-yellow-logo3.png" alt="Little Lemon Logo" className="footer-logo" />
          <p className="footer-brand">Little Lemon Chicago</p>
          <p>&copy; 2025 Little Lemon</p>
        </div>
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
          <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contacts</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social Media Links</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </footer>
    );
}
export default Footer;