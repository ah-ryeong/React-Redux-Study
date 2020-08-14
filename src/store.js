// 1번 : 액션이름생성
const INCREMENT = 'INCREMENT';

const initState = {
  number: 0,
};

// 2번 : 리듀서(state, action)
const reducer = (state = initState, action) => {
  if (action.type === INCREMENT) {
    console.log('INCREMENT 실행됨');
    return { number: state.number + 1 };
  } else {
    return state;
  }
};

export default reducer;
