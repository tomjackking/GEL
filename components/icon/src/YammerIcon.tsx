import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const YammerIcon = ({
	assistiveText = 'Yammer',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="YammerIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M1.5,0 L22.5,0 C23.3284271,-1.52179594e-16 24,0.671572875 24,1.5 L24,22.5 C24,23.3284271 23.3284271,24 22.5,24 L1.5,24 C0.671572875,24 1.8778099e-15,23.3284271 1.77635684e-15,22.5 L1.77635684e-15,1.5 L1.77635684e-15,1.5 C1.67490378e-15,0.671572875 0.671572875,1.52179594e-16 1.5,0 L1.5,0 Z M20.9625,13.4955 C21.4365,13.413 21.78,12.984 21.74775,12.49425 C21.717,12.06375 21.405,11.72025 21.0045,11.63175 C20.96475,11.6295 20.92425,11.6295 20.8815,11.6295 C20.16375,11.631 15.00675,12.1965 15.26475,12.72225 C15.52275,13.242 18.699,13.49475 20.9625,13.4955 Z M19.46175,18.342 C19.7265,17.92875 19.63125,17.3865 19.2555,17.0865 C17.27025,15.999 14.36475,14.691 13.88775,15.02475 C13.4085,15.36 17.65725,18.3375 18.28575,18.68325 C18.324,18.70425 18.36,18.723 18.3945,18.74175 C18.78975,18.8565 19.22775,18.705 19.46175,18.342 Z M18.28575,6.537 C17.65725,6.8835 13.4085,9.86025 13.88775,10.197 C14.36475,10.52925 17.27025,9.222 19.2555,8.1345 C19.63125,7.83375 19.7265,7.29225 19.46175,6.879 C19.22775,6.51525 18.78975,6.36525 18.3945,6.48 C18.36,6.49725 18.324,6.51675 18.28575,6.537 Z M13.44375,5.7795 C13.6065,5.26875 13.323,4.71375 12.81525,4.551 C12.3165,4.392 11.7885,4.6455 11.61,5.13 L8.43525,13.5 L8.38575,13.5 L5.04675,5.067 C4.821,4.58925 4.2615,4.37625 3.7575,4.56525 C3.24075,4.7595 2.97525,5.325 3.14475,5.8455 L7.35,16.10475 C6.75975,17.77275 6.21225,18.55425 4.956,18.55425 C4.83525,18.55425 4.41225,18.52875 4.3845,18.5265 C3.9795,18.5055 3.6015,18.7695 3.492,19.17675 C3.36675,19.6395 3.63825,20.1165 4.09875,20.2485 C4.43175,20.307 4.77375,20.32875 5.0805,20.32875 C7.3965,20.32875 8.1615,18.99525 8.9265,17.049 L13.44375,5.7795 Z"
		/>
	</Icon>
);

YammerIcon.propTypes = {
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
