import React from 'react'

export default function Project(props) {

    return (
        <div class="bg-white dark:bg-dracula-lighter p-4 w-2/3 md:w-1/4 rounded-md shadow min-w-min w-full md:w-auto m-4 flex-1">
            <a href={props.href} target="_blank"><img src={props.img} class="rounded-md mb-4 h-48 object-cover w-full"></img></a>
            <a target="_blank" class="poppins text-black dark:text-white text-xl" href={props.href}>{props.title}</a>
        </div>
    )
}
