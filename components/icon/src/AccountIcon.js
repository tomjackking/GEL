import React from 'react';
import { propTypes, Icon } from './Icon';

export const AccountIcon = ({
	assistiveText = 'Account',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="AccountIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M24,9.85324138 C22.5,11.5084138 17.373,13.2413793 12,13.2413793 C6.62625,13.2413793 1.5,11.5084138 0,9.85324138 L0,13.1635862 C0,14.8187586 5.25,17.3793103 12,17.3793103 C18.75,17.3793103 24,14.8187586 24,13.1635862 L24,9.85324138 Z M24,16.473931 C22.5,18.1291034 17.373,19.862069 12,19.862069 C6.62625,19.862069 1.5,18.1291034 0,16.473931 L0,19.7842759 C0,21.4394483 5.25,24 12,24 C18.75,24 24,21.4394483 24,19.7842759 L24,16.473931 Z M12,0 C18.62775,0 24,2.48275862 24,4.13793103 L24,6.62068966 C24,8.27586207 18.62775,10.7586207 12,10.7586207 C5.37225,10.7586207 0,8.27586207 0,6.62068966 L0,4.13793103 C0,2.48275862 5.37225,0 12,0 L12,0 Z"
		/>
	</Icon>
);

AccountIcon.propTypes = propTypes;
