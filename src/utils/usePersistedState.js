import { useEffect,useState } from "react";

const usePersistedState = (initialState,sessionKey)=> {

    const [state,setState] = useState(()=> {
        const persistedValue = sessionStorage.getItem(sessionKey);

        
        return persistedValue? JSON.parse(persistedValue) : initialState
    })

    useEffect(()=>{
        sessionStorage.setItem(sessionKey,JSON.stringify(state))

    },[state,sessionKey])
    return [state,setState]
}

export const useSearchString = ()=>{
   return usePersistedState('','searchString')

} 