import React from 'react'
export default function Header(props){
    return(
        <>
        <div className="header">
            <h1>Top {props.no} Netflix Series</h1>
        </div>

        </>
    )
}