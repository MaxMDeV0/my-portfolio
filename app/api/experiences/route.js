
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server"


export async function GET(){
    try {
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        
        const collection = db.collection('experiences');
        const experiences = await collection.find({}).toArray();
        
        
        return NextResponse.json({
            experiences:experiences
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error fetching experiences'
        });
    }
}


