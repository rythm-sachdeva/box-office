import { useStarredShows } from '../../utils/useStarredShows';
import ShowCard from './ShowCard';

const ShowGrid = ({ apidata }) => {
  


  

  const [starredShow, dispatchStarredShow] = useStarredShows()

  const onStarmeClick = (showId) =>{

    const isStarred = starredShow.includes(showId)
    console.log(starredShow)

    if(isStarred)
      {
        dispatchStarredShow({type:'unstar', showId})
      }
      else{
        dispatchStarredShow({type:'star', showId})
      }

  }

  return (
    <div>
      {apidata.map(item => (
        <ShowCard
          key={item.show.id}
          name={item.show.name}
          image={item.show.image?.medium || '/not-found-image.png'}
          id={item.show.id}
          summary={item.show.summary}
          onStarmeClick={onStarmeClick}
          isStarred={starredShow.includes(item.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
