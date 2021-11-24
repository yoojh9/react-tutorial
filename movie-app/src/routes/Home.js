import { useState, useEffect } from "react";
import Movie from '../components/Movie';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        console.log('getMovies')
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        const json = await response.json()
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => getMovies(), []);

    console.log(movies)

    // key는 React.js에서 map 안에서 component들을 render할 때 사용함.
    return (
        <div>
            {loading
                ? <h1>Loading...</h1>
                : (
                    <div>
                        {movies.map(movie =>
                            <Movie
                                key={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}></Movie>)}
                    </div>
                )}
        </div>
    );
}

export default Home;