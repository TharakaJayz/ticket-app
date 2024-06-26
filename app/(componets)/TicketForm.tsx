"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
type Props = {
    ticket: any
}

export interface TicketInterface {
    title: string,
    description: string,
    category: string,
    priority: number,
    progress: number,
    status: string,
    active: Boolean,

}

const TicketForm = (props: Props) => {
    const EDITMODE = props.ticket._id === "new" ? false : true
    const router = useRouter();

    const handleChange = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;


        setFormData((prevState) => ({
            ...prevState, [name]: value
        }))
    }

    const hanleSubmit = async (e: any) => {
        e.preventDefault()
        if (EDITMODE) {
            const res = await fetch(`/api/Tickets/${props.ticket._id}`, {
                method: "PUT",
                body: JSON.stringify({ formData })
            })

            if (!res.ok) {
                throw new Error("Faild to create Ticket")
            }

        } else {

            const res = await fetch("/api/Tickets", {
                method: "POST",
                body: JSON.stringify({ formData })
            })

            if (!res.ok) {
                throw new Error("Faild to create Ticket")
            }
        }

        router.refresh();
        router.push("/");
    }

    const startingTicketData = {
        title: "",
        description: "",
        category: "Hardware Problem",
        priority: 1,
        progress: 0,
        status: "not started",
        active: false
    };

    if (EDITMODE) {
        startingTicketData["title"] = props.ticket.title
        startingTicketData["description"] = props.ticket.description
        startingTicketData["category"] = props.ticket.category
        startingTicketData["priority"] = props.ticket.priority
        startingTicketData["progress"] = props.ticket.progress
        startingTicketData["status"] = props.ticket.status
        startingTicketData["active"] = props.ticket.active
    }


    const [formData, setFormData] = useState<TicketInterface>(startingTicketData);
    return (
        <div className='flex justify-center '>
            <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={hanleSubmit}>
                <h3> {EDITMODE ? "Update" : "Create"} Your Ticket</h3>
                <label htmlFor="">Title</label>
                <input id='title' name="title" type='text' onChange={handleChange} required={true} value={formData.title} />
                <label htmlFor="">Description</label>
                <textarea id='title' name="description" onChange={handleChange} required={true} value={formData.description} rows={5} />
                <label htmlFor="">Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>
                <label htmlFor="">Priority</label>
                <div>
                    <input id='priority-1' name='priority' type="radio" onChange={handleChange} value={1} checked={formData.priority == 1} />
                    <label htmlFor="">1</label>

                    <input id='priority-2' name='priority' type="radio" onChange={handleChange} value={2} checked={formData.priority == 2} />
                    <label htmlFor="">2</label>

                    <input id='priority-3' name='priority' type="radio" onChange={handleChange} value={3} checked={formData.priority == 3} />
                    <label htmlFor="">3</label>

                    <input id='priority-4' name='priority' type="radio" onChange={handleChange} value={4} checked={formData.priority == 4} />
                    <label htmlFor="">4</label>

                    <input id='priority-5' name='priority' type="radio" onChange={handleChange} value={5} checked={formData.priority == 5} />
                    <label htmlFor="">5</label>
                </div>

                <label htmlFor="">Progress</label>
                <input type="range" name='progress' value={formData.progress} min={0} max={100} onChange={handleChange} />

                <label htmlFor="">Status</label>
                <select name="status" value={formData.category} onChange={handleChange}>
                    <option value="not started">Not Started</option>
                    <option value="started ">Started</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" className='btn ' value={EDITMODE ? "Update  Ticket" : "Create  Ticket"} />
            </form>
        </div>
    )
}

export default TicketForm