const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case "NEW_LOGIN":
      return action.payload;

    case "NEW_USER":
      return state;
    default:
      return state;
  }
}
