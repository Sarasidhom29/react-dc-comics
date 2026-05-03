import BlueItem from "./BlueItem";

const items = [
  { icon: "/src/assets/buy-comics-digital-comics.png", label: "DIGITAL COMICS" },
  { icon: "/src/assets/buy-comics-merchandise.png", label: "DC MERCHANDISE" },
  { icon: "/src/assets/buy-comics-subscriptions.png", label: "SUBSCRIPTION" },
  { icon: "/src/assets/buy-comics-shop-locator.png", label: "COMIC SHOP LOCATOR" },
  { icon: "/src/assets/buy-dc-power-visa.svg", label: "DC POWER VISA" },
];

function BlueBar() {
  return (
    <section className="blue-bar">
      <div className="blue-bar__container">
        {items.map((item) => (
          <BlueItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </section>
  );
}

export default BlueBar;