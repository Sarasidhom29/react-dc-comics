const navLinks = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
];

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src="/src/assets/dc-logo.png" alt="DC logo" />

        <nav className="header__nav">
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link} className="header__item">
                <a href="#" className="header__link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;