import MovieItem from "./MovieItem"

export default function MoviesList({movies, onDetail}){
    return <div id="movies-list">
            {movies.map(item => <MovieItem item={item} key={item.imdbID} onDetail={onDetail}/>)}
        </div>
}