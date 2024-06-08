import { useEffect,useReducer } from "react"


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

  const useStarredShows = ()=>{
    return usePersistedReducer(starredShowReducer, [],'StarredUser')
  }

  export {useStarredShows}