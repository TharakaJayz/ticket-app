import TicketForm from '@/app/(componets)/TicketForm'
import React from 'react'

type Props = {}

const TicketPage = ({params}:{params:{id:string}}) => {
  return (
    <TicketForm />
  )
}

export default TicketPage