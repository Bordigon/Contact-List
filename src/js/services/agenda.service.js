const api = `https://playground.4geeks.com/contact/agendas`;

export const addAgenda  = async (name)=>{
  try {
    const responseData = await fetch (`${api}/${name}`, {
        method: "POST",
        headers:{
            "content-type":"aplicacion/json"
        },

    });
    const json = await responseData.json();
    return json
  }
  catch (error) {
    console.error(`Oye la cagaste: ${error}`)
  }
}

export const getAgendas = async ()=>{
    try {
    const responseData = await fetch (api);
    const json = await responseData.json();
    return json.agendas
  }
  catch (error) {
    console.error(`Oye la cagaste: ${error}`)
  }

}

export const deleteAgenda = async (name)=>{
  try{
      const responseData = await fetch (`${api}/${name}`,
        {method: "DELETE",
        headers:{ 
          "content-type":"aplication/json"
        },
        }
      ) 
      console.log("hatsa ac'asi que llega")
  }
  catch (error){
      console.error(`brother la cagaste, ${error}`)
  }
}