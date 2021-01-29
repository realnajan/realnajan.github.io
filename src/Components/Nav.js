import React from 'react'
import NavLink from './NavLink'

export default function Nav(props) {
    

    return (
        <ul class="z-50 relative divide-solid divide-y-4 divide-black dark:divide-gray-100">
            <NavLink href="#about" text="about"></NavLink>
            <NavLink href="#projects" text="projects"></NavLink>
            <NavLink href="#social" text="social"></NavLink>
        </ul>
    )
}
