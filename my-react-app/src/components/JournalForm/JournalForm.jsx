
// import styles from './JournalForm.module.css';
// import Button from '../Button/Button.jsx';
// import { useReducer, useEffect, useRef, useContext} from 'react';
// import { formReducer, INITIAL_STATE } from './JournalForm.state.js';
// import Input from '../Input/Input.jsx';
// import { UserContext } from '../../context/user.context.jsx';

// // import { UserContextProvider } from '../../context/user.context.jsx';



// // const INITIAL_STATE = {
// // 	title: true,
// // 	text: true,
// // 	date: true
// // };

// const JournalForm = ({onSubmit, data, onDelete }) => {
// 	console.log(data, 'data');
// 	// const [formValidState, setFormValidState] = useState(INITIAL_STATE);
// 	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
// 	const {isValid, isFormReadyToSubmit, values} = formState;
// 	const titleRef = useRef();
// 	const dateRef = useRef();
// 	const textRef = useRef();
// 	const { userId } = useContext(UserContext);

// 	const focusError = (isValid) => {
// 		switch(true) {
// 		case !isValid.title: 
// 			titleRef.current.focus();
// 			break;
// 		case !isValid.date:
// 			dateRef.current.focus();
// 			break;
// 		case !isValid.text:
// 			textRef.current.focus();
// 		}
// 	};

// 	useEffect(() => {
// 		if(!data) {
// 			dispatchForm({ type: 'CLEAR' });
// 			dispatchForm({ type: 'SET_VALUE', payload: { userId }});
// 		}
// 		dispatchForm({type: 'SET_VALUE', payload: {...data}});
// 		console.log('fuck');
// 	}, [data, userId]);

// 	useEffect(() => {
// 		let timerId;
// 		if(!isValid.title || !isValid.date || !isValid.text) {
// 			timerId = setTimeout(() => {
// 				focusError(isValid);
// 				dispatchForm({type: 'RESET_VALIDITY'});		
// 			}, 2000);
// 		}
// 		return () => {
// 			clearTimeout(timerId);
// 		};
// 	}, [isValid]);

// 	useEffect(() => {
// 		if(isFormReadyToSubmit) {
// 			onSubmit(values);
// 			dispatchForm( {type: 'CLEAR'});
// 			dispatchForm({type: 'SET_VALUE', payload: {userId}});
		
// 		}
// 	}, [isFormReadyToSubmit,values, onSubmit, userId]);

// 	useEffect(() => {
// 		dispatchForm({type: 'SET_VALUE', payload: {userId}});
// 	}
// 	, [userId]);

// 	const onChange = (e) => {
// 		dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}});
// 	};
	
// 	const addJournalItem = (e) => {
// 		e.preventDefault();
// 		dispatchForm({type: 'SUBMIT'});
// 	};

// 	const deleteJournalItem = () =>  {
// 		onDelete(data.id);
// 		dispatchForm( {type: 'CLEAR'});
// 		dispatchForm({type: 'SET_VALUE', payload: {userId}});
// 	};

// 	return (
		
// 		<form className={styles['journal-form']} onSubmit={addJournalItem}>
// 			<div>
				
// 			</div>
// 			<div className={styles['form-row']}>
// 				<Input type="text" ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name="title"   appearence="title" />
// 				{data?.id && <button type="button" className={styles.delete} onClick={deleteJournalItem}>
// 					<img src="/icon-arhive.svg" alt="кнопка удалить" />
// 				</button>}
// 			</div>
// 			<div className={styles['form-row']}>
// 				<label htmlFor='date-id' className={styles['form-label']}>
// 					<img src="icon-date.svg" alt="Иконка календаря" />
// 					<span className={styles['form-label__text']}>Дата</span>
// 				</label>
// 				<Input type="date" ref={dateRef} isValid={isValid.date} onChange={onChange} value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} name="date" id="date-id"/>
// 			</div>

// 			<div className={styles['form-row']}>
// 				<label htmlFor="tag-id" className={styles['form-label']}>
// 					<img src="icon-tag.svg" alt="Иконка папки" />
// 					<span className={styles['form-label__text']}>Метки</span>
// 				</label>
				
// 				<Input type="text" name="tag" onChange={onChange} value={values.tag} id="tag-id"/>
// 			</div>
// 			<textarea name="text" id="" cols="30" rows="10" ref={textRef} onChange={onChange} value={values.text} className={`${styles['input']} ${isValid.text ? '' : styles['invalid']}`} ></textarea>
// 			<Button text="Сохранить" />
// 		</form>
// 	);
// };

// export default JournalForm;

import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context.jsx';


function JournalForm({ onSubmit, data, onDelete }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const { userId } = useContext(UserContext);

	const focusError = (isValid) => {
		switch(true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		if (!data) {
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({ type: 'SET_VALUE', payload: { userId }});
		}
		dispatchForm({ type: 'SET_VALUE', payload: { ...data }});
	}, [data]);

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({ type: 'SET_VALUE', payload: { userId }});
		}
	}, [isFormReadyToSubmit, values, onSubmit, userId]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: { userId }});
	}, [userId]);

	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value }});
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const deleteJournalItem = () => {
		onDelete(data.id);
		dispatchForm({ type: 'CLEAR' });
		dispatchForm({ type: 'SET_VALUE', payload: { userId }});
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['form-row']}>
				<Input appearence="title" type='text' ref={titleRef} onChange={onChange} value={values.title} name='title' isValid={isValid.title}/>
				{data?.id && <button className={styles['delete']} type="button" onClick={deleteJournalItem}>
					<img src="/icon-arhive.svg" alt="Кнопка удалить" />
				</button>}
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='/icon-date.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<Input type='date' ref={dateRef} onChange={onChange} name='date' value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} id="date" isValid={isValid.title}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='/icon-tag.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<Input type='text' onChange={onChange} id="tag" value={values.tag} name='tag' />
			</div>
			<textarea ref={postRef} name="post" id="" onChange={onChange} value={values.post} cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})}></textarea>
			<Button>Сохранить</Button>
		</form>
	);
}

export default JournalForm;