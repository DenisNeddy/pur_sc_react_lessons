import './CardButton.css';

const CardButton = ({children, className, ...props}) => {
	const cl = 'card-button' + (className ? ' ' + className : '');
	return (
		<div>
			<button {...props} className={cl}>{children}</button>
		</div>
	);
};

export default CardButton;