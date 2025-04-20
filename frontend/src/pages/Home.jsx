import AnimeCard from "../components/AnimeCard" 

function Home() {
    const shows = [
        {id: 1, title: "One Piece", release_date: "1999"},
        {id: 1, title: "One Piece", release_date: "1999"},
        {id: 1, title: "One Piece", release_date: "1999"},
    ]

    const handleSearch = () => {

    }
    
    return <div className = "home">
        <form onSubmit = {handleSearch} className = "search-form">
            <input type="text" placeholder = "Search anime..." className = "search-input" />
        </form>

        <div className = "shows.grid">
            {shows.map((show) => (
                <AnimeCard show = {show} key = {show.id} />
        ))}
        </div>
    </div>
}

export default Home