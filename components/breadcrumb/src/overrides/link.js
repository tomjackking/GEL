/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Link = ({ current, assistiveText, text, href, ...props }) => {
	const Tag = href ? 'a' : 'button';
	if (!href) {
		props.type = 'button';
	}

	return <Tag href={href} {...props} />;
};

export const linkStyles = (_, { current }) => {
	const { COLORS } = useBrand();

	return {
		color: COLORS.text,
		boxSizing: 'border-box',
		textDecoration: 'none',
		verticalAlign: 'middle',
		cursor: current ? 'auto' : 'pointer',
		appearance: 'none',
		background: 'none',
		border: 'none',
		padding: 0,
		margin: 0,
		display: 'inline',

		':focus, :hover': {
			textDecoration: current ? 'none' : 'underline',
		},
	};
};
