
import { SearchCard, SearchImgWrapper } from "../common/SearchCard"



const ActorsCard = ({name,image,gender,country,birthday}) => {
  return (
    <SearchCard>
        <SearchImgWrapper>
        <img src={image} alt={name}/>
        </SearchImgWrapper>
                
        <h1>
            {name} {`(${gender})`}
        </h1>
        <p>{country}</p>
        <p>{birthday}</p>

    
    </SearchCard>
  )
}

export default ActorsCard

