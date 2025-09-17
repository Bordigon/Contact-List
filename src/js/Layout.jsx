import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Agenda from "./components/Agenda";
import AddNewContact from "./components/AddNewContact";
import { ContactContext } from "./ContactContext";

export default function Layout (){
    const { contact, dispatch} = useContext(ContactContext);


    const url = `/addnewcontact`; //acá teóricamente se podría aañadir el user con un ${} en la url
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Agenda/>}/>
                    <Route path={url} element={<AddNewContact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}