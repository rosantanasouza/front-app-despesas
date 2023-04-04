import * as React from "react";
import Header from "./Header";


interface MenuProps {
    children: React.ReactNode
}

export default function Layout(props: MenuProps) {
    return(
        <>
            <Header />
            {props.children}
        </>
    )
}