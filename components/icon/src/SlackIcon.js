import React from 'react';
import { propTypes, Icon } from './Icon';

export const SlackIcon = ({
	assistiveText = 'Slack',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="SlackIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M22.5 0A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0h21zM9.767 12.61c-.894 0-1.625.73-1.625 1.623V18.3c0 .894.73 1.624 1.625 1.624.894 0 1.624-.73 1.624-1.624v-4.067c0-.894-.73-1.624-1.624-1.624zm4.466 4.066H12.61V18.3c0 .894.73 1.624 1.624 1.624.894 0 1.625-.73 1.625-1.624 0-.894-.73-1.624-1.625-1.624zm-6.909-4.067H5.7c-.894 0-1.624.73-1.624 1.624 0 .894.73 1.625 1.624 1.625.894 0 1.624-.73 1.624-1.625V12.61zm10.976 0h-4.067c-.894 0-1.624.73-1.624 1.624 0 .894.73 1.625 1.624 1.625H18.3c.894 0 1.624-.73 1.624-1.625 0-.894-.73-1.624-1.624-1.624zm-4.067-8.533c-.894 0-1.624.73-1.624 1.624v4.067c0 .894.73 1.624 1.624 1.624.894 0 1.625-.73 1.625-1.624V5.7c0-.894-.73-1.624-1.625-1.624zM18.3 8.142c-.894 0-1.624.73-1.624 1.625v1.624H18.3c.894 0 1.624-.73 1.624-1.624 0-.894-.73-1.625-1.624-1.625zm-8.533 0H5.7c-.894 0-1.624.73-1.624 1.625 0 .894.73 1.624 1.624 1.624h4.067c.894 0 1.624-.73 1.624-1.624 0-.894-.73-1.625-1.624-1.625zm0-4.066c-.894 0-1.625.73-1.625 1.624 0 .894.73 1.624 1.625 1.624h1.624V5.7c0-.894-.73-1.624-1.624-1.624z"
		/>
	</Icon>
);

SlackIcon.propTypes = propTypes;
