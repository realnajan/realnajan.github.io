import React, { useContext } from 'react'
import { AccentContext } from '../App'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navlink(props) {
    
    const accent = React.useContext(AccentContext)

    return (
        <li class={`font-sans dark:text-${accent} text-black text-4xl text-center px-6 py-2 uppercase poppins font-bold`}>
            <AnchorLink href={props.href}>{props.text}</AnchorLink>
        </li>
    )
}
