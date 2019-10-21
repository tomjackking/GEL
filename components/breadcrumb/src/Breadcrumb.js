/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({ children, ...props }) => {
	const childrenWithProps = Children.map(children, (child, index) => {
		// Make sure we don't break the expected implementation contract of using `cloneElement`.
		if (!child.type.isCrumb) {
			throw new Error('<Breadcrumb /> only accepts <Crumb /> as direct children.');
		}
		return index === Children.count(children) - 1 ? cloneElement(child, { last: true }) : child;
	});

	return (
		<div {...props}>
			<VisuallyHidden>Page navigation:</VisuallyHidden>
			<ol
				css={{
					padding: '0.375rem 1.125rem',
					marginBottom: '1.3125rem',
					fontSize: '0.8125rem',
					listStyle: 'none',
				}}
			>
				{childrenWithProps}
			</ol>
		</div>
	);
};

// ==============================
// Types
// ==============================

Breadcrumb.propTypes = {
	/**  Any renderable child */
	children: PropTypes.node,
};