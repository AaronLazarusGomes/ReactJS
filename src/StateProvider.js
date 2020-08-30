//setting up a data layer
//making use of React-Context-API
//need to track the basket
import React, { createContext, useContext, useReducer } from "react"

//The creation of Data layer
export const StateContext = createContext();

//BUILDING A PROVIDER FOR THE ENTIRE APP
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)