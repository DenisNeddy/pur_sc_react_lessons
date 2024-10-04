
import './App.css';

import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useEffect, useState } from 'react';



// const INITIAL_DATA = [
// 	{   id: 1,
// 		title: 'Подготовка к обновлению курсов',
// 		text: 'Горные походы открывают удивительные природные ланшафты',
// 		date: new Date()
// 	},
// 	{   id: 2,
// 		title: 'Подготовка курсов 2.0',
// 		text: 'что то еще очень важное я стал забывать',
// 		date: new Date()
// 	}
// ];

console.log('муха');

function App() {

	const [ items, setItems] = useState([]);
	useEffect(() => {

		const data = JSON.parse(localStorage.getItem('data'));
		if(data) {
			setItems(data.map(item =>({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);


	const addItem = (item) => {
		setItems(oldItems => [...oldItems, {...item, date: new Date(item.date) , id:oldItems.length > 0 ?  Math.max(...oldItems.map(i => i.id)) + 1 : 1}]);
	};

	return (
		<div className='app'>
		  <LeftPanel>			
				<Header/>
				<JournalAddButton />
				<JournalList items={items} />
		  </LeftPanel>
		  <Body>
				<JournalForm onSubmit={addItem}/>
		  </Body>
    
			
		
		</div>
	);
}

export default App;
