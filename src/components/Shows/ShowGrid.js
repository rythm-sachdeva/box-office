import { useStarredShows } from '../../utils/useStarredShows';
import ShowCard from './ShowCard';
import { FlexGrid } from '../common/FlexGrid';

const ShowGrid = ({ apidata }) => {
  const [starredShow, dispatchStarredShow] = useStarredShows();

  const onStarmeClick = showId => {
    const isStarred = starredShow.includes(showId);
  

    if (isStarred) {
      dispatchStarredShow({ type: 'unstar', showId });
    } else {
      dispatchStarredShow({ type: 'star', showId });
    }
  };

  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default ShowGrid;
