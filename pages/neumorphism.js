import {useState, useEffect} from "react"

import Head from 'next/head';
import Header from "../comps-neumorphism/header/Header.jsx";
import Content from "../comps-neumorphism/content/Content.jsx"

import 'ui-neumorphism/dist/index.css';
import { overrideThemeVariables } from 'ui-neumorphism'


const NeumorphismPage = () => {

    useEffect(()=>{
        overrideThemeVariables({

            '--light-bg': '#E4EBF5',
            '--light-bg-dark-shadow': '#bec8e4',
            '--light-bg-light-shadow': '#fff',

            '--dark-bg': '#292E35',
            '--dark-bg-dark-shadow': '#21252a',
            '--dark-bg-light-shadow': '#313740',

            '--primary': '#8672FB',
            '--primary-dark': '#c7befd',
            '--primary-light': '#4526f9'
        })
    })

    return (
        <>
            <Head>
                <title>Apps Portfolio</title>
            </Head>
            <Header/>
            <Content/>
           
        </>
    );
}
 
export default NeumorphismPage;