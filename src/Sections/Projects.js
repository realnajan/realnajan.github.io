import React, { useContext } from 'react'
import { AccentContext } from '../App'
import Project from '../Components/Project'
import bitcoinweek from '../Media/bitcoinweek.png'
import moneypocket from '../Media/moneypocket.png'
import robobot from '../Media/robo-bot.png'

export default function Projects(props) {

    const accent = React.useContext(AccentContext)

    return (
        <div id="projects" class="inset bg-gray-100 dark:bg-dracula-light w-full py-24 flex justify-center items-center">
            <div class="p-6 w-4/5 md:w-2/3 flex justify-between items-center flex-wrap">
                <Project img={bitcoinweek} href="https://bitcoinweek.de" title="Bitcoinweek.de"></Project>
                <Project img={moneypocket} href="https://github.com/realnajan/moneypocket" title="Moneypocket"></Project>
                <Project img={robobot} href="https://twitter.com/unrealnajan" title="RoboBot"></Project>
            </div>
        </div>
    )
}
