import { GET_POSTS, POST_ERROR } from "../actions/types";

const initialState = {
	posts: [],
	post: null,
	error: {}
};

const postReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_POSTS:
			console.log(payload);
			return {
				...state,
				posts: payload.data
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
