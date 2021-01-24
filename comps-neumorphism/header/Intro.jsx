import Logo from "../../components/Logo"


const Intro = () => {
    return (
        <div className="header-intro-container">
            <div className="logo-container">
                <Logo clsName={"v4-logo"}/>
            </div>
            <div className="title-container">
                <h1 className="header-text focus-in">Apps <br/> Portfolio</h1>
            </div>
            <div className="img-container">
                <img alt="app-build-img" src="/assets/header-img.svg" />
            </div>
        </div>
    );
}
 
export default Intro;

{/* <div className="header-inner">
    <div className="text-container">
        <h1 className={`header-text focus-in`}>APP PORTFOLIO </h1>
        <Logo/>
    </div>
    <img alt="app-build-img" src="/assets/header-img.svg" />
</div>   */}