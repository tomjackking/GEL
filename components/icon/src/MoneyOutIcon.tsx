import PropTypes from 'prop-types';
import { Icon, IconProps } from './Icon';

export const MoneyOutIcon = ({
	assistiveText = 'Money Out',
	copyrightYear = '2020',
	size = 'medium',
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="MoneyOutIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M21.852385,18.852385 C19.684317,21.9638188 16.080054,24 12,24 C5.37225,24 -8.8817842e-16,18.627 -8.8817842e-16,12 C-8.8817842e-16,5.373 5.37225,0 12,0 C16.080054,0 19.684317,2.03618125 21.852385,5.14761501 L20.4110134,6.58898664 C18.6311948,3.82810059 15.5290853,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C15.5290853,22 18.6311948,20.1718994 20.4110134,17.4110134 L21.852385,18.852385 L21.852385,18.852385 Z M18,18 L18,6 L24,12 L18,18 Z M10,18.4461876 C7.57453187,18.1650794 6.06873973,16.7978464 6,14.7036169 L8.50430293,14.7036169 C8.62478485,15.7397857 9.6919105,16.4189551 11.0688468,16.4189551 C12.454389,16.4189551 13.4010327,15.748493 13.4010327,14.8255191 C13.4010327,14.0070328 12.8072289,13.5542532 11.3098107,13.2146685 L9.6919105,12.8576691 C7.40275387,12.361353 6.27538726,11.1858674 6.27538726,9.34862693 C6.27538726,7.32989847 7.77903863,5.90649143 10,5.57422136 L10,4 L12,4 L12,5.56126841 C14.3198703,5.86481374 15.7382778,7.27356464 15.7762478,9.27896852 L13.3407917,9.27896852 C13.2547332,8.21667783 12.3339071,7.57233758 11.0344234,7.57233758 C9.75215146,7.57233758 8.89156627,8.19055593 8.89156627,9.12223711 C8.89156627,9.89718687 9.4939759,10.3325519 10.9225473,10.6634293 L12.4285714,10.9855995 C14.9156627,11.5254521 16,12.6051574 16,14.5207636 C16,16.6733683 14.4771218,18.1268298 12,18.4376583 L12,20 L10,20 L10,18.4461876 L10,18.4461876 Z"
		/>
	</Icon>
);

MoneyOutIcon.propTypes = {
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
