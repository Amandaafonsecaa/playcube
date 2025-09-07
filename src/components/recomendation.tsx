import React,  { useState, useEffect }  from "react";
import { poster } from "../api/lib/tmdb";

type Props = {
  data: any[];
  loading: boolean;
  error: string | null;
};

export default function PopularMovies({ data, loading, error }: Props) {
  if (loading) return <p className="text-center">Carregando…</p>;
  if (error) return <p className="text-center text-red-600">Erro: {error}</p>;
  if (data.length === 0) return <p className="text-center">Nenhum filme encontrado</p>;


  return (
    <section className="px-4 pt-[3rem] bg-brand-blue pl-[10rem] pr-[10rem] pb-[3rem]">
      <h2 className="text-2xl font-bold text-white mb-[1.8rem]">Recomendação</h2>

      <div className="flex overflow-x-auto scrollbar-hide justify-between gap-6 text-white">
        {data.slice(0, 10).map((movie) => (
          <div key={movie.id} className="flex-none w-48 text-center text-white">
            {movie.poster_path ? (
              <a href="">
                <img
                src={poster(movie.poster_path, "w300")}
                alt={movie.title}
                className="rounded-xl  w-full"
              />
              </a>
            ) : (
              <div className="w-full aspect-[2/3] rounded-xl bg-brand-blue/10" />
            )}
            <p className="mt-2 font-semibold">{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
