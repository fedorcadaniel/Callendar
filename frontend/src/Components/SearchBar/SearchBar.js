import './SearchBar.css'
import searchIcon from './Icons/icons8-location-48.png'
export default function SearchBar(){
    return(
        <div className="search-bar">
            <img onClick ={()=> alert("Message!")} className="location-image" alt='error' src={searchIcon}/>
        </div>
    )
}

// add a location icon
// add a search icon
// add hover future for image