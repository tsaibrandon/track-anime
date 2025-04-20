function AnimeCard({show}) {

    function setFavorite() {
        alert("clicked")
    }

    return <div className = "show-card">
        <div className = "show-poster">
            <img src="{shows.url}" alt="{shows.title}" />
            <div className = "show-overlay">
                <button className = "favorite-btn" onClick = {setFavorite}>
                    ♥
                </button>
            </div>
        </div>

        <div className = "show-info">
            <h1>{show.title}</h1>
            <p>{show.release_date}</p>
        </div>
    </div>
}

export default AnimeCard