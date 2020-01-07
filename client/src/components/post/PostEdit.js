import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost, editPost } from '../../actions/postActions';
import PropTypes from 'prop-types';

const PostEdit = ({ myPost, getPost, editPost, match, history }) => {
	const [formData, setFormData] = useState({
		title: '',
		body: '',
		author: '',
		category_id: ''
	});

	const { post, loading } = myPost;

	useEffect(() => {
		getPost(match.params.postId);
		setFormData({
			title: loading || post.title,
			body: loading || post.body,
			author: loading || post.author,
			category_id: loading || post.category_id
		});
	}, [loading, getPost, match.params.postId]);

	const { title, body, author, category_id } = formData;

	const onChangeData = event =>
		setFormData({ ...formData, [event.target.name]: event.target.value });

	const onSubmit = event => {
		event.preventDefault();
		editPost(match.params.postId, formData, history);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='title'
				id='title'
				placeholder='Title'
				value={title}
				onChange={onChangeData}
			/>
			<input
				type='text'
				name='body'
				id='body'
				placeholder='body'
				value={body}
				onChange={onChangeData}
			/>
			<input
				type='text'
				name='author'
				id='author'
				placeholder='author'
				value={author}
				onChange={onChangeData}
			/>
			<input
				type='text'
				name='category_id'
				id='category_id'
				placeholder='category_id'
				value={category_id}
				onChange={onChangeData}
			/>
			<input type='submit' value='Submit woohoo' />
		</form>
	);
};

PostEdit.propTypes = {
	myPost: PropTypes.object.isRequired,
	getPost: PropTypes.func.isRequired,
	editPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	myPost: state.myPost
});

export default connect(mapStateToProps, { getPost, editPost })(PostEdit);
