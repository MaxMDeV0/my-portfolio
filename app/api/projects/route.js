import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server"


export async function GET(){
    try {
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        
        const collection = db.collection('projects');
        const projects = await collection.find({}).toArray();
        
        
        return NextResponse.json({
            projects:projects
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error fetching projects'
        });
    }
}

export async function POST(request){
    try {
        
        const client = await clientPromise;
        const body = await request.json();
        const {title, path, desc, projectUrl} = body;
        const db = client.db('my_portfolio'); 
    
        if (title == "" || path == "" || desc == "") {
            return NextResponse.json({ message: 'missing fields' });
        }
        const collection = db.collection('projects');
        const result = await collection.insertOne({
            title,
            path,
			desc,
			projectUrl,
            isVisible: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const projects = await collection.find({}).toArray();
        return NextResponse.json(projects);

    }catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'server error', error: error.message });
    }
}