
import { NextResponse } from 'next/server'
import { auth } from "@/auth";

export async function middleware(request) {
    return NextResponse.next()

    try{
        const session = await auth()
        
        if(!session && request.method != "GET" ) {
            return NextResponse.json("Unauthorized",{status :401})
        }
        return NextResponse.next()

    }catch(err){
        if(request.method == "GET" ) {
            return NextResponse.next()  
        } else{
            return NextResponse.json("Authentication failed, reset your session and retry",{status :500})
        }
    }
}

export const config = {
    matcher: ['/((?!api/auth|api/email).*)'],
};
      