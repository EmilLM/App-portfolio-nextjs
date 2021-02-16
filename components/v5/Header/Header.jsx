import style from './header.module.scss';
import Link from 'next/link';
import { GiArrowDunk } from 'react-icons/gi';
import { VscCompareChanges } from 'react-icons/vsc';

const Header = ({ scrollToRef }) => {
	return (
		<>
			<div className={style.container}>
				<h1 className={style.title}>Portfolio</h1>

				<div className={style.content}>
					<h2>Glassmorphism</h2>
					<p>- Work in progress -</p>
					<div className={style.header_buttons}>
						<button onClick={scrollToRef}>
							<GiArrowDunk /> &nbsp; Explore
						</button>
						<Link href='/'>
							<a>
								<VscCompareChanges /> &nbsp; Change style
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
