import React from 'react';
import { propTypes, Icon } from './Icon';

export const SmsIcon = ({
	assistiveText = 'Sms',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="SmsIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,16 C24,17.1045695 23.1045695,18 22,18 L6,18 L0,24 L0,2 Z M6,11 C7.1045695,11 8,10.1045695 8,9 C8,7.8954305 7.1045695,7 6,7 C4.8954305,7 4,7.8954305 4,9 C4,10.1045695 4.8954305,11 6,11 Z M12,11 C13.1045695,11 14,10.1045695 14,9 C14,7.8954305 13.1045695,7 12,7 C10.8954305,7 10,7.8954305 10,9 C10,10.1045695 10.8954305,11 12,11 Z M18,11 C19.1045695,11 20,10.1045695 20,9 C20,7.8954305 19.1045695,7 18,7 C16.8954305,7 16,7.8954305 16,9 C16,10.1045695 16.8954305,11 18,11 Z"
		/>
	</Icon>
);

SmsIcon.propTypes = propTypes;
