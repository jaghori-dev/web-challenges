import "./styles.css";

export default function App() {
  return <Article />;
}
function Article() {
  return (
    <article className="article" id= {2+2}>
      <h2 className="article__title">Title</h2>
      <label id="htmlform">
        form
      </label>
      <input type="text" name="htmlform" />
      <a href="https://google.com" className="article__link">
        Wikipedia
      </a>
      <button className="button" onClick={() => {}}>
        click me
      </button>
    </article>
  );
}
