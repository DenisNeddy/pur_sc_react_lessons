import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext } from 'react';
import { UserContext } from '../../contenxt/user.context';

const JournalList = ({items}) => {
	const {userId} = useContext(UserContext);
	if(items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}
	
	const sortItems = (a, b) => {
		if(a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};


	return (
		<div className="journal-list"> 
			{
				items.filter(el => el.userId === userId).sort(sortItems).map(el => (
					<CardButton key={el.id}> 
						<JournalItem 
							title={el.title}
							text={el.text}
							date={el.date}
						/>
					</CardButton>
				))
			}
		</div>
	);
};

export default JournalList;