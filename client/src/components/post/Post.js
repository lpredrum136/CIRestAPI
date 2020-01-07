import React, { Fragment, useEffect } from 'react';
import { getPost, deletePost } from '../../actions/postActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = ({ getPost, deletePost, myPost, match, history }) => {
	useEffect(() => {
		getPost(match.params.postId);
	}, [getPost, match.params.postId]);

	const { post, loading } = myPost;

	return loading || post == null ? (
		'Loading...'
	) : (
		<Fragment>
			<h1>{post.id}</h1>
			<p>{post.name}</p>
			<p>{post.body}</p>
			<p>{post.author}</p>
			<p>Created on {post.created_at}</p>
			<Link to={`/post/edit/${post.id}`}>Edit this post</Link>
			<button onClick={event => deletePost(post.id, history)}>
				Delete this post
			</button>
		</Fragment>
	);
};

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	myPost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ myPost: state.myPost });

export default connect(mapStateToProps, { getPost, deletePost })(Post);
