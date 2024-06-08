

const ShowCard = ({name,image,id,summary,onStarmeClick,isStarred}) => {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer" >Read More</a>
        <button type="button" onClick={()=>onStarmeClick(id)}>{isStarred?"Unstar Me": "Star Me"}</button>
     </div>

     <p> 
        {strippedString}
     </p>
    </div>
  )
}

export default ShowCard