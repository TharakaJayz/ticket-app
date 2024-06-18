import Ticket from "@/app/(models)/tickets";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    try {
        
        const res = await Ticket.findOne({_id:params.id});
       
        return NextResponse.json({res},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500})
    }
}


export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){

    try {
        const {id} = params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message:"Ticket Deleted"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500})
    }
}

export async function PUT(req:NextRequest,{params}:{params:{id:string}}) {
    try {
        const {id} = params;
        const body = await req.json();
        const ticket = body.formData;
        const updatedTicket = await Ticket.findByIdAndUpdate(id,{...ticket});
        
        return NextResponse.json({message:"Ticket Updated"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500})
    }
}

