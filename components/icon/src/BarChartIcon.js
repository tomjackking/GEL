import React from 'react';
import { propTypes, Icon } from './Icon';

export const BarChartIcon = ({
	assistiveText = 'Bar Chart',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="BarChartIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M10,20 L14,20 L14,8 L10,8 L10,20 Z M18,20 L22,20 L22,2 L18,2 L18,20 Z M2,20 L6,20 L6,14 L2,14 L2,20 Z M0,24 L24,24 L24,22 L0,22 L0,24 Z"
		/>
	</Icon>
);

BarChartIcon.propTypes = propTypes;
