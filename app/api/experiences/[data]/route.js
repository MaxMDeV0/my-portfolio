
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"


export async function POST(request, context ){
    const newHeaders = new Headers(request.headers)
    return NextResponse.json(context);
}

export async function PUT(request, context){
    try {
       
        const client = await clientPromise;
        const db = client.db('my_portfolio'); 
    
        const { data } = context.params;
        const {title, desc, organization} = JSON.parse(data);

    

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
        return NextResponse.json({ message: 'server error', error: error.message });
    }
}

export async function DELETE(){
}
