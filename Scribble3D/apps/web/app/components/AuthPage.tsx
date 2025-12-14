"use client"
export default function AuthPage({isSignin}:{
        isSignin:boolean
}){
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-6 bg-black text-white 
         rounded">
            <div className="py-25"></div>
            <input type="text" placeholder="email"></input>
            <br ></br>
            <input type="text" placeholder="password"></input>
            <br></br>
        
            <button onClick={() => {}}>{isSignin? "Sign in":"Sign up" }</button>
        </div>
    </div>
}