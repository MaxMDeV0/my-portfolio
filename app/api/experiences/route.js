
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

export async function POST(request){
    try {
        
        const client = await clientPromise;
        const body = await request.json();
        const {title, organization, desc} = body;
        const db = client.db('my_portfolio'); 
    
        if (title == "" || desc == "" || organization == "" ) {
            return NextResponse.json({ message: 'missing fields' });
        }
    
        const result = await db.collection('experiences').insertOne({
            title,
            organization,
            desc,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return NextResponse.json({ message: 'Experience added' });

    }catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'server error', error: error.message });
    }
}