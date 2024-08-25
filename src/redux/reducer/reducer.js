let initialState = {
  count: 0,
  isPlay: false,
  bgmIndex: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "CLEAR":
      return { ...state, count: 0 };
    case "PLAY":
        return { ...state, isPlay: true};
    case "STOP":
        return { ...state, isPlay: false};
    default:
      return { ...state };
  }
}

export default reducer;
