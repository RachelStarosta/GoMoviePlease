import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Movie = () => {

    const [movie, setMovies] = useState({});
    /**
     * We need to get the value of the id from the URL 
     * react router makes this quite easy
     */
    let { id } = useParams();

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch( `/movies/${id}` , requestOptions) 
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch(err => {
                console.log(err);
            })
                

       
    }, [id]);

    return(
        
        <div>
            <h2> Movie: {movie.title}</h2>
            <small> <em> {movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating} </em></small>
            <hr/>
            
            <p> {movie.description} </p>
        </div>
        
    )

    }
export default Movie;