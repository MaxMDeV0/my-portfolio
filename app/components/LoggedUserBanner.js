
import { auth  } from "@/auth"
import { signOutHandler } from "@components/signOutHandler"

export default async function LoggedUserBanner() {
    const session = await auth()
   
    if (!session) return null
   
    return (
        <div className="fixed w-full h-8 bg-black text-white leading-8 flex flex-row space-x-4 pl-8 top-0 z-20" >
            <p>You can edit this website !</p>
            <form action={signOutHandler}>
                <button type="submit">Sign Out</button>

            </form>
        </div>
    )
}
