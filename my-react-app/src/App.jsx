
import './App.css';

import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';

function mapItems(items) {
	if(!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}



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

	const [ items, setItems] = useLocalStorage('data');

	const addItem = (item) => {
		setItems([...mapItems(items), {...item, date: new Date(item.date) , id:items.length > 0 ?  Math.max(...items.map(i => i.id)) + 1 : 1}]);
	};

	return (
		<div className='app'>
		  <LeftPanel>			
				<Header/>
				<JournalAddButton />
				<JournalList items={mapItems(items)} />
		  </LeftPanel>
		  <Body>
				<JournalForm onSubmit={addItem}/>
		  </Body>
    
			
		
		</div>
	);
}

export default App;
