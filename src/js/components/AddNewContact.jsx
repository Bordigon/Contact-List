import React, { useContext, useState } from "react";
import { ContactContext } from "../ContactContext";
import { Link } from "react-router";
import { addContact, deleteContact } from "../services/contact.service.js"

export default function AddNewContact (props){
    const {contact, dispatch} = useContext(ContactContext);
    const [name, setName] = useState(contact.info[0]===undefined ? "" : contact.info[0]);
    const [email, setEmail] = useState(contact.info[1]===undefined ? "" : contact.info[1]);
    const [phone, setPhone] = useState(contact.info[2]===undefined ? "" : contact.info[2]);
    const [address, setAddress] = useState(contact.info[3]===undefined ? "" : contact.info[3]);
    const user = contact.user;
    let newContact = {name:"", phone:"", email:"", address:""};
    let counter = 0;

    console.log("ahora viene el contact.info")
    console.log(contact.info[4]!==undefined)

    if(contact.user[0]===undefined){
        return(
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="card col-sm-6 mt-5 p-5 text-center">
                    <p className="display-6">Tienes que estar logueado para poder añadir un contacto</p>
                    <div>
                        <Link className="btn btn-primary" role="button" to="/" >volver a inicio</Link>
                    </div>
                </div>
            </div>
        )
    }


    const handleKeyDown = (e)=>{
            if(e.target.id==="name"){
                newContact.name=e.target.value;
                if(e.key==="Enter")
                document.getElementById("email").focus();

            }
            else if(e.target.id==="email"){
                newContact.email=e.target.value;
                if(e.key==="Enter")
                document.getElementById("phone").focus();
            }
            else if(e.target.id==="phone"){
                newContact.phone=e.target.value;
                if(e.key==="Enter")
                document.getElementById("address").focus();
            }
            else if(e.target.id==="address"){
                newContact.address=e.target.value;
                if(e.key==="Enter")
                document.getElementById("saveButton").focus();
            }
    }

    const handleAddContact = async ()=>{
        if(contact.info[4]!==undefined)
            await deleteContact(user, contact.info[4])
        newContact = {name:name, email:email, phone:phone, address:address}
        await addContact(user, newContact)
        dispatch({ type:"clearInfo", payload:""})
    }

    console.log(counter+ " yo soy counter")

    return(
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card col-sm-8 mt-5 p-4">
                    <h1 className="my-3 text-center">{user}</h1>
                    <label className="mt-1">Full Name</label>
                    <input className="col-sm-12 my-2" id="name"  placeholder="Full Name" onKeyDown={handleKeyDown} onChange={(e)=>setName(e.target.value)} value={name}/>
                    <label className="mt-1">Email</label>
                    <input className="col-sm-12 my-2" id="email" placeholder="Enter email" onKeyDown={handleKeyDown} onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <label className="mt-1">Phone</label>
                    <input className="col-sm-12 my-2" id="phone" placeholder="Enter phone" onKeyDown={handleKeyDown} onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                    <label className="mt-1">Address</label>
                    <input className="col-sm-12 my-2" id="address" placeholder="Enter address" onKeyDown={handleKeyDown} onChange={(e)=>setAddress(e.target.value)} value={address}/>
                    <Link to="/" className="btn btn-primary mt-2" id="saveButton" onClick={handleAddContact} >Save</Link>
                    <Link to="/" onClick={(e)=>dispatch({ type:"clearInfo", payload:""})}>get back to contacts</Link>
                </div>
            </div>
        </div>
    )
}