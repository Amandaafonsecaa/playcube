import { useRef } from "react"; 
import { poster } from "../api/lib/tmdb";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  data: any[];
  loading: boolean;
  error: string | null;
};

export default function PopularMovies({ data, loading, error }: Props) {
  // LÓGICA DE ROLAGEM
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRow = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  if (loading) return <p className="text-center">Carregando…</p>;
  if (error) return <p className="text-center text-red-600">Erro: {error}</p>;
  if (data.length === 0) return null;

  return (
    <section className="bg-brand-blue py-12 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold text-white mb-7">Recomendação</h2>

      <div className="relative group">
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"> 
          {data.slice(0, 20).map((movie) => (
            <div key={movie.id} className="flex-none w-48 text-center text-white">
              {movie.poster_path ? (
                <a href="#">
                  <img
                    src={poster(movie.poster_path, "w300")}
                    alt={movie.title}
                    className="rounded-xl w-full aspect-[2/3] object-cover"
                  />
                </a>
              ) : (
                <div className="w-full aspect-[2/3] rounded-xl bg-brand-blue/10" />
              )}
              <p className="mt-2 font-semibold w-full truncate">{movie.title}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scrollRow(-400)} 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white z-10 hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button 
          onClick={() => scrollRow(400)} 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white z-10 hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}