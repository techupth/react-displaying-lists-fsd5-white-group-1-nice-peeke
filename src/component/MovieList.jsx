/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies.jsx";

export function MovieList() {
  return (
    <div>
      {movies.map((item, index) => {
        return (
          <div
            key={index}
            css={css`
              display: flex;
              justify-content: center;
              background-color: white;
              padding: 18px 14px;
              margin: 10px;
              border-radius: 10px;
            `}
          >
            <img
              src={item.image}
              css={css`
                width: 102px;
                height: 100px;
                object-fit: cover;
                border-radius: 10px;
                margin-right: 19px;
              `}
            ></img>
            <div
              className="Info"
              css={css`
                color: black;
              `}
            >
              <div className="Title">Title: {`${item.title}`}</div>
              <div className="Year">Year: {`${item.year}`}</div>
              <div className="Runtime">Runtime: {`${item.runtime}`}</div>
              <div
                className="Genre"
                css={css`
                  display: flex;
                `}
              >
                Genre:
                {item.genres.map((genres, i) => {
                  return (
                    <div
                      key={i}
                      css={css`
                        height: 27px;
                        border-radius: 10px;
                        margin: 0px 5px;
                        background-color: #eaac99;
                        padding: 0px 5px;
                      `}
                    >
                      {genres}
                    </div>
                  );
                })}
              </div>
              <div className="IMDBRating">
                IMDB Rating: {`${item.imdbRating}`}
              </div>
              <div className="IMDBVotes">IMDB Votes: {`${item.imdbVotes}`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
