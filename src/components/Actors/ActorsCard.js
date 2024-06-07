import { Link } from "react-router-dom"


const ActorsCard = ({name,image,gender,country,birthday}) => {
  return (
    <div>
        <div>
        <img src={image} alt={name}/>
        </div>
                
        <h1>
            {name} {`(${gender})`}
        </h1>
        <p>{country}</p>
        <p>{birthday}</p>

     <div>
        <Link to="/">Read More</Link>
        <button type="button">StarMe</button>
     </div>
    </div>
  )
}

export default ActorsCard