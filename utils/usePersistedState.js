import { useState, useEffect } from 'react'

function usePersistedState (key, initialState) {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))

       const storageValue = localStorage.getItem(key)

        if (storageValue){
            return JSON.parse(storageValue)
        }else{
            return initialState
        }

    }, [key, state])

    return [state, setState]
}

export default usePersistedState