import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <p className="footer-links">
            This project was coded by Habiba Uddin and is open sourced on
            <a
              href="https://github.com/HabibaU2001/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>{" "}
            and hosted on
            <a
              href="https://wordwiz-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
