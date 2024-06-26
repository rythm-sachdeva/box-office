import styled from "styled-components";
import { SearchCard, SearchImgWrapper } from "../common/SearchCard";
import { StarIcon } from "../common/StarIcon";
import { useRef } from "react";
import { Link } from "react-router-dom";
const ShowCard = ({name,image,id,summary,onStarmeClick,isStarred}) => {
    // console.log(image)
    const strippedString = summary ?summary.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,"") + "...":"NO Summary Present";

     const starRef = useRef()
     const starEl = starRef.current 

    const handleClickMe =()=>{
      onStarmeClick(id)
      if(!starEl) return 

      if(isStarred)
        {
          starEl.classList.remove('animate')
        }
        else
        {
          starEl.classList.add('animate')
        }
    }

  return (
    <SearchCard>
        <SearchImgWrapper>
        <img src={image} alt={name}/>
        </SearchImgWrapper>
               
    <h1>
        {name}
    </h1>
    
    <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer" >Read More</Link>
        <StarBtn type="button" onClick={handleClickMe} ref={starRef}><StarIcon active={isStarred} /></StarBtn>
     </ActionSection>

     <p> 
        {strippedString}
     </p>
    </SearchCard>
  )
}

export default ShowCard

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;