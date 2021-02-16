import ContactForm from './ContactForm';
import style from './contact.module.scss';
const Contact = () => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Contact</h1>

			<ContactForm />
		</div>
	);
};

export default Contact;
