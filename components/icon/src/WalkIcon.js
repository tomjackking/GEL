import React from 'react';
import { propTypes, Icon } from './Icon';

export const WalkIcon = ({
	assistiveText = 'Walk',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="WalkIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M5.5,24 L8.5,8 L6,9 L6,13 L4,13 L4,7.5 C7.42553417,6.12003774 9.24878998,5.39029878 9.46976744,5.31078313 C9.80123363,5.19150966 10.3627907,5.02325581 10.6976744,5.02325581 C11.4790698,5.02325581 12.1488372,5.46976744 12.5953488,6.13953488 L13.7116279,7.9255814 C14.6046512,9.48837209 16.3906977,11 18.5116279,11 L18.5116279,13 C16.055814,13 13.9511628,11.6744186 12.5,10 L12,13.5 L14,16 L14.0465116,24 L12,24 L12,17 L9.5,15 L7.5,24 L5.5,24 Z M13.25,4.5 C12.0125,4.5 11,3.4875 11,2.25 C11,1.0125 12.0125,0 13.25,0 C14.4875,0 15.5,1.0125 15.5,2.25 C15.5,3.4875 14.4875,4.5 13.25,4.5 Z"
		/>
	</Icon>
);

WalkIcon.propTypes = propTypes;
