import { useState } from "react"
import { searchForPeople, searchForShows } from "../api/Tvmaze";
import ApiError from "../utils/ApiError";
import SearchForm from "../components/SearchForm";



function Home() {
const [apidata,setApidata] = useState(null)
const [apierror,setApierror] = useState("")

// console.log(searchOptions)



const onSearch = async (searchOptions,searchState) => {

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
     <SearchForm  onSearch={onSearch}/>
     <div>
      {renderdata()}
     </div>
    </div>
  )
}

export default Home