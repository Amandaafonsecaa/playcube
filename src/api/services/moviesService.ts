import axios from "axios";
import { api } from "../config";

export function getPopularMovies(page = 1){
    return api.get("/movie/popular", {
        params: {
            language: "pt-BR", region: "BR", page
        }
    }).then((r) => r.data)
}

export function getMoviesDetails(id: number){
    return api.get(`/movies/${id}`, {
        params: {
            language: "pt-BR",
            append_to_response: "credits,images,videos,recommendations,similar"
        },
    }).then((r) => r.data);
}

export function getMoviesCredit(id: number){
    return api.get(`/movies/${id}/credits`,{
        params: {
            language: "pt-BR",

        }
    }).then((r) => r.data);
}

export function getMovieVideos(id: number){
    return api.get(`/movies/${id}/videos`, {
        params: {
            language: "pt-BR"
        }
    }).then((r) => r.data);
}

export function getMoviesRecommendations(id: number){
    return api.get(`movies/${id}/recommendations`, {
        params: {
            language: "pt-BR"
        }
    }).then((r) => r.data);
}