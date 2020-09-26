import React from 'react';
import HeaderBox from './HeaderBox';
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";


export default function Content({projects})  {
    

    
    return (
        <main>
            <HeaderBox/>
            <About/>
            <Projects projects={projects}/>
            <Contact/>
        </main>
    );
};

