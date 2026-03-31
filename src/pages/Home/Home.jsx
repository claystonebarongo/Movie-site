import React, { useState, useEffect } from 'react';
import './Home.css'

const Home = ({ category, searchQuery }) => {



    const API_KEY = 'dbea59f1cf9bb6cd9ab53023420a9bdb'

    const [movieData, setMovieData] = useState([])




    const fetchMovies = async () => {

        let url = "";




        if (searchQuery) {

            url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
        } else {

            url = category === 0
                ? `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`

                : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${category}`;
        }


        const res = await fetch(url);


        const data = await res.json()


        setMovieData(data.results)

    }

    useEffect(() => {
        fetchMovies();

    }, [category, searchQuery])


    return (
        <div className='feed'>


            {movieData.map((item) => (
                <div key={item.id} className='card'>

                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.release_date}</p>
                </div>
            ))}
        </div>
    );


}
export default Home;