// src/components/Media.tsx
import { poster, backdrop } from "../api/lib/tmdb";

type TmdbVideo = {
  id: string;
  key: string;
  name: string;
  site: "YouTube" | "Vimeo" | string;
  type: "Trailer" | "Teaser" | string;
};

type TmdbImage = {
  file_path: string;
  width: number;
  height: number;
  iso_639_1: string | null;
};

type Props = {
  videos: TmdbVideo[]; 
  images: {           
    backdrops?: TmdbImage[];
    posters?: TmdbImage[];
    logos?: TmdbImage[];
  };
  title?: string;
};

export default function Media({ videos, images, title = "Mídia" }: Props) {
  const youTubeVideos = (videos || []).filter((v) => v.site === "YouTube");
  const trailers = youTubeVideos.filter((v) => v.type === "Trailer");
  const extras = youTubeVideos.filter((v) => v.type !== "Trailer");

  const backs = images?.backdrops ?? [];
  const posts = images?.posters ?? [];

  const hasVideos = trailers.length > 0 || extras.length > 0;
  const hasImages = backs.length > 0 || posts.length > 0;

  if (!hasVideos && !hasImages) {
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-brand-blue mb-3">{title}</h2>
        <p className="opacity-70">Nenhuma mídia disponível.</p>
      </section>
    );
  }

  return (
    <section className="bg-brand-beige  pl-[10rem] pr-[10rem]">
      <h2 className="text-2xl font-bold text-brand-blue mb-4 ">{title}</h2>

      {/* Trailers */}
      {hasVideos && (
        <div className="mb-8">
          <div className="flex items-center mb-[1rem]">
            <h3 className="text-[1.3rem] mb-2">Trailers</h3> 
            <button className="bg-brand-blue text-white p-[0.5rem] rounded-[1rem] ml-[1rem]">
                Ver mais
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(trailers.length ? trailers : youTubeVideos).slice(0, 3).map((v) => (
              <iframe
                key={v.id}
                src={`https://www.youtube.com/embed/${v.key}`}
                title={v.name}
                className="w-full aspect-video rounded-xl"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      )}

      {/* Imagens */}
      {hasImages && (
        <div>
          <div className="flex items-center mb-[1rem]">
            <h3 className="text-[1.3rem] mb-2">Imagens</h3> 
            <button className="bg-brand-blue text-white p-[0.5rem] rounded-[1rem] ml-[1rem]">
                Ver mais
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pb-[3rem]">
            {backs.slice(0, 4).map((img, i) => (
              <img
                key={`bd-${i}`}
                src={backdrop(img.file_path, "w780")} 
                alt="backdrop"
                className="rounded-xl w-full"
                loading="lazy"
              />
            ))}

            {posts.slice(0, 8 - Math.min(8, backs.length)).map((img, i) => (
              <img
                key={`ps-${i}`}
                src={poster(img.file_path, "w500")}
                alt="poster"
                className="rounded-xl w-full"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
