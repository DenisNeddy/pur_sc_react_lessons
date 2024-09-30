import './Button.css';

const Button = () => {
	const clicked = () => {
		console.log('Привет!');
	};
	return (
		<>
			<button onClick={clicked} className="button accent">Сохранить</button>
		</>
	);
};

export default Button;