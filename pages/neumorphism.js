import Head from 'next/head';
import Header from "../comps-neumorphism/header/Header.jsx";
import Content from "../comps-neumorphism/content/Context.jsx"
import 'ui-neumorphism/dist/index.css';


const NeumorphismPage = () => {
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