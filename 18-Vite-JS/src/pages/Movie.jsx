import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { DEV_MODE, API_KEY } from "../components/config";
import Ratings from "../components/card/Ratings";

export default function MoviePage(){
    const params = useParams()
    console.log(params);
    const [movieData, setMovieData] = useState(null)

    const fetchData = async()=>{
        const url = DEV_MODE
        ? './data/movies.json'
        : `https://www.omdbapi.com/?apikey=${API_KEY}&i=${params.imdbID}`
      const response = await fetch(url)
      const json = await response.json();
      setMovieData(json)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return <div className="container">
        ({movieData && (
        <>
            <h1>{movieData.Title}</h1>
            <Link to="/">Back</Link>
            <br />
            <div className='d-flex'>
                <div className="pic">
                <img src={movieData.Poster} alt={movieData.Title} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <b>Year:</b>{movieData.Year}
                        </li>
                        <li>
                            <b>Genre:</b>{movieData.Genre}
                        </li>
                    </ul>

                    <Ratings ratings={movieData.Ratings} />

                </div>
                <div className="content">
                <p>{movieData.Plot}</p>
                </div>
            </div> 
        </>)}
    </div>
}