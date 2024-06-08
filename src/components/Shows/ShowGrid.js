import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const ShowGrid = ({ apidata }) => {
  const usePersistedReducer = (reducer,intialState,localStorageKey)=>{
    const [state,dispatch] = useReducer(reducer,intialState,(intial)=>{
     
     const persistedValue = localStorage.getItem(localStorageKey)

    return  persistedValue ? JSON.parse(persistedValue) : intial

    })

    useEffect(()=>{
      localStorage.setItem(localStorageKey,JSON.stringify(state))
    },[state,localStorageKey])

    return[state,dispatch]

  }


  const starredShowReducer = (currentStarred, action) => {
    switch (action.type) {
      case 'star':
        return currentStarred.concat(action.showId);
      case 'unstar':
        return currentStarred.filter(showId => showId !== action.showId);
      default:
        return currentStarred;
    }
  };

  const [starredShow, dispatchStarredShow] = usePersistedReducer(starredShowReducer, [],'StarredUser');

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
        />
      ))}
    </div>
  );
};

export default ShowGrid;
