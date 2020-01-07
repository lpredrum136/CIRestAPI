import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Posts from '../posts/Posts';
import Post from '../post/Post';
import PostEdit from '../post/PostEdit';

const Routes = props => {
	return (
		<Switch>
			<Route exact path='/posts' component={Posts} />
			<Route exact path='/post/:postId' component={Post} />
			<Route exact path='/post/edit/:postId' component={PostEdit} />
		</Switch>
	);
};
export default Routes;
