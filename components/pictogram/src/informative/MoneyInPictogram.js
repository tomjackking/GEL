import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const MoneyInPictogram = ({
	mode,
	viewBoxWidth = 78,
	viewBoxHeight = 78,
	assistiveText = 'Money in',
	copyrightYear = '2020',
	...rest
}) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram
			pictogram="MoneyInPictogram"
			mode={mode}
			viewBoxWidth={viewBoxWidth}
			viewBoxHeight={viewBoxHeight}
			assistiveText={assistiveText}
			copyrightYear={copyrightYear}
			{...rest}
		>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M65.8799,20.77 C60.1389,11.822 50.1089,5.875 38.7109,5.875 C27.2289,5.875 17.1349,11.908 11.4139,20.966 L13.2209,22.786 C18.4399,14.158 27.9119,8.377 38.7109,8.377 C55.1239,8.377 68.4779,21.73 68.4779,38.144 C68.4779,54.558 55.1239,67.912 38.7109,67.912 C28.0959,67.912 18.7659,62.322 13.4939,53.936 L11.7039,55.739 C12.0309,56.239 12.3559,56.741 12.7089,57.221 C18.4489,66.175 28.4819,72.125 39.8849,72.125 C57.6769,72.125 72.1519,57.65 72.1519,39.858 C72.1519,32.72 69.8179,26.12 65.8799,20.77"
				/>
				<path
					fill={outline}
					d="M5.9863,23.8462 L5.9863,53.8832 C5.9863,54.1452 6.0913,54.3942 6.2733,54.5782 C6.6553,54.9642 7.2733,54.9642 7.6543,54.5782 L22.5603,39.5592 C22.9423,39.1762 22.9423,38.5532 22.5603,38.1682 L7.6543,23.1492 C7.4703,22.9642 7.2243,22.8622 6.9653,22.8622 C6.4243,22.8622 5.9863,23.3032 5.9863,23.8462"
				/>
				<path
					fill={highlight}
					d="M42.8447,46.6279 C42.3677,47.1899 41.7737,47.5779 41.0717,47.8049 L41.0717,40.6979 C41.9247,41.0129 42.5727,41.4199 42.9877,41.9299 C43.4907,42.5469 43.7417,43.2819 43.7417,44.1349 C43.7417,45.0899 43.4437,45.9199 42.8447,46.6279 M35.8927,32.8389 C35.4857,32.2599 35.2827,31.6319 35.2827,30.9579 C35.2827,30.2189 35.5047,29.5439 35.9497,28.9329 C36.3477,28.3879 36.8727,27.9929 37.5127,27.7319 L37.5127,34.1269 C36.8057,33.7859 36.2597,33.3599 35.8927,32.8389 M46.7597,38.3779 C45.7217,37.1419 43.8187,36.1259 41.0717,35.3219 L41.0717,28.0179 C41.9707,28.5979 42.5627,29.4939 42.8067,30.7469 L47.6387,30.1169 C47.3077,28.2069 46.5427,26.6829 45.3467,25.5439 C44.2657,24.5139 42.8277,23.8709 41.0717,23.5739 L41.0717,21.5799 L40.5147,21.5799 L37.7447,21.5799 L37.5127,21.5799 L37.5127,23.5119 C35.4357,23.7639 33.7517,24.5589 32.4837,25.9249 C31.1657,27.3449 30.5077,29.0989 30.5077,31.1869 C30.5077,33.2489 31.0897,35.0029 32.2547,36.4479 C33.3817,37.8469 35.1387,38.8989 37.5127,39.6119 L37.5127,47.5549 C36.9177,47.2209 36.3687,46.7359 35.8737,46.0829 C35.3137,45.3449 34.9317,44.4659 34.7287,43.4469 L29.7427,43.9819 C30.1247,46.4899 31.0037,48.4319 32.3787,49.8069 C33.7027,51.1309 35.4207,51.9289 37.5127,52.2259 L37.5127,55.7469 L37.7447,55.7469 L40.5147,55.7469 L41.0717,55.7469 L41.0717,52.0759 C43.2857,51.6599 45.0427,50.7299 46.3297,49.2729 C47.7237,47.6929 48.4207,45.7519 48.4207,43.4469 C48.4207,41.3849 47.8667,39.6939 46.7597,38.3779"
				/>
			</g>
		</Pictogram>
	);
};

MoneyInPictogram.propTypes = Pictogram.propTypes;
