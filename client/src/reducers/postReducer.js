import { GET_POSTS, POST_ERROR, ADD_POST, GET_POST } from '../actions/types';

const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: {}
};

const postReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_POSTS:
			return {
				...state,
				posts: payload.data,
				loading: false
			};

		case GET_POST:
			return {
				...state,
				post: payload.data,
				loading: false
			};

		case ADD_POST:
			return {
				...state,
				posts: [payload, ...state.posts],
				loading: false
			};

		case POST_ERROR:
			return {
				...state,
				error: payload
			};

		default:
			return state;
	}
};

export default postReducer;
