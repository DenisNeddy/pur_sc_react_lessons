import Button from './components/Button/Button.jsx';
import './App.css';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';


function App() {

	const data = [
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

	return (
		<>
    
			<Button />
			<CardButton> 
				<JournalItem 
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>
		
			<JournalItem 
				title={data[1].title}
				text={data[1].text}
				date={data[1].date}
			/>

		</>
	);
}

export default App;
