
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
               
        const updatedExperience = await collection.updateOne({_id: objectId},{$set:{...body, updatedAt: new Date()}})

        const experiences = await collection.find({}).toArray();
        return NextResponse.json(experiences);
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
        const deletedExperience = await collection.deleteOne({_id: ObjectId.createFromHexString(id)})
        
        const experiences = await collection.find({}).toArray();
        return NextResponse.json(experiences);
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
