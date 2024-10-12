import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const body = await request.json()
        const { content, email, name, website } = body;
        if( email == "" || content == "" || name == "" || !email || !content || !name ) {
            return NextResponse.json("re",{status:400, error:"missing fields"})
        }
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USER, 
                pass: process.env.MAIL_PWD, 
            },
        });
    
        const mailOptions = {
            from: process.env.MAIL_USER, 
            to: "merter.maxence@gmail.com", 
            subject: "Contact portfolio from " + name, 
            text: "website : " + website + "\nemail : " + email + "\nmessage : " + content, 
        };
        console.log(mailOptions)
        await transporter.sendMail(mailOptions);
        return NextResponse.json("Success", {status:200})

    } catch(err) {
        console.log(err)
        return NextResponse.json('Error', {status:500})
    }
}