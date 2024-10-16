
import { NextResponse } from 'next/server'
import { auth } from "@/auth";

export async function middleware(request) {
    const url = request.nextUrl.pathname;

    try{
        const session = await auth()
        if(!session && request.method != "GET" ) {
            return NextResponse.json("Unauthorized",{status :401})
        }else if(url.startsWith('/api/user')) {
            const authHeader = request.headers.get('authorization');
            if (authHeader === `Bearer ${process.env.NEXT_PUBLIC_INTERNAL_API_KEY}`) {
                return NextResponse.next(); // Allow access
            }
            return NextResponse.json("Unauthorized",{status :401})
        }
        return NextResponse.next()

    }catch(err){
        if(request.method == "GET" && !url.startsWith('/api/user') ) {
            return NextResponse.next()  
        } else{
            return NextResponse.json("Authentication failed, reset your session and retry",{status :500})
        }
    }
}

export const config = {
    matcher: ['/((?!api/auth|api/email).*)'],
};
      