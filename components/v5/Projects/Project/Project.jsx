import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import style from './project.module.scss';
const Project = (props) => {
	const {
		id,
		src,
		link,
		sourceLink,
		title,
		description,
		stack,
	} = props.project;
	const { currentSlide, setCurrentSlide, nextSlide, prevSlide } = props;

	const bgImage = {
		'--backgroundImage': `url(/assets/${src})`,
	};

	return (
		<div
			id={`${currentSlide}${prevSlide}${nextSlide}`}
			className={`v5-card-container`}
			onClick={() => setCurrentSlide(id)}
		>
			<div className='v5-card'>
				<div className='card-content' style={bgImage}>
					<div className='info'>
						<h1 className='title light-h-e'>{title}</h1>
						<p className='v4-description '>{description}</p>
						<p className='v4-stack'>{stack}</p>
						<div className='project-links v4-links'>
							<a
								href={link}
								target='_blank'
								rel='noopener noreferrer'
								id='demo'
							>
								<FontAwesomeIcon icon={faLaptopCode} /> &nbsp; Demo
							</a>
							<a
								href={sourceLink}
								target='_blank'
								rel='noopener noreferrer'
								id='source'
							>
								<FontAwesomeIcon icon={faGithubSquare} />
								&nbsp; Source
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
