import './CardButton.css';

const CardButton = ({children, className}) => {
	const cl = 'card-button' + (className ? ' ' + className : '');
	return (
		<div>
			<button className={cl}>{children}</button>
		</div>
	);
};

export default CardButton;