import React from 'react';
import HeaderBox from './HeaderBox';
import Projects from "./Projects";
import FooterBox from "./FooterBox";
import About from "./About";


export default function Content()  {
    

    
    return (
        <main>
            <HeaderBox/>
            <About/>
            <Projects/>
            <FooterBox/>
        </main>
    );
};

