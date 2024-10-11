
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server"


export async function GET(){
    try {
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        
        const collection = db.collection('skills');
        const skills = await collection.find({}).toArray();
        
        
        return NextResponse.json({
            skills:skills
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error fetching skills'
        });
    }
}

export async function POST(request){
    try {
        
        const client = await clientPromise;
        const body = await request.json();
        const {title, path} = body;
        const db = client.db('my_portfolio'); 
    
        if (title == "" || path == "") {
            return NextResponse.json({ message: 'missing fields' });
        }
        const collection = db.collection('skills');
        const result = await collection.insertOne({
            title,
            path,
            isVisible: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const skills = await collection.find({}).toArray();
        return NextResponse.json(skills);

    }catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'server error', error: error.message });
    }
}