import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server"


export async function GET(){
    try {
        const client = await clientPromise;
        const db = client.db('my_portfolio');
        const collection = db.collection('users');
        const user = await collection.findOne({username: "admin"})
        console.log(user)
        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({
            error: 'Error fetching user'
        });
    }
}
