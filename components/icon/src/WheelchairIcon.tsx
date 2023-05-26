import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const WheelchairIcon = ({
	assistiveText = 'Wheelchair',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="WheelchairIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M8,13.2070325 C5.6914952,13.8599614 4,15.9824458 4,18.5 C4,21.5375661 6.46243388,24 9.5,24 C12.0175542,24 14.1400386,22.3085048 14.7929675,20 L12.6631844,20 C12.1014525,21.1824737 10.896198,22 9.5,22 C7.56700338,22 6,20.4329966 6,18.5 C6,17.103802 6.81752633,15.8985475 8,15.3368156 L8,13.2070325 L8,13.2070325 Z M20,13.5 C18,13.5 15.423,12.677 14.004,11.5 L14.004,15 L17.5,15 C19.5,15 20,16 20,17.5 L20,23 L18,23 L18,17.9875609 L12.2,17.9875609 C10.99,17.9875609 10,17 10,16 L10,9.5 C10,8 11.0000088,7 12,7 C12.5,7 13.0709844,7 14.004,8 C14.9370156,9 14.9227264,9.34205666 16.0193557,10.1324001 C17.1159849,10.9227436 18.5,11.5 20,11.5 L20,13.5 Z M12.25,6.5 C11.0073593,6.5 10,5.49264069 10,4.25 C10,3.00735931 11.0073593,2 12.25,2 C13.4926407,2 14.5,3.00735931 14.5,4.25 C14.5,5.49264069 13.4926407,6.5 12.25,6.5 Z"
		/>
	</Icon>
);

WheelchairIcon.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * String to use as the `aria-label` for the icon. Set to an empty string if you
	 * are rendering the icon with visible text to prevent accessibility label
	 * duplication.
	 *
	 * Defaults to the icon name e.g. `BusinessPersonIcon` --> "Business Person"
	 */
	assistiveText: PropTypes.string,
	/**
	 * The icon SVG metadata copyright year text
	 */
	copyrightYear: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Svg: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Control the size of the icon.
	 *
	 * Defaults to "medium" --> 24px
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall']),
		PropTypes.arrayOf(PropTypes.oneOf(['large', 'medium', 'small', 'xlarge', 'xsmall'])),
	]),
};
