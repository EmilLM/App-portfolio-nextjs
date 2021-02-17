import ContactForm from './ContactForm';
import style from './contact.module.scss';
import ContactLinks from './ContactLinks';

const Contact = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<div className={style.container}>
				<h1 className={style.title}>Contact</h1>
				<div className={style.card_contact}>
					<ContactForm />
					<ContactLinks />
				</div>
			</div>
			<div className={style.footer}>
				<p>
					Copyleft <span>&copy;</span> {year}
				</p>
			</div>
		</>
	);
};

export default Contact;
