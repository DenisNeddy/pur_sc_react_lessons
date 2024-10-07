import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectyUser';

const Header = ({changedUser}) => {
	const changeUser = (e) => {
		changeUser(e.target.value);
		changedUser(e.target.value);

	};


	return (
		<div className="header">
			<img className={styles.logo} src="/logo.svg" alt="Логотип" />
			<SelectUser changeUser={changeUser} />
		
		</div>
	);
};

export default Header;