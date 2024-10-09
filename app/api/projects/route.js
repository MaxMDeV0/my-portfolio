import clientPromise from "../../../lib/mongodb.js"
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
