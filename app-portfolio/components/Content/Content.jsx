import React from 'react';
import Projects from "./Projects";
import About from "./About";
import MiscContext from '../MiscContext'

export default function Content({projects})  {
    
const {theme} = React.useContext(MiscContext)    
    return (
        <main className={theme? "main-dark": "main-light"} >
            <About/>
            <Projects projects={projects}/>
        </main>
    );
};

