const api = `https://playground.4geeks.com/contact/agendas/`;

export const getContacts = async (user)=>{
    try{
        const userContacts = await fetch(`${api}${user}/contacts`);
        const contacts = await userContacts.json();
        return contacts.contacts;
    }
    catch (err){
        console.error(`La has cagado, aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa${err}`);
    }
}

export const addContact = async (user, info)=>{
    console.log(info)
    try{
        const data =  fetch(`${api}${user}/contacts`,{
            method: "POST",
            body : JSON.stringify(info),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(resp =>{
            console.log(resp.ok); //llego bn la info
            console.log(resp.status); //c'odigo de recibimiento, debe ser menor a 400
            return resp.json(); //me devuelve el array
        })
        .then(data=>{
            //no se bn pa q sirve esto
            console.log(data); //imprime en la consola el objeto exacto recibido por el servidor
        })
    }
    catch (err){
        console.error(`la cagaste ${err}`)
    }
}

export const editContact = async (user, id, info)=>{
    console.log(info)
    try{
        const data =  fetch(`${api}${user}/contacts/${id}`,{
            method: "PUT",
            body : JSON.stringify(info),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(resp =>{
            console.log(resp.ok); //llego bn la info
            console.log(resp.status); //c'odigo de recibimiento, debe ser menor a 400
            return resp.json(); //me devuelve el array
        })
        .then(data=>{
            //no se bn pa q sirve esto
            console.log(data); //imprime en la consola el objeto exacto recibido por el servidor
        })
    }
    catch (err){
        console.error(`la cagaste ${err}`)
    }
}

export const deleteContact = async (user,id)=>{
    try{
        const tasks = await fetch(`${api}${user}/contacts/${id}`, {
            method : "DELETE"
        })
    }
    catch(err){
        console.error(`La cagaste, ${err}`)
    }
}