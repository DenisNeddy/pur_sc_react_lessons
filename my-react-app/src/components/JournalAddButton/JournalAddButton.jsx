import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

const JournalAddButton = () => {
	return (
		<CardButton className="journal-add">
			<img src="/icon_plus.svg" />
            Новое воспоминание
		</CardButton>
	);
};

export default JournalAddButton;