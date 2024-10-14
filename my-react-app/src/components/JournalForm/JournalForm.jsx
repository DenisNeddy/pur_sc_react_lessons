
import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useReducer, useEffect, useRef, useContext} from 'react';
import { formReducer, INITIAL_STATE } from './JournalForm.state.js';
import Input from '../Input/Input.jsx';
import { UserContext } from '../../contenxt/user.context.jsx';

// import { UserContextProvider } from '../../contenxt/user.context.jsx';



// const INITIAL_STATE = {
// 	title: true,
// 	text: true,
// 	date: true
// };

const JournalForm = ({onSubmit, data }) => {
	// const [formValidState, setFormValidState] = useState(INITIAL_STATE);
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();
	const { userId } = useContext(UserContext);

	const focusError = (isValid) => {
		switch(true) {
		case !isValid.title: 
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
		}
	};

	useEffect(() => {
		dispatchForm({type: 'SET_VALUE', payload: {...data}});
	}, [data]);

	useEffect(() => {
		let timerId;
		if(!isValid.title || !isValid.date || !isValid.text) {
			timerId = setTimeout(() => {
				focusError(isValid);
				dispatchForm({type: 'RESET_VALIDITY'});		
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if(isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm( {type: 'CLEAR'});
			dispatchForm({type: 'SET_VALUE', payload: {userId}});
		
		}
	}, [isFormReadyToSubmit,values, onSubmit, userId]);

	useEffect(() => {
		dispatchForm({type: 'SET_VALUE', payload: {userId}});
	}
	, [userId]);

	const onChange = (e) => {
		dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}});
	};
	
	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({type: 'SUBMIT'});
	};

	return (
		
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				
			</div>
			<div>
				<Input type="text" ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name="title"   appearence="title" />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date-id' className={styles['form-label']}>
					<img src="icon-date.svg" alt="Иконка календаря" />
					<span className={styles['form-label__text']}>Дата</span>
				</label>
				<Input type="date" ref={dateRef} isValid={isValid.date} onChange={onChange} value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} name="date" id="date-id"/>
			</div>

			<div className={styles['form-row']}>
				<label htmlFor="tag-id" className={styles['form-label']}>
					<img src="icon-tag.svg" alt="Иконка папки" />
					<span className={styles['form-label__text']}>Метки</span>
				</label>
				
				<Input type="text" name="tag" onChange={onChange} value={values.tag} id="tag-id"/>
			</div>
			<textarea name="text" id="" cols="30" rows="10" ref={textRef} onChange={onChange} value={values.text} className={`${styles['input']} ${isValid.text ? '' : styles['invalid']}`} ></textarea>
			<Button text="Сохранить" />
		</form>
	);
};

export default JournalForm;