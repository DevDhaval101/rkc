'use client'

import { signOut } from "next-auth/react"

export default function SignoutBtn(){
    return (
        <button onClick={() => signOut()}>Sign Out</button>
    )
}