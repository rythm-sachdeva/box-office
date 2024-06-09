import { getShowsByIds } from "../api/Tvmaze";
import ShowGrid from "../components/Shows/ShowGrid";
import { useStarredShows } from "../utils/useStarredShows"
import { useQuery } from "@tanstack/react-query";
import { TextCenter } from "../components/common/TextCenter";


function Starred() {
  const [starredShow] = useStarredShows();
  const {data: apidata, error:apierror} = useQuery({
    queryKey:['search',starredShow],
    queryFn: async () => getShowsByIds(starredShow).then(result => result.map(show=> ({show}))),
    refetchOnWindowFocus: false
  })
  if(apierror)
    {
      return <TextCenter>Error Occured: {apierror.message}</TextCenter>
    }
  if(apidata?.length===0)
    {
      return <TextCenter>No Shows Are Starred</TextCenter>
    }
  if(apidata?.length>0)
    {
      return <ShowGrid apidata={apidata}/>
    }
  return (
    <TextCenter>Shows Are Loading...</TextCenter>
  )
}

export default Starred