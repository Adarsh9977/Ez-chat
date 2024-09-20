"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./signInCard";
import { SignUpCard } from "./signUpCard";

export const AuthScreen = ()=>{
    const [state, setState]= useState<SignInFlow>("signIn");

    return <div className="h-full flex items-center justify-center bg-[#4c6567]">
        <div className="md:h-auto md:w-[420px] flex justify-center items-center">
            {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
        </div>
    </div>
}
