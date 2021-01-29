import React from 'react'

export default function SocialMedia(props) {


    return (
        <div class="bg-gray-100 dark:bg-dracula-light shadow flex p-4 rounded-md mx-3 my-4">
            <a target="_blank" class="poppins dark:text-white" href={props.href}>
            <span class="mr-3">{props.icon}</span>
            <span class="">{props.name}</span>
            </a>
        </div>
    )
}
