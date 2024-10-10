
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
        
        const collection = db.collection('experiences');
        const experience = await collection.findOne({_id: objectId})
        console.log({...experience, ...body, updatedAt: new Date()})
        const updatedExperience = await collection.updateOne({_id: objectId},{$set:{...body, updatedAt: new Date()}})
        
        
        return NextResponse.json({ message: 'Experience updated' });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error updating experience'
        });
    }
}


export async function DELETE(request, context){
    try {
        const { id } = context.params;
    
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        
        const collection = db.collection('experiences');
        const experience = await collection.deleteOne({_id: ObjectId.createFromHexString(id)})
        
        
        return NextResponse.json({ message: 'Experience deleted' });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error deleting experience'
        });
    }
}

export async function GET(request, context){
    try {
        const { id } = context.params;
    
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        
        const collection = db.collection('experiences');
        const experience = await collection.findOne({_id: ObjectId.createFromHexString(id)})
        
        
        return NextResponse.json({
            experience:experience
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: 'Error fetching experiences'
        });
    }
}
