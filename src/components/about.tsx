import React from "react";

import {
  poster,
  joinGenres,
  getDirector,
  getWriters,
  formatMoney,
  formatLanguage,
} from "../api/lib/tmdb";

interface PropsAbout {
  data: any;
  type: "movie" | "tv";
}

export default function About({ data, type }: PropsAbout) {
  const title = type === "movie" ? data.title : data.name;
  const directors = getDirector(data.credits);
  const writers = getWriters(data.credits);
  const year = type === "movie" ? new Date(data.release_date).getFullYear() : new Date(data.first_air_date).getFullYear()
  return (
    <div className="flex items-center justify-center h-[34rem] bg-brand-beige ">
      <div className="flex items-center justify-center">
        <div className="w-[30%]">
          {data.poster_path ? (
            <img
              src={poster(data.poster_path, "w300")}
              className="rounded-[1rem] mr-[1rem]"
              alt={title}
            />
          ) : (
            <div className="w-full aspect-[2/3] rounded-2xl bg-brand-blue/10" />
          )}
        </div>
        <div className="w-[37%] space-y-4 ">
          <div>
            <h1
            className="text-[2.3rem] color-brand-blue"
            style={{ fontWeight: "600" }}
          >
            {title}<span className="opacity-50 ml-[0.4rem]">({year})</span>
          </h1>
          
          </div>
          <p>
            <span style={{ fontWeight: "600" }}>Gênero: </span>
            <br />
            {joinGenres(data.genres)}
          </p>
          {data.overview && (
            <p>
              <span style={{ fontWeight: "600" }}>
                Sinopse: <br />
              </span>
              {data.overview}
            </p>
          )}
          <div className="flex w-[100%]">
            <div className="w-[50%]  space-y-4">
              <p>
                <span style={{ fontWeight: "600" }}>Dirigido por: </span>
                <br /> {directors.join(", ")}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Escrito por: </span>
                <br />
                {writers.join(", ") || "—"}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Situação: </span>
                <br /> {data.status || "-"}
              </p>
            </div>
            <div className="w-[50%]">
              <p>
                <span style={{ fontWeight: "600" }}>Idioma original: </span>
                <br />{" "}
                {formatLanguage(data.original_language, data.spoken_languages)}
              </p>
              {type === "movie" && (
                <>
                  <div>
                    <span className="font-semibold">
                      Orçamento: <br />{" "}
                    </span>
                    {formatMoney(data.budget, "USD")}
                  </div>
                  <div>
                    <span className="font-semibold">
                      Receita: <br />
                    </span>
                    {formatMoney(data.revenue, "USD")}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
