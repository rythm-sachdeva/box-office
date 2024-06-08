import { useStarredShows } from "../utils/useStarredShows"


function Starred() {
  const [starredShow] = useStarredShows();
  return (
    <div>Starred hows are {starredShow.length}</div>
  )
}

export default Starred