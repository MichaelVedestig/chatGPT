"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#11A37F] flex flex-col h-screen 
    items-center justify-center text-center">
        <Image 
        src="https:links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
        />
        <button className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn()}>
            Sign In
        </button>
    </div>
  )
}

export default Login