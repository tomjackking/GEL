/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Icon = ({ icon: Icon, state: { iconSize }, ...rest }) => (
	<Icon size={iconSize} color="hero" assistiveText={null} {...rest} />
);

const BlenderIcon = (props) => (
	<Icon
		overrides={{
			Icon: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const iconStyles = () => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('selector-option-icon'),
		marginRight: SPACING(4), //gap
		flex: 'none',
	};
};

// ==============================
// Attributes
// ==============================

const iconAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};

export const blenderIcon = {
	component: BlenderIcon,
	styles: iconStyles,
	attributes: iconAttributes,
};
