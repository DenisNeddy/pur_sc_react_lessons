export const INITIAL_STATE = {
	isValid: {
		text: true,
		title: true,
		date: true
	},
	values: {
		text: undefined,
		title: undefined,
		date: undefined
	},
	isFormReadyToSubmit: false
};


export function formReducer(state, action) {
	switch(action.type) {
	case 'RESET_VALIDITY': 
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const textValidity = action.payload.text?.trim().length;
		const titleValidity = action.payload.title?.trim().length;
		const dateValidity = action.payload.date;

		return {
			values: action.payload,
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