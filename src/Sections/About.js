import React from 'react'
import AboutItem from '../Components/AboutItem'

export default function About(props) {
    

    return (
        <div id="about" class="shadow-lg w-screen flex justify-center py-24 bg-white dark:bg-dracula-dark">
            <div class="flex justify-between items-center flex-col md:flex-row md:w-2/3">
                <AboutItem bigText="10" smallText="Grade"></AboutItem>
                <AboutItem bigText="🇩🇪" smallText="Germany"></AboutItem>
                <AboutItem bigText="16" smallText="Years Old"></AboutItem>
            </div>
        </div>
    )
}
