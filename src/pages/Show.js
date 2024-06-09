import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getShowsById } from '../api/Tvmaze';
import ShowMainData from '../components/Shows/ShowMainData';
import Details from '../components/Shows/Details.js';
import Seasons from '../components/Shows/Seasons.js';
import Cast from '../components/Shows/Cast.js';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter.js';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['showId', showId],
    queryFn: () => getShowsById(showId),
  });

 
  if (showError) {
    return <TextCenter>We Have an Error {showError.message}</TextCenter>;
  }
  if (showData) {
    return (
      <ShowPageWrapper>

        <BackHomeWrapper><Link to="/">Got to Home</Link></BackHomeWrapper>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          geners={showData.genres}
          summary={showData.summary}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons}/>
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast}/>
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  return <TextCenter>Data Is Loading....</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;