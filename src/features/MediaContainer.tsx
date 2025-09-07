// features/media/MediaContainer.tsx
import { useEffect, useState } from "react";
import { getMovieMedia } from "../api/services/moviesService";
import { getSeriesMedia } from "../api/services/seriesService";
import Media from "../components/media";

type Props = { id: number; type: "movie" | "tv" };

type TmdbVideo = { id: string; key: string; name: string; site: string; type: string };
type TmdbImage = { file_path: string; width: number; height: number; iso_639_1: string | null };
type Images = { backdrops: TmdbImage[]; posters: TmdbImage[]; logos: TmdbImage[] };

export default function MediaContainer({ id, type }: Props) {
  const [videos, setVideos] = useState<TmdbVideo[]>([]);
  const [images, setImages] = useState<Images>({ backdrops: [], posters: [], logos: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fn = type === "movie" ? getMovieMedia : getSeriesMedia;
    setLoading(true);
    fn(id)
      .then(({ videos, images }) => {
        setVideos(videos ?? []);
        setImages({
          backdrops: images?.backdrops ?? [],
          posters: images?.posters ?? [],
          logos: images?.logos ?? [],
        });
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id, type]);

  if (loading) return <p className="text-center py-10">Carregando mídia…</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return <Media videos={videos} images={images} />;
}
