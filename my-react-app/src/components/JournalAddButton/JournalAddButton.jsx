import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

const JournalAddButton = ({clearForm}) => {
	return (
		<CardButton onClick={clearForm} className="journal-add">
			<img src="/icon_plus.svg" />
            Новое воспоминание
		</CardButton>
	);
};

export default JournalAddButton;