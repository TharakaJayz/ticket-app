import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgessDisplay from './ProgessDisplay'
import StatusDisplay from './StatusDisplay'
import { TicketInterface } from './TicketForm';

type Props = {
    id:number,
    key:number,
    ticket:any
}

const TicketCard = (props: Props) => {

    const formatTimeStaped = (timestamp:any) =>{
        const options  = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }

        const date = new Date(timestamp);
        // const formattedDate = date.toLocaleString("en-US", options);
    
        // return formattedDate;

    }
    return (
        <div key={props.key} className=' flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
            <div className='flex mb-3'>

                <PriorityDisplay priority = {props.ticket.priority} />
                <div className='ml-auto'>

                    <DeleteBlock />
                </div>
            </div>
            <h4>{props.ticket.title}</h4>
            <hr className='h-px border-0 bg-page mb-2' />
            <p className='whitespace-pre-wrap'>

                {props.ticket.description}
            </p>
            <div className='flex-grow'></div>
            <div className='flex mt-2 '>
            <div className='flex flex-col'>
                <p className='text-xs my-1'>{props.ticket.createdAt}</p>
            <ProgessDisplay progess = {props.ticket.progress}/>
            </div>

            <div className='ml-auto flex items-end'>

            < StatusDisplay status = {props.ticket.status} />
            </div>
            </div>
        </div>
    )
}

export default TicketCard