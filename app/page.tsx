import Image from "next/image";
import TicketCard from "./(componets)/TicketCard";
import Ticket from './(models)/tickets';
import { TicketInterface } from "./(componets)/TicketForm";


const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-cache"
    });
    // console.log("response =========>>",res.json())

    return res.json()

  } catch (error) {
    console.log("Failed to get tickets", error)
  }
}

export default async function Home() {

  const { allTickets }: { allTickets: any } = await getTickets();
 
  const uniqueCategories = Array.from(new Set(allTickets?.map(({ category }:{category:any}) => category) ?? []));




  return (
    <div className="p-5">
      <div>

        {allTickets && uniqueCategories?.map((uniqueCategory: any, index) => {
          return <div key={index} className="mb-4">
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {allTickets.filter((ticket:any) => ticket.category === uniqueCategory).map((filterdTicket:any,indexTicket:any)=>(
                <TicketCard id = {indexTicket} keyTo={indexTicket} ticket = {filterdTicket}/>
              ))}
            </div>
          </div>
        })}


      </div>
    </div>
  );
}
