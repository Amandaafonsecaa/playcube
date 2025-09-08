import React from "react";

interface ButtonProps{
    text: string;
}

export default function Button(
    {
        text
    }: ButtonProps
){
    return(
        <div>
             <button className="bg-brand-blue text-white py-1 px-4 rounded-full ml-4 text-sm">
                {text}
            </button>
        </div>
    );
}