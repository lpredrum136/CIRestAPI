import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
import PropTypes from 'prop-types';

const PostForm = ({ addPost }) => {
	const [formData, setFormData] = useState({
		title: '',
		body: '',
		author: '',
		category_id: ''
	});

	const { title, body, author, category_id } = formData;

	const onChangeData = event =>
		setFormData({ ...formData, [event.target.name]: event.target.value });

	const onSubmit = event => {
		event.preventDefault();
		addPost(formData);
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

PostForm.propTypes = { addPost: PropTypes.func.isRequired };

export default connect(null, { addPost })(PostForm);
