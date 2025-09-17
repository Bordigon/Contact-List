import React from "react";
import { useReducer, createContext } from "react";

export const inicial = ()=>({
    user: [],
    info: [],
    contactInfo: []
});

export function contactReducer (state, action){
    switch(action.type){
        case "info":
            //action.payload DEBE ser un array de los elementos del contacto
            return {...state, info:[action.payload]}
        case "user":
            return {...state, user:[action.payload]}
        case "editInfo":
            return {...state, contactInfo:[...state.contactInfo, action.payload]}
        default:
            return state;
    }
}

export const ContactContext = createContext();

export function ContactProvider ({children}){
    const [contact, dispatch] = useReducer(contactReducer, inicial())
    return (
        <ContactContext.Provider value={{contact, dispatch}}>
            {children}
        </ContactContext.Provider>
    )
}