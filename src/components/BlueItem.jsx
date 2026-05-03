function BlueItem({ icon, label }) {
  return (
    <div className="blue-item">
      <img className="blue-item__icon" src={icon} alt={label} />
      <span className="blue-item__label">{label}</span>
    </div>
  );
}

export default BlueItem;