export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  bearer: import.meta.env.VITE_API_BEARER as string,
};


export async function httpGet<T>(path: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(`${API_CONFIG.baseURL}$path`);
    if (params){
        Object.entries(params).forEach(([k,v]) => v != undefined && url.searchParams.set(k, String(v))); //explica essa linha
    }
    const res = await fetch(url.toString(), { //explica esse bloco
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${API_CONFIG.bearer},`
        },
    });
    if(!res.ok){
        const body = await res.text().catch(()=>"");
        throw new Error(`TMDB ${res.status}: ${body || res.statusText}`);
    }
    return res.json() as Promise<T>;

}