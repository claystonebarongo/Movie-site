import React, { useState, useEffect } from 'react'; // Added hooks to import
import './Feed.css'

const Feed = () => {
    const movie_Url = `https://picsum.photos/v2/list?page=1&limit=20`;
    const [movieList, setMovieList] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch(movie_Url);
            const data = await res.json();
            setMovieList(data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="grid">
            {movieList.map((movie) => (
                <div key={movie.id} className="bold"> {/* Added unique key */}
                    <p>{movie.author}</p> {/* Picsum data uses 'author' instead of 'Movie' */}
                    <img
                        src={movie.download_url}
                        alt={movie.author}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Feed;