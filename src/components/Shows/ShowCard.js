import { Link } from "react-router-dom"

const ShowCard = ({name,image,id,summary}) => {
    // console.log(image)
    const strippedString = summary ?summary.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""):"NO Summary Present";

  return (
    <div>
        <div>
        <img src={image} alt={name}/>
        </div>
               
    <h1>
        {name}
    </h1>
    
    <div>
        <Link to="/">Read More</Link>
        <button type="button">StarMe</button>
     </div>

     <p> 
        {strippedString}
     </p>
    </div>
  )
}

export default ShowCard