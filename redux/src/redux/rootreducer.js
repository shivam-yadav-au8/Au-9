import {combineReducers} from 'redux';
import idreducer from './reducers/idreducer';
import authreducer from './reducers/authreducer';
const rootReducer = combineReducers({
    
    userid: idreducer,
    ncdnhc: authreducer

  });
  
  
  export default rootReducer;