import * as React from "react";


interface MenuProps {
    children: React.ReactNode
}

export default function Title(props: MenuProps) {
    return(
        <>
            <h1 className="py-5 text-center font-mono font-bold text-3xl">
                {props.children}
            </h1>
        </>
    )
}