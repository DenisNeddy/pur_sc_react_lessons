import './CardButton.css';

const CardButton = ({children}) => {
	return (
		<div>
			<button className="card-button">{children}</button>
		</div>
	);
};

export default CardButton;