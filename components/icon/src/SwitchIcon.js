import React from 'react';
import { propTypes, Icon } from './Icon';

export const SwitchIcon = ({
	assistiveText = 'Switch',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="SwitchIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M8,0 L2,5.985 L6,5.985 L6,14 L10,14 L10,5.985 L14,5.985 L8,0 Z M14,10 L14,18.015 L10,18.015 L16,24 L22,18.015 L18,18.015 L18,10 L14,10 Z"
		/>
	</Icon>
);

SwitchIcon.propTypes = propTypes;
