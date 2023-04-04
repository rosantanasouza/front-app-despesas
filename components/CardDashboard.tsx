import * as React from "react";


interface MenuProps {
    children: React.ReactNode
    bgColor: string
}

export default function CardDashboard(props: MenuProps) {
    return(
        <div className={`flex justify-center ${props.bgColor} w-96 h-60 font-mono border-4 border-black rounded-xl shadow-2xl hover:border-white`}>
            <h1>
                {props.children}
            </h1>
        </div>
    )
}