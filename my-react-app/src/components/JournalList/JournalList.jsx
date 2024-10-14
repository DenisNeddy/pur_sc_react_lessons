import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../contenxt/user.context';

const JournalList = ({items, setItem}) => {
	const {userId} = useContext(UserContext);
	const sortItems = (a, b) => {
		if(a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};
	const filteredItems = useMemo(() => items.filter(el => el.userId === userId).sort(sortItems), [items, userId]);
	if(items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}
	



	return (
		<div className="journal-list"> 
			{
				filteredItems.map(el => (
					<CardButton key={el.id} onClick={() => setItem(el)} > 
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