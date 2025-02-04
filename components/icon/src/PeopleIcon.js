import React from 'react';
import { propTypes, Icon } from './Icon';

export const PeopleIcon = ({
	assistiveText = 'People',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="PeopleIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M17.7223772,14.2593068 C20.6642206,14.7663417 24,16.0160056 24,18 L24,22 L20,22 L20,18 C20,16.4654583 19.112709,15.214323 17.7223772,14.2593068 L17.7223772,14.2593068 Z M13.9997631,11.9000397 L13.9997631,11.9000397 C15.237188,10.6375754 16,8.90816252 16,7 C16,5.09183748 15.237188,3.36242456 13.9997631,2.09996035 C14.3229246,2.03440871 14.6574255,2 15,2 C17.7625,2 20,4.2375 20,7 C20,9.7625 17.7625,12 15,12 C14.6574255,12 14.3229246,11.9655913 13.9997631,11.9000397 Z M14,7 C14,9.7625 11.7625,12 9,12 C6.2375,12 4,9.7625 4,7 C4,4.2375 6.2375,2 9,2 C11.7625,2 14,4.2375 14,7 Z M0,18 C0,15.34 5.99625,14 9,14 C12.00375,14 18,15.34 18,18 L18,22 L0,22 L0,18 Z"
		/>
	</Icon>
);

PeopleIcon.propTypes = propTypes;
