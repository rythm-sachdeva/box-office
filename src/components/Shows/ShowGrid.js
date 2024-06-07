import ShowCard from "./ShowCard"

const ShowGrid = ({apidata}) => {
  return (
    <div>
      {
        apidata.map((item)=> 
        <ShowCard key={item.show.id} name={item.show.name} image={item.show.image?.medium || '/not-found-image.png'} id={item.show.id} summary={item.show.summary}/>
      )
      }
    </div>
  )
}

export default ShowGrid