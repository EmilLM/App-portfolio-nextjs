import React from 'react';
import Projects from "./Projects";
import About from "./About";


export default function Content({projects, animate, setAnimate})  {
    

    
    return (
        <main>
            <About animate={animate}/>
            <Projects projects={projects}  animate={animate}/>
        </main>
    );
};

