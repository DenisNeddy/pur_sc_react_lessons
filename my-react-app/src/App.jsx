
import './App.css';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useState } from 'react';



const INITIAL_DATA = [
	{
		title: 'Подготовка к обновлению курсов',
		text: 'Горные походы открывают удивительные природные ланшафты',
		date: new Date()
	},
	{
		title: 'Подготовка курсов 2.0',
		text: 'что то еще очень важное я стал забывать',
		date: new Date()
	}
];

function App() {

	const [ items, setItems] = useState(INITIAL_DATA);

	const addItem = (item) => {
		setItems(oldItems => [...oldItems, {...item, date: new Date(item.date)}]);
	};

	return (
		<div className='app'>
		  <LeftPanel>			
				<Header/>
				<JournalAddButton />
				<JournalList>
					{
						items.map(el => (
							<CardButton key={el.title}> 
								<JournalItem 
									title={el.title}
									text={el.text}
									date={el.date}
								/>
							</CardButton>
						))
					}
		
				</JournalList>
		  </LeftPanel>
		  <Body>
				<JournalForm onSubmit={addItem}/>
		  </Body>
    
			
		
		</div>
	);
}

export default App;
