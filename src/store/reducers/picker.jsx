export function linkAction(data) {
  return {
    type: "PICKER",
    payload: data,
  };
}

const initialState = {
  picker: "",
};

const pickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PICKER":
      return { ...state, picker: action.payload };
    default:
      return state;
  }
};

export default pickerReducer;
