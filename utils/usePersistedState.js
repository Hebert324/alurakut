import { useState, useEffect, Dispatch, SetStateAction } from 'react'

function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        if (typeof window !== "undefined") {
            const storageValue = localStorage.getItem(key)
            if (storageValue){
                return JSON.parse(storageValue)
            }
        }else{
            return initialState
        }
           
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))

    //    const storageValue = localStorage.getItem(key)

    //     if (storageValue){
    //         return JSON.parse(storageValue)
    //     }else{
    //         return initialState
    //     }

    }, [key, state])

    return [state, setState]
}

export default usePersistedState