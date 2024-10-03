import styles from './Header.module.css';

const Header = () => {
	return (
		<div className="header">
			<img className={styles.logo} src="/logo.svg" alt="Логотип" />
		</div>
	);
};

export default Header;