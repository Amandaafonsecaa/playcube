import axios from "axios";
import { api } from "../config";

export function getPopularSeries(page = 1){
    return api.get("/tv/popular", {
        params: {
            language: "pt-BR", region: "BR", page
        }
    }).then(r => r.data);
}

export function getSeriesDetails(id: number){
    return api.get(`/tv/${id}`, {
        params: {
            language: "pt-BR",
            append_to_response: "credits,images,videos,recommendations,similar",
        }
    }).then(r => r.data);
}

export function getSeriesCredit(id: number){
    return api.get(`/tv/${id}/credits`, {
        params: {
            language: "pt-BR",
        }
    }).then(r => r.data);
}

export async function getSeriesMedia(id: number) {
  const { data } = await api.get(`/tv/${id}`, {
    params: {
      language: "pt-BR",
      append_to_response: "videos,images",
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

export function getSeriesReviews(id: number, page = 1) {
  return api
    .get(`/tv/${id}/reviews`, {
      params: { language: "pt-BR", page },
    })
    .then((r) => r.data);
}