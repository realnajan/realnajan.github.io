import React from 'react'
import SocialMedia from '../Components/SocialMedia'

export default function Social(props) {


    return (
        <div id="social" class="shadow-md bg-white dark:bg-dracula-dark flex justify-center items-center w-screen py-24">
            <div class="flex w-2/3 justify-center items-center flex-wrap">
                <SocialMedia icon="🐦" name="@realnajan" href="https://twitter.com/realnajan"></SocialMedia>
                <SocialMedia icon="📷" name="@_najan" href="https://instagram.com/_najan"></SocialMedia>
                <SocialMedia icon="🎮" name="najan#7312" href="https://discord.gg/FZxpKkbqaS"></SocialMedia>
            </div>
        </div>
    )
}
