
import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useReducer, useEffect } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state.js';


// const INITIAL_STATE = {
// 	title: true,
// 	text: true,
// 	date: true
// };

const JournalForm = ({onSubmit}) => {
	// const [formValidState, setFormValidState] = useState(INITIAL_STATE);
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;


	useEffect(() => {
		let timerId;
		if(!isValid.date || !isValid.date || !isValid.date) {
			timerId = setTimeout(() => {
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
		}
	}, [isFormReadyToSubmit]);
	

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		dispatchForm({type: 'SUBMIT', payload: formProps});
	
	
	

	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>

				<input type="text" name="title" className={cn(styles['input'], styles['input-title'], {
					[styles['invalid']]: !formState.isValid.title
				})} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date-id' className={styles['form-label']}>
					<img src="icon-date.svg" alt="Иконка календаря" />
					<span className={styles['form-label__text']}>Дата</span>
				</label>
				<input type="date" name="date" id="date-id" className={`${styles['input']} ${styles['input__date']} ${isValid.date ? '' : styles['invalid']}`} />
			</div>

			<div className={styles['form-row']}>
				<label htmlFor="tag-id" className={styles['form-label']}>
					<img src="icon-tag.svg" alt="Иконка папки" />
					<span className={styles['form-label__text']}>Метки</span>
				</label>
				
				<input type="text" name="tag" id="tag-id" className={styles['input']}/>
			</div>

			
			<textarea name="text" id="" cols="30" rows="10"  className={`${styles['input']} ${isValid.text ? '' : styles['invalid']}`} ></textarea>
			<Button text="Сохранить" />
		</form>
	);
};

export default JournalForm;