/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const List = ({ state, ...rest }) => <ol {...rest} />;

// ==============================
// Styles
// ==============================

const listStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: 'progress-rope-list',
		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,

		// default line
		'::after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 0,
			borderLeft: `2px dotted ${COLORS.borderDark}`,
			top: '1.0625rem',
			bottom: '1.5rem',
			left: '2.25rem',
		},
	};
};

// ==============================
// Attributes
// ==============================

const listAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};

export const blenderList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
