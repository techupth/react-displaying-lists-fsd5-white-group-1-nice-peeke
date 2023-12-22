/** @jsxImportSource @emotion/react */
import "./App.css";
import "./data/movies.jsx";
import { css } from "@emotion/react";
import { MovieList } from "./component/MovieList.jsx";

function App() {
  return (
    <div className="App">
      <section
        className="movie-list-section"
        css={css`
          display: flex;
          flex-direction: row;
          align-item: center;
          justify-content: center;
        `}
      >
        <MovieList></MovieList>
      </section>
    </div>
  );
}

export default App;
