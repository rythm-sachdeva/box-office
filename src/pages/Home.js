import { useState } from "react"
import { searchForPeople, searchForShows } from "../api/Tvmaze";
import ApiError from "../utils/ApiError";



function Home() {
const [searchState,setSearchState] = useState(null)
const [apidata,setApidata] = useState(null)
const [apierror,setApierror] = useState("")
const [searchOptions,setSearchOptions] = useState("shows")

// console.log(searchOptions)

const onRadioChange = (ev) => {
  setSearchOptions(ev.target.value)
  
}

const searchInput = (e) => {
  setSearchState(e.target.value)
}

const onSearch = async (ev) => {
  ev.preventDefault();

  try {
    if(searchOptions === "shows")
      {
        const body = await searchForShows(searchState)
        setApidata(body)
      }
      else {
        const body = await searchForPeople(searchState)
    setApidata(body)
      }
  } catch (error) {
    setApierror(error.message)
  }
  
};

const renderdata = () =>{
  if(apierror)
    {
      return(<ApiError message={apierror}/>)
    }

  if(apidata)
    {
     if(apidata[0].show)
      {
        return apidata.map((item)=>
          <div key={item.show.id}>
           {item.show.name}
          </div>
         )
      }
     else {return apidata.map((item)=>
        <div key={item.person.id}>
         {item.person.name}
        </div>
       )
      }
    }

}

  return (
    <div>
     <form onSubmit={onSearch}>
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
     <div>
      {renderdata()}
     </div>
    </div>
  )
}

export default Home