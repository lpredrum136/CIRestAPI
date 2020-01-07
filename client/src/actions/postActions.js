import axios from 'axios';

import { GET_POSTS, GET_POST, ADD_POST, POST_ERROR } from './types';

// Get posts
export const getPosts = () => {
	const dispatchGetPosts = async dispatch => {
		try {
			const res = await axios.get('/posts');
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

// Get post by id
export const getPost = postId => {
	const dispatchGetPost = async dispatch => {
		try {
			const res = await axios.get(`/post/${postId}`);
			dispatch({ type: GET_POST, payload: res.data });
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

	return dispatchGetPost;
};

// Create post
export const addPost = formData => {
	const dispatchAddPost = async dispatch => {
		try {
			const res = await axios.post('/posts/create', formData);
			dispatch({ type: ADD_POST, payload: res.data });
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

	return dispatchAddPost;
};

// Edit Post
export const editPost = (postId, formData, history) => {
	const dispatchEditPost = async dispatch => {
		try {
			await axios.post(`/post/edit/${postId}`, formData);
			history.push('/posts');
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

	return dispatchEditPost;
};

// Delete Post
export const deletePost = (postId, history) => {
	const dispatchDeletePost = async dispatch => {
		try {
			await axios.delete(`/post/delete/${postId}`);
			history.push('/posts');
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

	return dispatchDeletePost;
};
