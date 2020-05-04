export const ACTION_CHANGE_LOADING = 'ACTION_CHANGE_LOADING'
export const ACTION_CHANGE_TODOS = 'ACTION_CHANGE_TODOS'
export const ACTION_INPUT_VALUE = 'ACTION_INPUT_VALUE'

export const changeTodos = (newTodos) => {
  return {
    type: ACTION_CHANGE_TODOS,
    payload: newTodos,
  }
}

export const changeLoading = (isLoading) => {
  return {
    type: ACTION_CHANGE_LOADING,
    payload: isLoading,
  }
}

export const changeInputValue = (newInputValue) => {
  return {
    type: ACTION_INPUT_VALUE,
    payload: newInputValue,
  }
}
