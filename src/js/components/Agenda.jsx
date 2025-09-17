import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { Link } from "react-router";
import { deleteContact, getContacts } from "../services/contact.service";
import { addAgenda, getAgendas } from "../services/agenda.service";
import { ContactContext } from "../ContactContext";

export default function Agenda() {
    const { contact, dispatch } = useContext(ContactContext);

    const conditionalUser = () => {
        if (contact.user[0] === undefined)
            return (undefined)
        else
            return contact.user
    }

    const [user, setUser] = useState(conditionalUser)
    console.log(user + " __ y yo soy user")
    const [contactList, setContactList] = useState([]);
    const [update, setUpdate] = useState();
    const url = `/addnewcontact` //acá teóricamente se podría agregar un ${} para añadir al usuario en la url




    const updateContactList = async () => {
        await updateUser();
        //me trae la lista
        const list = await getContacts(user);
        setContactList(list);
    }

    const updateUser = async () => {
        const list = await getAgendas();
        let existe = "false"
        console.log(list)
        for (let t = 0; t < list.length; t++) {
            if (list[t].slug === user) {
                existe = "true";
                console.log(existe)
            }
            console.log("entra")
        }
        if (existe === "false") {
            await addAgenda(user);
        }
        dispatch({ type: "user", payload: `${user}` })
    }

    useEffect(() => {
        if (user !== undefined) {
            updateContactList();
            console.log("updateContactList")
        }
    }, [user, update])

    const handleKeyDown = (e) => {
        if (e.key === "Enter")
            setUser(e.target.value)
    }

    const handleDeleteContact = async ()=>{
        await deleteContact(user, contact.info[0]);
        dispatch ( {type:"info", payload:""});
        updateContactList();
    }

    const inicio = () => {
        if (user === undefined) {
            return (
                <div className="text-center">
                    <h1>Inicie sesion</h1>
                    <input
                        placeholder="Introduzca su usuario"
                        onKeyDown={handleKeyDown}
                    />
                </div>
            )
        }
        else
            return (
                <h1>Contact list of {user}</h1>
            )
    }

    const noContacts = () => {
        return (
            <div className=" d-flex justify-content-center">
                <div className="card col-sm-6 mt-5 p-5 text-center">
                    <p className="display-6">Tu usuario todavía no tiene contactos</p>
                    <div>
                        <Link className="btn btn-primary" role="button" to={url} >añadir contactos</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Link to={url} className="btn btn-primary float-end m-2">Add new contact</Link>
            <div className="d-flex flex-column justify-conten-center align-items-center col-sm-12">
                {inicio()}
                {contact.user[0] === undefined ? <p></p> :
                    contactList.length === 0 ? <div>{noContacts()}</div> : <ul>
                        {contactList.map((element, index) => {
                            return (
                                <Card key={index} id={element.id}
                                    name={element.name}
                                    phone={element.phone}
                                    email={element.email}
                                    address={element.address}
                                />
                            )
                        })}
                    </ul>
                }
            </div>
            <div className="modal fade" id="eliminarContacto" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            if you delete this contact you may not talk to that persona ever again
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">close</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleDeleteContact} >delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}