import style from './contact.module.scss';

const Contact = () => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Contact</h1>
			<div className={style.contact_form}></div>
		</div>
	);
};

export default Contact;
