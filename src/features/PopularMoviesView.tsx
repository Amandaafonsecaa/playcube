//importa os comps q vão usar
import About from "../components/about";

type Props = {
    data: any[],
    loading: boolean,
    error: string | null
};

export default function PopularMoviesView(
    {
        data, loading, error
    }: Props
){
    if(loading) return <p>Carregando...</p>
    if(error) return <p>Erro: {error}</p>
    if(data.length === 0) return <p>Nenhum filme encontrado</p>

    return(
        <section className="px-4">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Filmes Populares</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
               
            </div>
        </section>
    )
}