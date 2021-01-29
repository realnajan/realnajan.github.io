import React, { useContext } from 'react'
import { AccentContext } from '../App'
import Nav from '../Components/Nav'
import jan from '../Media/jan.png'

export default function Header(props) {

    console.log('accent:')

    const accent = React.useContext(AccentContext)

    console.log(accent)

    return (
        <div class={`bg-white dark:bg-gray-900 w-screen h-screen`}>
            <span class={`svgbg absolute z-0 top-0 left-0 w-full h-full bg-${accent}`}></span>
            <div class="flex flex-col md:flex-row w-full h-full justify-center items-center relative bottom-12">
                <img class="w-48 mr-12 mt-12 dark:invert" src={jan}></img>
                <Nav></Nav>
            </div>
        </div>
    )
}
