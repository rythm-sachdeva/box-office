import { useState } from "react"
import { searchForPeople, searchForShows } from "../api/Tvmaze";
import ApiError from "../utils/ApiError";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/Shows/ShowGrid";
import ActorsGrid from "../components/Actors/ActorsGrid";



function Home() {
const [apidata,setApidata] = useState(null)
const [apierror,setApierror] = useState("")

// console.log(searchOptions)



const onSearch = async (searchOptions,searchState) => {

  try {
    if(searchOptions === "shows")
      {
        const body = await searchForShows(searchState)
        console.log(body)
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
        return <ShowGrid apidata={apidata}/>
         
      }
     else {return <ActorsGrid apidata={apidata}/>
      }
    }

}

  return (
    <div>
     <SearchForm  onSearch={onSearch}/>
     <div>
      {renderdata()}
     </div>
    </div>
  )
}

export default Home