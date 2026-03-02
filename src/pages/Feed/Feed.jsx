import React from 'react'

const Feed = () => {
    const movie_Url = `https://picsum.photos/v2/list?page=1&limit=20`
    const [movieList, setMovieList] = useState([])

    const fetchData = async () => {
        await fetch(movie_Url).then(res => res.json()).then(data => setMovieList(data))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="grid">

                {movieList.map((movie) => {
                    return (
                        <>
                            <div className="bold">
                                <p>Movie</p>
                                <img src={movie.download_url} alt="yoo" />
                            </div>
                        </>
                    )

                })}
            </div>

        </>
    )
}

export default Feed