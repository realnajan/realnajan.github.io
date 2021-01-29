import React from 'react'

export default function Color(props) {
    

    return (
        <a onClick={() => props.setAccent(props.color)} class={`cursor-pointer w-6 h-6 bg-${props.color} rounded-full my-1`}>
            
        </a>
    )
}
