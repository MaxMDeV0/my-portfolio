import clientPromise from "../../../lib/mongodb.js"
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
