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
    return api.get(`/movie/${id}`, {
        params: {
            language: "pt-BR",
            append_to_response: "credits,images,videos,recommendations,similar"
        },
    }).then((r) => r.data);
}

export function getMoviesCredit(id: number){
    return api.get(`/movie/${id}/credits`,{
        params: {
            language: "pt-BR",

        }
    }).then((r) => r.data);
}

export async function getMovieMedia(id: number) {
  const { data } = await api.get(`/movie/${id}`, {
    params: {
      language: "pt-BR",
      // traz tudo junto:
      append_to_response: "videos,images",
      // deixa vir imagem em qualquer idioma (útil qdo pt-BR não tem):
      include_image_language: "pt,null,en",
    },
  });

  return {
    videos: data.videos?.results ?? [],
    images: {
      backdrops: data.images?.backdrops ?? [],
      posters: data.images?.posters ?? [],
      logos: data.images?.logos ?? [],
    },
  };
}

export function getMoviesRecommendations(id: number){
    return api.get(`movie/${id}/recommendations`, {
        params: {
            language: "pt-BR"
        }
    }).then((r) => r.data);
}

export function getMovieReviews(id: number, page = 1) {
  return api
    .get(`/movie/${id}/reviews`, {
      params: { language: "pt-BR", page },
    })
    .then((r) => r.data); // { id, page, results: [...], total_pages, total_results }
}