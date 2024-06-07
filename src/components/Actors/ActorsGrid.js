import ActorsCard from './ActorsCard';

const ActorsGrid = ({ apidata }) => {
  return (
    <div>
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
    </div>
  );
};

export default ActorsGrid;
