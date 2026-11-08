import logo from './assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
