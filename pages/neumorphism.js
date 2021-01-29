import {useEffect} from "react"

import Head from 'next/head';
import Header from "../comps-neumorphism/header/Header";
import Content from "../comps-neumorphism/content/Content"
import Footer from '../comps-neumorphism/footer/Footer';


import 'ui-neumorphism/dist/index.css';
import { overrideThemeVariables } from 'ui-neumorphism';


const NeumorphismPage = () => {

    useEffect(()=>{
        overrideThemeVariables({

            '--light-bg': '#E4EBF5',
            '--light-bg-dark-shadow': '#bec8e4',
            '--light-bg-light-shadow': '#fff',

            '--dark-bg': '#292E35',
            '--dark-bg-dark-shadow': '#21252a',
            '--dark-bg-light-shadow': '#313740',

            '--primary': '#0101FF',
            '--primary-dark': '#c7befd',
            '--primary-light': '#4526f9'
            
        })
    })

    return (
        <>
            <Head>
                <title>Neumorphism</title>
            </Head>
            <Header/>
            <Content/>
            <Footer/>
        </>
    );
}
 
export default NeumorphismPage;