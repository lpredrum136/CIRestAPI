import axios from "axios";

import { GET_POSTS, POST_ERROR } from "./types";

// Get posts
export const getPosts = () => {
	const dispatchGetPosts = async dispatch => {
		try {
			const res = await axios.get("/posts");
			dispatch({ type: GET_POSTS, payload: res.data });
		} catch (error) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error.response.statusText,
					status: error.response.status
				}
			});
		}
	};

	return dispatchGetPosts;
};
