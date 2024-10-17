function Info({ icon, text }) {
  return (
    <div className="info">
      <span>
        <span class="material-symbols-outlined">{icon}
        </span>
        <p>{text}</p>
      </span>
    </div>
  );
}
export default Info;
