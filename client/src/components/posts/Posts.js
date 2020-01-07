import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/postActions';

import PostForm from './PostForm';

const Posts = ({ getPosts, myPost }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	const { posts } = myPost;

	return (
		<Fragment>
			<PostForm />
			{posts.map(post => (
				<div key={post.id}>
					<Link to={`/post/${post.id}`}>
						{post.id} - {post.category_id}: {post.title}==={post.body}
					</Link>
				</div>
			))}
		</Fragment>
	);
};

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	myPost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ myPost: state.myPost });

export default connect(mapStateToProps, { getPosts })(Posts);
