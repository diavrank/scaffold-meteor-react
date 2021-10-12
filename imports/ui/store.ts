import temporalReducer from '/imports/ui/modules/temporal';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	temporal: temporalReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
	return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
