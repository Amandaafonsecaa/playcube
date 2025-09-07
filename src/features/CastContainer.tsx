import React from "react";
import Cast from "../components/cast";
import { useEffect, useState } from "react";
import { getMoviesCredit } from "../api/services/moviesService";
import { getSeriesCredit } from "../api/services/seriesService";

interface Props{
    id: number,
    type: "movie" | "tv"
}

export default function CastContainer(
    {
        id, type
    }: Props
){
    const [cast, setCast] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fn = type === "movie" ? getMoviesCredit : getSeriesCredit;
        setLoading(true);
        fn(id)
        .then((res) => setCast(res.cast ?? []))
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }, [id, type]);

    if (loading) return <p className="py-10 text-center">Carregando elenco…</p>;
    if (error) return <p className="py-10 text-center text-red-600">{error}</p>;

    return <Cast cast={cast} />;


}