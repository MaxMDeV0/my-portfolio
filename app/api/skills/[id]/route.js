
import clientPromise from "@/lib/mongodb"
import { ObjectId } from 'mongodb';
import { NextResponse } from "next/server"


export async function PUT(request, context ){
    try {
        const { id } = context.params;
        const body = await request.json();
        const {title, organization, desc} = body;

        if (title == "" || desc == "" || organization == "" ) {
            return NextResponse.json({ message: 'empty fields given' });
        }

        const client = await clientPromise;
        const db = client.db('my_portfolio');
        const objectId = ObjectId.createFromHexString(id);
        
        const collection = db.collection('skills');
        const skill = await collection.findOne({_id: objectId})
        console.log({...skill, ...body, updatedAt: new Date()})
        const updatedskill = await collection.updateOne({_id: objectId},{$set:{...body, updatedAt: new Date()}})
        
        
        return NextResponse.json({ message: 'skill updated' });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error updating skill'
        });
    }
}


export async function DELETE(request, context){
    try {
        const { id } = context.params;
    
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        
        const collection = db.collection('skills');
        const skill = await collection.deleteOne({_id: ObjectId.createFromHexString(id)})
        
        
        return NextResponse.json({ message: 'skill deleted' });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error deleting skill'
        });
    }
}

export async function GET(request, context){
    try {
        const { id } = context.params;
    
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        
        const collection = db.collection('skills');
        const skill = await collection.findOne({_id: ObjectId.createFromHexString(id)})
        
        
        return NextResponse.json({
            skill:skill
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error fetching skills'
        });
    }
}
