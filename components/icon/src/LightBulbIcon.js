import React from 'react';
import { propTypes, Icon } from './Icon';

export const LightBulbIcon = ({
	assistiveText = 'Light Bulb',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="LightBulbIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M9,22 L15,22 L15,23 C15,23.5522847 14.5522847,24 14,24 L10,24 C9.44771525,24 9,23.5522847 9,23 L9,22 Z M16,16.0018987 L16,18 C16,19.1045695 15.1045695,20 14,20 L10,20 C8.8954305,20 8,19.1045695 8,18 L8,16.0018987 C5.32211278,14.5710686 3.5,11.7483229 3.5,8.5 C3.5,3.80557963 7.30557963,0 12,0 C16.6944204,0 20.5,3.80557963 20.5,8.5 C20.5,11.7483229 18.6778872,14.5710686 16,16.0018987 L16,16.0018987 Z M14,14.6865006 L14,14.6865006 C16.611264,13.8429436 18.5,11.3920408 18.5,8.5 C18.5,4.91014913 15.5898509,2 12,2 C8.41014913,2 5.5,4.91014913 5.5,8.5 C5.5,11.3920408 7.38873598,13.8429436 10,14.6865006 L10,18 L14,18 L14,14.6865006 Z"
		/>
	</Icon>
);

LightBulbIcon.propTypes = propTypes;
