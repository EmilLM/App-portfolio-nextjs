import style from './about.module.scss';
import { FaDownload } from 'react-icons/fa';

const About = ({ aboutRef }) => {
	return (
		<>
			<div className={style.title_bg}>
				<h1 className={style.title}>About</h1>
			</div>

			<div ref={aboutRef} className={style.container}>
				<div className={style.about_content}>
					{/* Objective */}
					<div className={style.about_objective}>
						<h5>Objective</h5>
						<p>
							Striving to write <span>clean</span>, <span>scalable code</span>{' '}
							using best practices. <span>Efficient </span>and
							<span> resourceful</span> in reaching my objectives, in bringing
							code to life in <span>amazing designs</span>.
						</p>
					</div>

					{/* Studies */}
					<div className={style.about_studies}>
						<h5>Studies</h5>
						<p>
							Studied front-end programming at{' '}
							<span>
								<a href='https://www.coderslab.ro/'>Coder's Lab</a>
							</span>
							. Learned the <span>MERN stack</span> and currently studying
							technologies like GraphQL, Jest, Docker and React Native.
						</p>
					</div>
					{/* Main info + CV */}
					<div className={style.about_info}>
						<div>
							<p>
								Name :<span>'Luchian Emil Moise'</span>
							</p>
							<p>
								Specialization :<span> 'Full stack web dev',</span>
							</p>
							<p>
								Stack :<span> 'MongoDB-Express-React-Node',</span>
							</p>
							<p>
								Location :<span> 'Bucharest, Romania'</span>
							</p>
						</div>
						<a
							className={style.btn_download}
							href='/assets/CV_Luchian_Emil.pdf'
							download='CV_Luchian_Emil.pdf'
						>
							<FaDownload />
							Download CV
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
