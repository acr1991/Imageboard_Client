const initialState = [
  {
    id: 1,
    name: "puppy 1",
    description: "cute puppy 1"
  },
  {
    id: 2,
    name: "puppy 2",
    description: "cute puppy 2"
  }
]
export default function (state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}