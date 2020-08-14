import React from 'react';
import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

// dispatch = reducer 얘는 액션만 때림
const actionProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch({ type: 'INCREMENT' });
    },
  };
};

// connect -> 구독
// 1번 파라메터 state
// 2번 파라메터 event
export default connect(null, actionProps)(AddNumber);
