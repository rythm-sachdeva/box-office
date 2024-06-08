import { useState } from "react"
import { searchForPeople, searchForShows } from "../api/Tvmaze";
import ApiError from "../utils/ApiError";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/Shows/ShowGrid";
import ActorsGrid from "../components/Actors/ActorsGrid";
import { useQuery } from "@tanstack/react-query";



function Home() {
  const [filter,setfilter]=useState(null);
 
  const {data: apidata, error:apierror} = useQuery({
    queryKey:['search',filter],
    queryFn: () => filter.searchOptions==="shows"? searchForShows(filter.q) : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false
  })


const onSearch = async (searchOptions,searchState) => {
  setfilter({q: searchState,
    searchOptions: searchOptions
  })

  
};

const renderdata = () =>{
  if(apierror)
    {
      return(<ApiError message={apierror}/>)
    }

  if(apidata)
    {
     if(apidata[0]?.show)
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