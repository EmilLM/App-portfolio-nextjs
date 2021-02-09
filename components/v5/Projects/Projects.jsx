import style from './projects.module.scss';
import Slider from './Slider/Slider.jsx';
const Projects = () => {
	return (
		<>
			<div className={style.title_bg}>
				<h1 className={style.title}>Projects</h1>
			</div>
			<div className={style.container}>
				<Slider />
			</div>
		</>
	);
};

export default Projects;
