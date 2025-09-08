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
  const year = type === "movie" 
    ? new Date(data.release_date).getFullYear() 
    : new Date(data.first_air_date).getFullYear();

  return (
    <div className="bg-brand-beige py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8 max-w-7xl mx-auto">
        <div className="flex-none w-64 md:w-72">
          {data.poster_path ? (
            <img
              src={poster(data.poster_path, "w400")}
              className="rounded-xl shadow-lg w-full"
              alt={title}
            />
          ) : (
            <div className="w-full aspect-[2/3] rounded-2xl bg-brand-blue/10" />
          )}
        </div>

        {/* --- A MUDANÇA PRINCIPAL ESTÁ AQUI --- */}
        <div className="w-full lg:max-w-3xl space-y-4 text-center lg:text-left">
          
          <div>
            {/* Código limpo: removido 'style' redundante */}
            <h1 className="text-3xl lg:text-4xl text-brand-blue font-bold">
              {title}<span className="font-normal opacity-60 ml-2">({year})</span>
            </h1>
          </div>

          <p>
            {/* Código limpo: removido 'style' redundante */}
            <span className="font-semibold text-brand-blue">Gênero: </span>
            {joinGenres(data.genres)}
          </p>

          {data.overview && (
            <p>
              <span className="font-semibold text-brand-blue">Sinopse:</span>
              <br />
              {data.overview}
            </p>
          )}

          <div className="flex flex-col lg:flex-row pt-4 space-y-4 lg:space-y-0">
            <div className="w-full lg:w-1/2 space-y-4">
              <p>
                <span className="font-semibold text-brand-blue">Dirigido por:</span>
                <br /> {directors.join(", ") || "—"}
              </p>
              <p>
                <span className="font-semibold text-brand-blue">Escrito por:</span>
                <br /> {writers.join(", ") || "—"}
              </p>
              <p>
                <span className="font-semibold text-brand-blue">Situação:</span>
                <br /> {data.status || "—"}
              </p>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <p>
                <span className="font-semibold text-brand-blue">Idioma original:</span>
                <br /> {formatLanguage(data.original_language, data.spoken_languages)}
              </p>
              {type === "movie" && (
                <>
                  <p>
                    <span className="font-semibold text-brand-blue">Orçamento:</span>
                    <br /> {formatMoney(data.budget, "USD")}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-blue">Receita:</span>
                    <br /> {formatMoney(data.revenue, "USD")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}