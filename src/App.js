import Header from './Sections/Header';
import About from './Sections/About'
import Projects from './Sections/Projects'
import Social from './Sections/Social'
import './App.css';
import React, { useState } from 'react';
import ColorSelector from './Components/ColorSelector'

export const AccentContext = React.createContext('dracula-purple')

function App() {

  var colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'purple', 'pink']
  var randomcolor = colors[Math.floor(Math.random() * colors.length)];

  const [accent, setAccent] = useState('dracula-' + randomcolor)

  return (
    <AccentContext.Provider value={accent}>
        <div class="overflow-x-hidden dark">
          <ColorSelector setAccent={setAccent}></ColorSelector>
          <Header></Header>
          <About></About>
          <Projects></Projects>
          <Social></Social>
        </div>
    </AccentContext.Provider>
  );
}

export default App;
