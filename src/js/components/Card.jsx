import React, {useState, useEffect, useContext} from "react";
import rigo from "../../img/rigo-baby.jpg"
import { Link } from "react-router";
import { ContactContext } from "../ContactContext";

export default function Card (props){
    const { contact, dispatch} = useContext(ContactContext)
    let oldContact = ()=>{
        dispatch({ type:"editInfo", payload:`${props.name}` });
        dispatch({ type:"editInfo", payload:`${props.email}` });
        dispatch({ type:"editInfo", payload:`${props.phone}` });
        dispatch({ type:"editInfo", payload:`${props.address}` });
    }

    const address = (<svg xmlns="http://www.w3.org/2000/svg" className="me-2" style={{width:'20px'}} viewBox="0 0 640 640"><path fill="#8c9096" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>)
    const phone = (<svg xmlns="http://www.w3.org/2000/svg" className="me-3" style={{width:'20px', transform:'rotate(270deg)'}} viewBox="0 0 640 640"><path fill="#8c9096" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>)
    const email = (<svg xmlns="http://www.w3.org/2000/svg" className="me-3" style={{width:'20px'}} viewBox="0 0 640 640"><path fill="#8c9096" d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>)
    const editContact = (<svg xmlns="http://www.w3.org/2000/svg" className="mx-4" style={{width:'20px'}} viewBox="0 0 640 640"><path fill="#121212" d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z"/></svg>)
    const deleteContact = (<svg xmlns="http://www.w3.org/2000/svg" style={{width:'20px'}} viewBox="0 0 640 640"><path fill="#121212" d="M232.2 68.8C236.9 56.3 248.8 48 262.2 48L377.8 48C391.1 48 403.1 56.3 407.8 68.8L424 112L520 112C533.3 112 544 122.7 544 136C544 149.3 533.3 160 520 160L120 160C106.7 160 96 149.3 96 136C96 122.7 106.7 112 120 112L216 112L232.2 68.8zM147.6 516.8L124.7 208L172.9 208L195.5 513.2C196.1 521.6 203.1 528 211.5 528L428.6 528C437 528 443.9 521.5 444.6 513.2L467.2 208L515.3 208L492.4 516.7C489.9 550.1 462.1 576 428.6 576L211.5 576C178 576 150.2 550.1 147.7 516.7z"/></svg>)

    return(
        <div>
            <div className="card m-3 " style={{width:'740px'}}>
                <div className="row ">
                    <div className="col-sm-4 d-flex align-items-center justify-content-center">
                        <img src={rigo} className="img-fluid rounded-circle" style={{ maxHeight:'110px'}} alt="..."></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <p type="button" className="float-end btn py-0 px-1 me-5" data-bs-toggle="modal" data-bs-target="#eliminarContacto" onClick={(e)=>dispatch({ type:"info", payload:`${props.id}` })}>{deleteContact}</p>
                            <Link onClick={oldContact} to="/addnewcontact" className="float-end">{editContact}</Link>
                            <h4 >{props.name}</h4>
                            <h5 className="mb-1" style={{color:'grey'}}>{address}{props.address}</h5>
                            <p className="m-0" style={{color:'grey'}}>{phone}{props.phone}</p>
                            <p className="m-0" style={{color:'grey'}}>{email}{props.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}