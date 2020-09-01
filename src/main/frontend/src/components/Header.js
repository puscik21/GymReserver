import React from 'react';

export default function Header(props) {
    return (
        <header style={headerStyle}>
            <h1>{props.title}</h1>
        </header>
    )
}

const headerStyle = {
    background:'#333333',
    color:'#ffffff',
    textAlign:'center',
    padding:'10px'
}