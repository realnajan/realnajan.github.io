import React, { useContext } from 'react'
import { AccentContext } from '../App'

export default function AboutItem(props) {
    
    const accent = React.useContext(AccentContext)

    return (
        <div class="my-4 flex flex-col justify-center items-center">
            <h1 class={`text-9xl text-${accent} dark:text-${accent} font-bold poppins`}>{props.bigText}</h1>
            <p class="poppins text-xl text-black dark:text-white">{props.smallText}</p>
        </div>
    )
}
