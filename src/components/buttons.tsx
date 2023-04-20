import { SignInButton, SignOutButton, SignUpButton, useUser } from "@clerk/nextjs";


export const SignInButtonStyled = () => {

    return (
        <SignInButton mode="modal" >
            <button className="bg-black/25 hover:bg-black/60 m-1 text-black hover:text-white font-bold py-2 px-4 rounded-full shadow-outline hover:shadow-none transition-all duration-200 border-black border-1 translate-x-reverse-1 translate-y-reverse-1 hover:translate-x-0">
                Sign In
            </button>
        </SignInButton>
    )
}
export const SignUpButtonStyled = () => {

    return (
        <SignUpButton mode="modal" >
            <button className=" bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-outline m-1 hover:shadow-none transition-all duration-200 border-black border-1 translate-x-reverse-1 translate-y-reverse-1 hover:translate-x-0">
                Sign Up
            </button>
        </SignUpButton>
    )
}
export const SignOutButtonStyled = () => {

    return (
        <SignOutButton>
            <button className="bg-blue-500 m-1 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full shadow-outline hover:shadow-none transition-all duration-200 border-black border-1 translate-x-reverse-1 translate-y-reverse-1 hover:translate-x-0">
                Sign Out
            </button>
        </SignOutButton>
    )
}