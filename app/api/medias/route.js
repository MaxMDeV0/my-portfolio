import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server"
import { put } from '@vercel/blob';

export async function GET() {
    try{
        const client = await clientPromise;
        const db = client.db('my_portfolio'); 
        const collection = db.collection('medias');
        const medias = await collection.find({}).toArray();

        return NextResponse.json(medias,{status:200})

    } catch(err) {
        return NextResponse.json("Error fetching medias",{status:500})
    }
}

export async function POST(request) {
    try{
        const data = await request.formData()
        const file = data.get('file')
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const client = await clientPromise;
        const db = client.db('my_portfolio'); 
        const collection = db.collection('medias');
        const time= new Date().getTime()
        const path = 'uploads/' + time + '-' + file.name;
        const { url } = await put(path, buffer, { access : "public" })
        const createMedia = await collection.insertOne({
            path: url,
            createdAt: new Date(),
        });
        console.log('Data appended successfully');
        const medias = await collection.find({}).toArray();

        return NextResponse.json(medias,{status:200})
    }catch(err){
        console.log(err)
        return NextResponse.json("Error",{status:500})
    }
}