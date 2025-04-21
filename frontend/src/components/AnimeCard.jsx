function AnimeCard({show}) {

    function setFavorite() {
        alert("clicked")
    }

    return <div className = "show-card">
        <div className = "show-poster">
            <img src={show.url} alt={show.title} />
            <div className = "show-overlay">
                <button className = "favorite-btn" onClick = {setFavorite}>
                    ♥
                </button>
            </div>
        </div>

        <div className = "show-info">
            <h3>{show.title}</h3>
            <p>{show.release_date}</p>
        </div>
    </div>
}

export default AnimeCard