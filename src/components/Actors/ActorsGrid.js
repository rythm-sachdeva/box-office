import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';
import { TextCenter } from '../common/TextCenter';

const ActorsGrid = ({ apidata }) => {
  if(apidata.length === 0)
    {
      return <TextCenter>No Data Found</TextCenter>
    }
  return (
    <FlexGrid>
      {apidata.map(item => (
        <ActorsCard
          key={item.person.id}
          name={item.person.name}
          image={item.person.image?.medium || '/not-found-image.png'}
          birthday={item.person.birthday? `Born On  ${item.person.birthday}`: 'Birthday Not Known'}
          country={item.person.country? `Comes From ${item.person.country.name}` : 'Country Not Known'}
          gender={item.person.gender || 'Not Known'}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
