function Info([icon, text]) {
  return (
    <div className="info">
      <span>
        <div className="icon">{icon}</div>
        <p>text{text}</p>
      </span>
    </div>
  );
}
export default Info;
