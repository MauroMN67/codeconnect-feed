import "./styles.css";
export default function Ordenacao() {
  return (
    <section className="container-ordenacao">
      <ul>
        <li>
          <a href="#" className="item item-selecionado">
            Recentes
          </a>
        </li>
        <li>
          <a href="#" className="item">
            Antigos
          </a>
        </li>
      </ul>
    </section>
  );
}
