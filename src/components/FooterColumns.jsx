function FooterColumns({ title, links }) {
  return (
    <div className="footer-column">
      <h3 className="footer-column__title">{title}</h3>
      <ul className="footer-column__list">
        {links.map((link) => (
          <li key={link} className="footer-column__item">
            <a href="#" className="footer-column__link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumns;