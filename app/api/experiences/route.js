
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
        const {title, organization, desc, path, startedAt, endedAt} = body;
        const db = client.db('my_portfolio'); 
    
        if ( path == "" || title == "" || desc == "" || startedAt == "" || endedAt == "" || organization == "" || path == undefined || title == undefined || desc == undefined || startedAt == undefined || endedAt == undefined || organization == undefined) {
            return NextResponse.json({ message: 'missing fields' });
        }

        const collection = db.collection('experiences');
        const result = await collection.insertOne({
            ...body,
            isVisible: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const experiences = await collection.find({}).toArray();
        return NextResponse.json(experiences);

    }catch (error) {
        return NextResponse.json({ message: 'server error', error: error.message });
    }
}