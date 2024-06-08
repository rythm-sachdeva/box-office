import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getShowsById } from '../api/Tvmaze';
import ShowMainData from '../components/Shows/ShowMainData';
import Details from '../components/Shows/Details.js';
import Seasons from '../components/Shows/Seasons.js';
import Cast from '../components/Shows/Cast.js';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['showId', showId],
    queryFn: () => getShowsById(showId),
  });
  if (showError) {
    return <div>We Have an Error {showError.message}</div>;
  }
  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          geners={showData.genres}
          summary={showData.summary}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons}/>
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast}/>
        </div>
      </div>
    );
  }
  return <div>Data Is Loading....</div>;
};

export default Show;
