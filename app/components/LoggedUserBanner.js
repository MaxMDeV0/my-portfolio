
import { auth  } from "@/auth"
import { signOutHandler } from "@components/signOutHandler"

export default async function LoggedUserBanner() {
    const session = await auth()
   
    if (!session) return null
   
    return (
        <div className="log-bar" >
            <p>You can edit this website !</p>
            <form action={signOutHandler}>
                <button type="submit">Sign Out</button>

            </form>
        </div>
    )
}
