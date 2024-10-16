import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs';

export const runtime =  'nodejs';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username:{
                    label: "Username",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                try {
                    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/user`,{
                        headers:{
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_INTERNAL_API_KEY}`
                        }
                    })
                    if(response.ok){
                        const user = await response.json()
                        const isMatch = await bcrypt.compare(credentials?.password, user.password);
                        if (credentials?.username === user.username && isMatch) {
                            return user
                        } else {
                            return null
                        }
    
                    }
                    throw new Error('error fetching user');
    
                }catch(err){
                    console.log(err)
                }
            }
        })
    ],
    pages:{
        signIn: "/admin",
    },
    secret: process.env.NEXTAUTH_SECRET,

})