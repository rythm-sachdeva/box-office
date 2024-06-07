import { useParams } from "react-router-dom"

const Show = () => {
    const {showId} = useParams()
    
  return (
    <div>Show Page For {showId}</div>
  )
}

export default Show