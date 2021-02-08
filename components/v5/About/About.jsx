import style from './about.module.scss';

const About = ({ aboutRef }) => {
	return (
		<>
			<div className={style.title_bg}>
				<h1 className={style.title}>About</h1>
			</div>

			<div ref={aboutRef} className={style.container}>
				<div className={style.about_content}>
					<div className={style.one}></div>
					<div className={style.two}></div>
					<div className={style.three}></div>
				</div>
			</div>
		</>
	);
};

export default About;
