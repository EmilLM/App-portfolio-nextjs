import style from './projects.module.scss';
import Coverflow from './Coverflow/Coverflow';
const Projects = () => {
	return (
		<>
			<div className={style.title_bg}>Projects</div>
			<div className={style.container}>
				<Coverflow />
			</div>
		</>
	);
};

export default Projects;
