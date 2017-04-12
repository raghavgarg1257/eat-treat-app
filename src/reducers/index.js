import { combineReducers } from 'redux';

// reducers
import VideoReducer from './VideoReducer';
import ActiveVideoReducer from './ActiveVideoReducer';

// combining all reducer into one store
const rootReducer = combineReducers({
    reducedVideo : VideoReducer,
    reducedActiveVideo : ActiveVideoReducer
});

export default rootReducer;
