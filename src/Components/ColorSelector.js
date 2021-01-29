import React from 'react'
import Color from './Color'

export default function Colorselector(props) {


    return (
        <div class="colorselector w-full md:w-auto justify-around md:justify-start dark:bg-dracula-dark rounded-r-lg py-3 shadow-lg bg-white p-2 fixed left-0 md:flex-col flex z-50 md:verticalCenter">
            <Color setAccent={props.setAccent} color="dracula-red"></Color>
            <Color setAccent={props.setAccent} color="dracula-orange"></Color>
            <Color setAccent={props.setAccent} color="dracula-yellow"></Color>
            <Color setAccent={props.setAccent} color="dracula-green"></Color>
            <Color setAccent={props.setAccent} color="dracula-cyan"></Color>
            <Color setAccent={props.setAccent} color="dracula-purple"></Color>
            <Color setAccent={props.setAccent} color="dracula-pink"></Color>
        </div>
    )
}
