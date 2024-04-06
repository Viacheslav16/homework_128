import MovieItem from "./MovieItem"

export default function FavList({movies}){
    return <div id="fav-movies-list">
            {movies.map(item => <MovieItem item={item} key={item.imdbID}/>)}
        </div>
}