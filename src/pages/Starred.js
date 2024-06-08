import { getShowsByIds } from "../api/Tvmaze";
import ShowGrid from "../components/Shows/ShowGrid";
import { useStarredShows } from "../utils/useStarredShows"
import { useQuery } from "@tanstack/react-query";


function Starred() {
  const [starredShow] = useStarredShows();
  const {data: apidata, error:apierror} = useQuery({
    queryKey:['search',starredShow],
    queryFn: async () => getShowsByIds(starredShow).then(result => result.map(show=> ({show}))),
    refetchOnWindowFocus: false
  })
  if(apierror)
    {
      return <div>Error Occured: {apierror.message}</div>
    }
  if(apidata?.length===0)
    {
      return <div>No Shows Are Starred</div>
    }
  if(apidata?.length>0)
    {
      return <ShowGrid apidata={apidata}/>
    }
  return (
    <div>Shows Are Loading...</div>
  )
}

export default Starred