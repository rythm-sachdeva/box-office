import { useState } from "react"

function SearchForm({onSearch}) {
 const [searchState,setSearchState] = useState(null)
const [searchOptions,setSearchOptions] = useState("shows")

// console.log(searchOptions)

const onRadioChange = (ev) => {
  setSearchOptions(ev.target.value)
  
}

const searchInput = (e) => {
  setSearchState(e.target.value)
}

const onSubmit = (ev) =>{
ev.preventDefault()
 
onSearch(searchOptions,searchState)

}


  return (
    <form onSubmit={onSubmit}>
     <input type="text" onChange={searchInput}/>
      <button type="submit">Search</button>

      <label>
        Shows
        <input type="radio" name="search-shows" value="shows" checked={searchOptions === "shows"} onChange={onRadioChange}/>
      </label>

      <label>
        Actors
        <input type="radio" name="search-shows" value="actors" checked={searchOptions === "actors"} onChange={onRadioChange}/>
      </label>
     </form>
  )
}

export default SearchForm