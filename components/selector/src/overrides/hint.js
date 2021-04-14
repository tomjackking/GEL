/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const Hint = ({ state: _, ...rest }) => <Body {...rest} />;

// ==============================
// Styles
// ==============================

const hintStyles = (_, { checked }) => {
	const { COLORS, PACKS, SPACING } = useBrand();

	return {
		label: getLabel('selector-hint'),
		color: checked ? 'inherit' : COLORS.muted,
		marginTop: SPACING(1, true),
		...PACKS.typeScale.bodyFont[9],
	};
};

// ==============================
// Attributes
// ==============================

const hintAttributes = (_, { hintId }) => ({ id: hintId });

// ==============================
// Exports
// ==============================

export const defaultHint = {
	component: Hint,
	styles: hintStyles,
	attributes: hintAttributes,
};
