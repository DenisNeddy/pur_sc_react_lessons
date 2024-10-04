export const INITIAL_STATE = {
	isValid: {
		text: true,
		title: true,
		date: true
	},
	values: {
		text: '',
		title: '',
		date: '',
		tag: ''
	},
	isFormReadyToSubmit: false
};


export function formReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE': 
		return {...state, values: {...state.values, ...action.payload}};
	case 'CLEAR': 
		return {...state, values: INITIAL_STATE.values  };
	case 'RESET_VALIDITY': 
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const textValidity = state.values.text?.trim().length;
		const titleValidity = state.values.title?.trim().length;
		const dateValidity = state.values.date;

		return {
			...state,
			isValid: {
				text: textValidity,
				title: titleValidity,
				date: dateValidity
			}, 
			isFormReadyToSubmit: textValidity && titleValidity && dateValidity


		};
	}

	}

	// if(!formProps.title?.trim().length) {
	//     setFormValidState(state => ({...state, title: false }));
	//     isFormValid = false;
	// } else {
	//     setFormValidState(state => ({...state, title: true }));
	// }
	// if(!formProps.text?.trim().length) {
	//     setFormValidState(state => ({...state, text: false }));
	//     isFormValid = false;
	// } else {
	//     setFormValidState(state => ({...state, text: true }));
	// }
	// if(!formProps.date) {
	//     setFormValidState(state => ({...state, date: false }));
         
	//     isFormValid = false;
	// } else {
	//     setFormValidState(state => ({...state, date: true }));
	// }

	// if(!isFormValid) {
	//     return;
	// }

}