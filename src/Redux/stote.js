import thunk from "redux-thunk";
import { reducer as authReducer } from './reducer';
import { legacy_createStore ,applyMiddleware,combineReducers} from 'redux';
const rootReducer=combineReducers({
     authReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
