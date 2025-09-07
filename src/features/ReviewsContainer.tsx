import React from "react";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../api/services/moviesService";
import { getSeriesReviews } from "../api/services/seriesService";
import Review from "../components/review";

interface Props{
    id: number,
    type: "movie" | "tv"
}

export default function ReviewContainer(
    {
        id, type
    }: Props
){
    const [review, setReview] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fn = type === "movie" ? getMovieReviews : getSeriesReviews;
        setLoading(true);
        fn(id)
        .then((res) => setReview(res.results ?? []))
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }, [id, type]);

    if (loading) return <p className="py-10 text-center">Carregando reviews</p>;
    if (error) return <p className="py-10 text-center text-red-600">{error}</p>;

    return <Review review={review} type={type}/>;


}