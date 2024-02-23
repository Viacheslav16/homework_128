
function MyApp(){
    return <main className="container">
        <SearchForm />
    </main>
}

function SearchForm(){
    const [search,setSearch] = React.useState('Batman')

    return <div className="card" mb-4>
        <div className="card-body">
            <form>
                <div className="row">
                <div className="col-10">
                    <input type="text" className="form-control" value={search}/>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-info">Search</button>
                </div>
                </div>
            </form>
        </div>
    </div>
}
  
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

