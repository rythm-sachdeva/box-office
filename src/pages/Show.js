import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getShowsById } from "../api/Tvmaze"

const Show = () => {
    const {showId} = useParams()
    const {data: showData ,error: showError} = useQuery({
        queryKey:['showId',showId],
        queryFn: ()=>getShowsById(showId)
    })
  if(showError)
    {
        return <div>We Have an Error {showError.message}</div>
    }
    if(showData)
        {
            return <div>Got Show Data:{showData.name}</div>
        }
        return <div>Data Is Loading....</div>
}

export default Show