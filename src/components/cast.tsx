import { poster } from "../api/lib/tmdb";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; 
import Button from "./ui/button";

interface Props {
  cast: any[];
}

export default function Cast({ cast }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollRow = (scrollOffset: number) => {
    if(scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({left: scrollOffset, behavior: 'smooth'});
    }
  };

  if (!cast.length) return null; 

  return (
    <section className="bg-brand-beigeSoft py-12 px-4 md:px-16 lg:px-24">
      <div className="flex items-center mb-7 ml-14">
        <h2 className="text-2xl font-bold text-brand-blue">Elenco</h2>
        <Button 
        text="Ver mais"/>
      </div>

      {/* Container pai para posicionar os botões */}
      <div className="relative group">
        
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {cast.slice(0, 20).map((person) => (
            <div key={person.id} className="flex-none w-40 text-center">
              {person.profile_path ? (
                <a href="#">
                  <img
                    src={poster(person.profile_path, "w400")}
                    alt={person.name}
                    className="w-40 h-40 rounded-full object-cover shadow-lg border-2 border-white"
                  />
                </a>
              ) : (
                <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                  
                </div>
              )}
              <p className="mt-2 font-semibold text-brand-blue truncate">{person.name}</p>
              {person.character && (
                <p className="text-sm text-brand-blue/70 truncate">
                  {person.character}
                </p>
              )}
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