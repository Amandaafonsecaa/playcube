import React from "react";

import { poster,
  joinGenres,
  getDirector,
  getWriters,
  formatMoney,
  formatLanguage, } from "../api/lib/tmdb";

interface PropsAbout {
    data: any;
    type: "movie" | "tv";
}

export default function About(
    {
        data, type
    }: PropsAbout
){
    const title = type === "movie" ? data.title : data.name;
    const directors = getDirector(data.credits);
    const writers = getWriters(data.credits);
    return(
        <div>
            <div>
                {data.poster_path ? (
                    <img src={poster(data.poster_path, "w500")} alt={title} />
                ) : (
                    <div className="w-full aspect-[2/3] rounded-2xl bg-brand-blue/10" />
                )}
            </div>
            <div>
                <h1>{title}</h1>
                <p>{joinGenres(data.genres)}</p>
                {data.overview && <p>{data.overview}</p>}
                <div>
                    <p>Dirigido por: {directors.join(", ")}</p>
                    <p>Escrito por: {writers.join(", ") || "—"}</p>
                    <p>Situação: {data.status || "-"}</p>
                    <p>Idioma original: {formatLanguage(data.original_language, data.spoken_languages)}</p>
                    {type === "movie" && (
                        <>
                        <div><span className="font-semibold">Orçamento: </span>{formatMoney(data.budget, "USD")}</div>
                        <div><span className="font-semibold">Receita: </span>{formatMoney(data.revenue, "USD")}</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}