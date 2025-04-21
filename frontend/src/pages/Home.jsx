import AnimeCard from "../components/AnimeCard" 
import {useState} from "react"

function Home() {
    // this part rerenders the state based on what the user types in the search
    const [searchQuery, setSearchQuery] = useState("");

    const shows = [
        {id: 1, title: "One Piece", release_date: "1999"},
        {id: 1, title: "One Piece", release_date: "1999"},
        {id: 1, title: "One Piece", release_date: "1999"},
    ]

    const handleSearch = () => {
        // this prevents the refresh on submit
        e.preventDefault()
        alert(searchQuery)
    }
    
    return <div className = "home">
        <form onSubmit = {handleSearch} className = "search-form">
            <input 
                type="text" 
                placeholder = "Search anime..." 
                className = "search-input" 
                // connects the component to the search query
                value = {searchQuery} 
                // updating the state from an input element
                onChange = {(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className = "search-button">Search</button>
        </form>

        <div className = "shows.grid">
            {shows.map((show) => (
                <AnimeCard show = {show} key = {show.id} />
        ))}
        </div>
    </div>
}

export default Home