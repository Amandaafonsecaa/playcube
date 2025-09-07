import { poster } from "../api/lib/tmdb";

interface Props {
  cast: any[];
}

export default function Cast({ cast }: Props) {
  if (!cast.length) return <p className="text-center">Nenhum ator encontrado</p>;

  return (
    <section className="p-[3rem] bg-brand-beigeSoft pl-[6rem] pr-[6rem]">
      {/* Cabeçalho */}
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-bold text-brand-blue pl-[4rem]">Elenco</h2>
        <button className="bg-brand-blue text-white p-[0.5rem] rounded-[1rem] ml-[1rem]">
          Ver mais
        </button>
      </div>

      {/* Grid do elenco */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {cast.slice(0, 5).map((person) => (
          <div key={person.id} className="text-center flex items-center flex-col">
            {person.profile_path ? (
              <a href="">
                <img
                src={poster(person.profile_path, "w400")}
                alt={person.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg border-2 border-white"
              />
              </a>
            ) : (
              <div className="w-full aspect-[2/3] bg-brand-blue/10 rounded-xl" />
            )}
            <p className="mt-2 font-semibold text-brand-blue">{person.name}</p>
            {person.character && (
              <p className="text-sm opacity-70 text-brand-blue">
                {person.character}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
