import {USER_ID,USER_TITLE} from '../actiontype';
const initialState={
    userid:null
}
const idreducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type)
    {
        case USER_ID:
            return {...state,user:payload};
        case USER_TITLE:
            return {...state};
        default:
                return state;
    }
}
export default idreducer;