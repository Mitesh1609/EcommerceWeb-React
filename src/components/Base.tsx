
import React from "react";
import CustomNavbar from "./CustomNavbar";

export interface Props {
    children:React.ReactElement;
}

function Base(props:Props){
    return(
        <>
            <CustomNavbar/>
            {props.children}
        </>
    );
}
export default Base;