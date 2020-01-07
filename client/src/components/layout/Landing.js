import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Landing = props => {
	return (
		<Fragment>
			<h1>Homepage</h1>
			<ul>
				<li>
					<Link to='/posts'>Posts</Link>
				</li>
			</ul>
		</Fragment>
	);
};

Landing.propTypes = {};

export default Landing;
