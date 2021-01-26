import { ADD_TODO, COMPLETE_TODO, EDITED_TODO } from "../actions";

export const initialState = {
  todos: [
    { item: "Walk the dog", done: false, id: 1 },
    { item: "Buy groceries", done: false, id: 2 },
    { item: "Wash the car", done: false, id: 3 },
    { item: "Redo repos to practice coding", done: false, id: 4 }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return { ...todo, done: action.payload.checked };
            } else {
              return todo;
            }
          })
        ]
      };
    case EDITED_TODO:
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, item: action.payload.item };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};
