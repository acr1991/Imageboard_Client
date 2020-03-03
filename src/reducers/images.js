const initialState = [
  {
    id: 1,
    name: "Airplane 2",
    description: "Airplane",
    url:
      "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    name: "Airplane 1",
    description: "Airplane",
    url:
      "https://www.seriousfacts.com/wp-content/uploads/2018/02/The-place-near-the-tail-of-an-airplane-is-the-safest-to-be-in-the-event-of-a-crash..png"
  }
];
export default function(state = initialState, action) {
  switch (action.type) {
    case "NEW_IMAGE":
      return [...state, action.payload];

    default:
      return state;
  }
}
