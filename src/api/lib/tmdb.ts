export function poster(path?: string | null, size: "w92"|"w185"|"w300"|"w500"="w300"){
    return path ? `https://image.tmdb.org/t/p/${size}${path}` : ""
}

export function backdrop(path?: string | null, size: "w780"|"w1280"|"original"="w1280") {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : "";
}

export function joinGenres(genres?: { id:number; name:string }[]) {
  return genres?.map(g => g.name).join(", ") || "—";
}

export function getDirector(credits?: { crew?: any[] }) {
  return credits?.crew?.filter((p) => p.job === "Director").map(p => p.name) ?? [];
}

export function getWriters(credits?: { crew?: any[] }) {
  const roles = new Set(["Screenplay","Writer","Story","Characters","Teleplay"]);
  const names = credits?.crew?.filter((p) => roles.has(p.job)).map(p => p.name) ?? [];
  return [...new Set(names)];
}

export function formatMoney(n?: number, currency: string = "USD") {
  if (typeof n !== "number" || !isFinite(n) || n <= 0) return "—";
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format(n);
}

export function formatLanguage(code?: string, spoken?: {english_name:string}[]) {
  if (spoken && spoken.length) return spoken.map(s => s.english_name).join(", ");
  if (!code) return "—";
  try {
    // Mapeia ISO 639-1 para nome local/inglês básico
    const map: Record<string,string> = {
      en: "Inglês", pt: "Português", es: "Espanhol", fr: "Francês", de: "Alemão",
      it: "Italiano", ja: "Japonês", ko: "Coreano", zh: "Chinês"
    };
    return map[code] || code.toUpperCase();
  } catch { return code.toUpperCase(); }
}