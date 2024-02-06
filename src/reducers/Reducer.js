const initialionState = {
	todo: [],
  done: [],
}

export const Reducer = (state = initialionState, action) => {
	switch (action.type) {
		case 'TODO':
			return {
				...state,
				todo: [
					...state.todo,
					{ id: state.todo.length + 1, title: action.payload }
				]
			}
		case 'DELETE_TASK':
			return {
				...state,
				todo: action.payload
			}
	

		default:
			return state
	}
}
