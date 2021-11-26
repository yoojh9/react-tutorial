import { useParams } from "react-router-dom";
import { useEffect } from "react";


const Detail = () => {
    const { id } = useParams();

    useEffect(() => getMovie(), []);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }

    console.log(id);
    return <h1>Detail</h1>
}

export default Detail;