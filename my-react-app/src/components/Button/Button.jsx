import './Button.css';
import { useState } from 'react';

const Button = () => {
	const [text, setText] = useState('Сохранить');
	const clicked = () => {
		setText('Закрыть');
		// setText(v => v + '!');
		console.log(text);
	};
	return (
		<>
			<button onClick={clicked} className="button accent">{text}</button>
		</>
	);
};

export default Button;