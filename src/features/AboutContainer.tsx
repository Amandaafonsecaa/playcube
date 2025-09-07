import { useEffect, useState } from "react";
import { getMoviesDetails } from "../api/services/moviesService";
import { getSeriesDetails } from "../api/services/seriesService";
import About from "../components/about";

type Props = {
  id: number;
  type: "movie" | "tv";
};

export default function AboutContainer(
    {
        id, type
    }: Props
){
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fn = type === "movie" ? getMoviesDetails : getSeriesDetails;
        setLoading(true);
        fn(id)
        .then(setData)
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }, [id, type])

    if (loading) return <p className="text-center py-10">Carregando…</p>;
    if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
    if (!data) return null;

    return <About data={data} type={type} />;

}