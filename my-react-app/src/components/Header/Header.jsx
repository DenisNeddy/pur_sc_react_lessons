import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectyUser';

const Header = () => {
	return (
		<div className="header">
			<img className={styles.logo} src="/logo.svg" alt="Логотип" />
			<SelectUser/>
		
		</div>
	);
};

export default Header;