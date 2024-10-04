
import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useState, useEffect } from 'react';
import cn from 'classnames';


const INITIAL_STATE = {
	title: true,
	text: true,
	date: true
};

const JournalForm = ({onSubmit}) => {
	const [formValidState, setFormValidState] = useState(INITIAL_STATE);

	useEffect(() => {
		let timerId;
		if(!formValidState.date || !formValidState.text || !formValidState.title) {
			timerId = setTimeout(() => {
				setFormValidState(INITIAL_STATE);
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [formValidState]);
	

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if(!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false }));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, title: true }));
		}
		if(!formProps.text?.trim().length) {
			setFormValidState(state => ({...state, text: false }));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, text: true }));
		}
		if(!formProps.date) {
			setFormValidState(state => ({...state, date: false }));
			 
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, date: true }));
		}

		if(!isFormValid) {
			return;
		}
		onSubmit(formProps);
	

	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>

				<input type="text" name="title" className={cn(styles['input'], styles['input-title'], {
					[styles['invalid']]: !formValidState.title
				})} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='date-id' className={styles['form-label']}>
					<img src="icon-date.svg" alt="Иконка календаря" />
					<span className={styles['form-label__text']}>Дата</span>
				</label>
				<input type="date" name="date" id="date-id" className={`${styles['input']} ${styles['input__date']} ${formValidState.date ? '' : styles['invalid']}`} />
			</div>

			<div className={styles['form-row']}>
				<label htmlFor="tag-id" className={styles['form-label']}>
					<img src="icon-tag.svg" alt="Иконка папки" />
					<span className={styles['form-label__text']}>Метки</span>
				</label>
				
				<input type="text" name="tag" id="tag-id" className={styles['input']}/>
			</div>

			
			<textarea name="text" id="" cols="30" rows="10"  className={`${styles['input']} ${formValidState.text ? '' : styles['invalid']}`} ></textarea>
			<Button text="Сохранить" />
		</form>
	);
};

export default JournalForm;