
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import MyCard from './components/card/MyCard';
import SearchForm from './components/card/SearchForm';
import FavList from './components/card/FavList';
import { API_KEY, DEV_MODE} from './components/config.js'
import MoviesList from './components/card/MoviesList.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function App() {

  const [moviesList, setMoviesList] = useState([])
  const [movieData, setMovieData] = useState(null)
  const [show, setShow] = useState(false)
  const [inProgress, setInProgress] = useState(false)



  const searchHandler = async(search) =>{
      // TODO fetch movies by name
      console.log('Search by:' +search);
      const url = DEV_MODE
      ? './data/movies.json'
      : `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`
      const response = await fetch(url)
      const json = await response.json();
      setMoviesList(json.Search)
  }

  const detailHandler = async (id) => {
    if(inProgress){
      return false
    }
    setInProgress(true)
    setShow(true)
    const url = DEV_MODE
      ? './data/movies.json'
      : `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`

      const response = await fetch(url)
      const json = await response.json()
      setInProgress(false)
      console.log(json)
      setMovieData(json)
  }

  const closeModalHandler = () => {
    setMovieData(null)
    setShow(false)
  }

  return (
    <>
    <Container>
      <MyCard className="mb-5">
        <SearchForm onSearch={searchHandler}/>
      </MyCard>
      <MyCard title="Fav movies" className="mb-5">
        <FavList movies={[]}/>
      </MyCard>
      <MyCard title="Movies list">
        <MoviesList movies={moviesList} onDetail={detailHandler}/>
      </MyCard>
    </Container>
    <Modal show={show} onHide={closeModalHandler} >
      {movieData && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{movieData.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex'>
              <div className="pic">
                <img src={movieData.Poster} alt={movieData.Title} />
              </div>
              <div className="content">
                <p>{movieData.Plot}</p>
              </div>
            </div>
            <Ratings ratings={movieData.Ratings} />
          </Modal.Body>
        </>
      )}
       {!movieData && (
        <p className='text-center'>Please wait...</p>
       )}
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
