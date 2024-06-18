"use client"
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  id:string | number
}

const DeleteBlock = (props: Props) => {

    const router = useRouter();
  const deleteTicket = async() =>{
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${props.id}`,{
        method:"DELETE"
      })

      if(res.ok){
        router.refresh();
      }
      
    } catch (error) {
      
    }
  }
  return (
    <FontAwesomeIcon icon={faX}  className='text-red-400 hover:cursor-pointer hover:text-red-200' onClick={deleteTicket} />
  )
}

export default DeleteBlock