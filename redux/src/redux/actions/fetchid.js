import {USER_ID,USER_TITLE} from '../actiontype';
export const userid = (abc) => {
  return {
    type: USER_ID,
    payload: abc
  };
};
