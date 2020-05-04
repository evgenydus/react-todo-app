import { ACTION_CHANGE_LOADING, ACTION_CHANGE_TODOS, ACTION_INPUT_VALUE } from './actions';

const initialState = {
  todos: [{ id: 1, title: '21', completed: false }],
  isLoading: true,
  inputValue: '',
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_INPUT_VALUE:
      return { ...state, inputValue: action.payload }

    case ACTION_CHANGE_TODOS:
      return { ...state, todos: action.payload }

    case ACTION_CHANGE_LOADING:
      return { ...state, isLoading: action.payload }

  }
  return state
}
