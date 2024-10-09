import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
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
                const user = {username:"admin", password: "assword"}

                if (credentials?.username === user.username && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages:{
        signIn: "/admin",
    },
    secret: process.env.NEXTAUTH_SECRET,

});

export { handler as GET, handler as POST};