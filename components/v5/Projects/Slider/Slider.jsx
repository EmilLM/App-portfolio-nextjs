import Project from '../Project/Project';
import projectsData from '../../../../projectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import style from './slider.module.scss'
import { useState } from 'react';

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const sliderLength = projectsData.length;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
	};
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
	};

	return (
		<div className={style.v5_slider}>
			<div className={style.slider_wrapper}>
				{projectsData.map((project) => {
					return (
						<Project
							project={project}
							key={project.id}
							currentSlide={currentSlide === project.id ? 'current' : ''}
							nextSlide={
								project.id === (currentSlide + 1) % sliderLength
									? 'nextSlide'
									: ''
							}
							prevSlide={
								project.id === (currentSlide + sliderLength - 1) % sliderLength
									? 'prevSlide'
									: ''
							}
							setCurrentSlide={setCurrentSlide}
						/>
					);
				})}
			</div>

			<button className={style.prev_slide} onClick={prevSlide}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<button className={style.next_slide} onClick={nextSlide}>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	);
};

export default Slider;
