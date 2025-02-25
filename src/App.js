import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;