import {auth, signIn, signOut} from "@/auth"

export default async function User() {
    const session = await auth()
    
    if (!session) {
        return <form
            action={async () => {
                "use server"
                await signIn()
            }}
        >
            <button type="submit">Sign in</button>
        </form>
    }

    return <>
        Hello {session.user.name}
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    </>
}
