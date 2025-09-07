import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/services/moviesService";
import PopularMoviesView from "./PopularMoviesView";

export default function PopularMoviesContainer(){
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        getPopularMovies(1)
        .then((res) => setData(res.results ?? []))
        .catch((e) => setErr(e.message))
        .finally(() => setLoading(false));
    }, []);
    return <PopularMoviesView data={data} loading={loading} error={err} />;
}

