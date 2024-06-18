import TicketForm from '@/app/(componets)/TicketForm'
import React from 'react'

type Props = {}

const getTicektById = async(id:string)=>{
  
    const res  = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
      cache:"no-store"
    })

    // if(!res.ok){
    //   throw new Error("failed to get ticket")
    // }

    return res.json();
 
}

const TicketPage = async({params}:{params:{id:string}}) => {
  const EDITMODE =  params.id === "new" ? false:true
  let updateTicketData:any = {}
  if(EDITMODE){
    updateTicketData = await getTicektById(params.id);
    updateTicketData = updateTicketData.res
    console.log(updateTicketData)
  }else{
    updateTicketData = {
      _id:"new"
    }
  }
  return (
    <TicketForm  ticket = {updateTicketData}/>
  )
}

export default TicketPage