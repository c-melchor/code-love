import { ADD_TODO } from "../actions";

export const initialState = {
  todos: [
    { item: "Walk the dog", done: true, id: 1 },
    { item: "Buy groceries", done: false, id: 2 },
    { item: "Wash the car", done: true, id: 3 },
    { item: "Redo repos to practice coding", done: true, id: 4 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};
