import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/postActions";

const Landing = ({ getPosts, myPost }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	const { posts } = myPost;

	return (
		<Fragment>
			{posts.map(post => (
				<p key={post.id}>
					{post.id} - {post.category_id}: {post.title}==={post.body}
				</p>
			))}
		</Fragment>
	);
};

Landing.propTypes = {
	getPosts: PropTypes.func.isRequired,
	myPost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ myPost: state.myPost });

export default connect(mapStateToProps, { getPosts })(Landing);
