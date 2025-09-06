//a query serve para definir o que queremos achar com a url, ela define as caracteristicas
//path é o caminho que a url vai caminahr para mostrar algo
export function q(params?: Record<string, any>){
    const p = new URLSearchParams();
    if (params) {
        Object.entries(params).forEach(([k,v]) => v != null && p.set(k, String(v)));
    }
    return p.toString() ? `?${p.toString()}` : "";
}