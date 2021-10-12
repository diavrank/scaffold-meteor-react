interface TemporalState {
	element: any;
	status: boolean;
	drawer: boolean;
}

const initialState: TemporalState = {
	element: null,
	status: false,
	drawer: true
};

const SET_DRAWER = 'SET_DRAWER';
const SET_ELEMENT = 'SET_ELEMENT';

export default function temporalReducer(state: TemporalState = initialState, action) {
	switch (action.type) {
		case SET_DRAWER:
			return { ...state, drawer: action.drawer };
		case SET_ELEMENT:
			return { ...state, element: action.element };
		default:
			return state;
	}
}

export const setDrawerAction = (drawer: any) => (dispatch) => {
	dispatch({ type: SET_DRAWER, drawer });
};

export const setElementAction = (element: any) => (dispatch) => {
	dispatch({ type: SET_ELEMENT, element });
};
