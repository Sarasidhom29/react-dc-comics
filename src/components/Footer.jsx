import FooterColumns from "./FooterColumns";
import FooterBottom from "./FooterBottom";

const footerData = [
  {
    title: "DC COMICS",
    links: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"],
  },
  {
    title: "DC",
    links: ["Terms Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"],
  },
  {
    title: "SITES",
    links: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
  },
  {
    title: "SHOP",
    links: ["Shop DC", "Shop DC Collectibles"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__columns">
            {footerData.map((column) => (
              <FooterColumns key={column.title} title={column.title} links={column.links} />
            ))}
          </div>

          <div className="footer__logo-area">
            <img
              className="footer__logo"
              src="/src/assets/dc-logo-bg.png"
              alt="DC background logo"
            />
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}

export default Footer;