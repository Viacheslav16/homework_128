const DEV_MODE = true;

function MyApp(){
const API_KEY = 'ed370f0c';
const [moviesList, setMoviesList] = React.useState([])

const searchHandler = async(search) =>{
    // TODO fetch movies by name
    console.log('Search by:' +search);
    const url = DEV_MODE
    ? './data/movies.json'
    : `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`
    const response = await fetch(url)
    const json = await response.json();
    setMoviesList(json.Search)
}

    return <main className="container">
        <Card>
        <SearchForm onSearch={searchHandler}/>
        </Card>
        <Card title="Fav movies">
        <FavList movies={[]}/>
        </Card>
        <Card title="Movies list">
        <MoviesList movies={moviesList}/>
        </Card>
    </main>
}

function Card(props){
const cardHeader = props.title ? (
    <div className="card-header">
    <h4>{props.title}</h4>
</div>
) : ''

    return<div className="card mb-4">
        {cardHeader}
        <div className="card-body">
            {props.children}
        </div>
    </div>
}

function SearchForm({onSearch}){
    const [search,setSearch] = React.useState('Batman')

    function submitHandler(e){
        e.preventDefault()
        onSearch(search)
    }

    return <form onSubmit={submitHandler}>
        <div className="row">
        <div className="col-10">
            <input type="text" className="form-control" onChange={(e)=> setSearch(e.target.value)} value={search}/>
        </div>
        <div className="col-2">
            <button type="submit" className="btn btn-info">Search</button>
        </div>
        </div>
    </form>
}
  
function MoviesList({movies}){
    return <div id="movies-list">
            {movies.map(item => <MovieItem item={item} key={item.imdbID}/>)}
        </div>
}

function MovieItem({item}){
    return <div className="card">
    <img src={item.Poster} className="card-img-top" alt={item.Title}/>
    <div className="card-body">
        <h5 className="card-title">{item.Title}</h5>
        <p className="card-text"><b>Year:</b>{item.Year}</p>
        <button className="btn btn-primary btn-detail" data-id={item.imdbID}>Detail</button>
        <button className="btn btn-warning btn-fav">Add to fav</button>
    </div>
</div>
}

function FavList({movies}){
    return <div className="card mb-4">
        <div className="card-header">
            <h4>Fav movies</h4>
        </div>
        <div className="card-body" id="fav-movies-list">
            {movies.map(item => <MovieItem item={item} key={item.imdbID}/>)}
        </div>
    </div>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

