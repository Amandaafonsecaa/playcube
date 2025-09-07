export function poster(path?: string | null, size: "w92"|"w185"|"w300"|"w500"="w300"){
    return path ? `https://image.tmdb.org/t/p/${size}${path}` : ""
}

export function backdrop(path?: string | null, size: "w780"|"w1280"|"original"="w1280") {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : "";
}