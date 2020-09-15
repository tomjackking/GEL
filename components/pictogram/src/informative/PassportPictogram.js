import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const PassportPictogram = ({ mode, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[mode];

	return (
		<Pictogram pictogram="PassportPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					fillRule="nonzero"
					d="M53.2601767,43.3907021 C53.2601767,50.8522097 47.3705816,56.9811541 39.908731,57.2599256 C32.0064236,57.5511698 25.5,51.2502881 25.5,43.3907021 C25.5,37.0547482 29.763593,31.6230943 35.7005835,30.0015368 C44.5336541,27.5791985 53.2601767,34.2293857 53.2601767,43.3907021 Z M38.2854178,50.1327663 C37.2655622,50.1731922 36.2556364,50.2700789 35.2649973,50.4222226 C35.4553237,50.9638402 35.6681306,51.4736651 35.901699,51.9470577 C36.6067547,53.3761594 37.4335935,54.3436681 38.2854178,54.792764 L38.2854178,54.792764 Z M40.4747589,50.1327694 L40.4747589,54.7927524 C41.3265785,54.3436409 42.1534288,53.3761158 42.8584087,51.9470771 C43.0919965,51.4735582 43.3048164,50.9637102 43.4951068,50.4222364 C42.5043691,50.2700968 41.4944342,50.1731984 40.4747589,50.1327694 L40.4747589,50.1327694 Z M45.6609684,50.8506897 C45.2699727,52.0313457 44.780582,53.1133341 44.195947,54.0422754 C45.5490601,53.4278961 46.7757985,52.5582847 47.8087096,51.4826554 C47.1144811,51.2413414 46.3971971,51.0303175 45.6609684,50.8506897 Z M33.0991506,50.8507283 C32.3629605,51.0303175 31.6456864,51.241329 30.9514611,51.4826473 C31.9843173,52.5582133 33.2109959,53.427777 34.5641153,54.0421853 C33.9795312,53.1133123 33.4901535,52.0313477 33.0991506,50.8507283 Z M31.9999777,44.4853727 L27.7405281,44.4853727 C27.9141977,46.3461272 28.5293934,48.116432 29.5257111,49.6732394 C30.4876129,49.3050531 31.4910632,48.9921996 32.5266829,48.7372226 C32.2366149,47.3909773 32.0588871,45.9582872 31.9999777,44.4853727 L31.9999777,44.4853727 Z M51.0196487,44.4853727 L46.7600932,44.4853727 C46.7012216,45.9581456 46.5234813,47.3908396 46.2333801,48.737206 C47.2689433,48.9921386 48.2724701,49.3050174 49.234423,49.6732392 C50.2307586,48.1165115 50.8459754,46.346171 51.0196487,44.4853727 L51.0196487,44.4853727 Z M44.5691708,44.4853727 L40.4747589,44.4853727 L40.4747589,47.9420913 C41.6966717,47.9869358 42.9060363,48.1066441 44.0892082,48.2996513 C44.3495473,47.0983625 44.5116795,45.8129022 44.5691708,44.4853727 L44.5691708,44.4853727 Z M38.2854178,44.4853727 L34.1909463,44.4853727 C34.2484381,45.8129224 34.4105719,47.098411 34.6709054,48.2996494 C35.8540407,48.1066441 37.0634457,47.9869348 38.2854178,47.9420906 L38.2854178,47.9420906 L38.2854178,44.4853727 Z M29.5257052,37.1081635 C28.5293796,38.664941 27.9141971,40.4352489 27.7405734,42.2960315 L27.7405734,42.2960315 L32.000024,42.2960315 C32.0588957,40.8232584 32.2366359,39.3905643 32.5267373,38.0441977 C31.4912306,37.7892766 30.4877309,37.4764025 29.5257052,37.1081635 Z M49.2344683,37.1081585 C48.272387,37.4764051 47.2688764,37.7892793 46.23338,38.0441977 C46.5234813,39.3905643 46.7012216,40.8232584 46.7600932,42.2960315 L46.7600932,42.2960315 L51.0196498,42.2960315 C50.8459818,40.4352297 50.2307856,38.6649211 49.2344683,37.1081585 Z M44.089206,38.4816831 C42.9057485,38.6747203 41.6963481,38.7944549 40.4747589,38.8392668 L40.4747589,38.8392668 L40.4747589,42.2959721 L44.5691708,42.2959721 C44.5116793,40.9684388 44.3495464,39.6829748 44.089206,38.4816831 Z M34.6709086,38.4816952 C34.4105698,39.6829835 34.2484377,40.9684432 34.1909464,42.2959721 L34.1909464,42.2959721 L38.2854178,42.2959721 L38.2854178,38.8392693 C37.0636388,38.7944603 35.8542599,38.6747399 34.6709086,38.4816952 Z M40.4747589,31.9886747 L40.4747589,36.6485922 C41.494204,36.6081968 42.5041184,36.5112993 43.495108,36.359146 C43.3048382,35.817722 43.0920234,35.3079006 42.8584127,34.8343352 C42.1534451,33.4053214 41.3266006,32.4378134 40.4747589,31.9886747 L40.4747589,31.9886747 Z M38.2854178,31.9886345 C37.433576,32.4377265 36.6067571,33.4052249 35.901768,34.8343271 C35.6681828,35.3078408 35.455365,35.8176828 35.2650762,36.35915 C36.256021,36.5112987 37.2659564,36.6081967 38.2854178,36.6485922 L38.2854178,36.6485922 Z M44.1959399,32.7391033 C44.7805118,33.6679586 45.269889,34.7499077 45.6609545,35.9306223 C46.3972309,35.7510215 47.1145184,35.5400272 47.8087148,35.2987392 C46.7758291,34.2231116 45.5490972,33.3535059 44.1959399,32.7391033 Z M34.5641878,32.7391229 C33.2110099,33.35354 31.9842887,34.2231219 30.9514498,35.2986935 C31.6456814,35.5400144 32.3629624,35.7510281 33.0991597,35.9306187 C33.4902131,34.7499114 33.9795742,33.6680164 34.5641878,32.7391229 Z"
				/>
				<path
					fill={outline}
					fillRule="nonzero"
					d="M49.540827,1 L49.5408957,3.63339663 C49.540902,3.74818663 49.5409086,3.86150497 49.5409156,3.97337051 L49.5418871,10.0842212 C49.541901,10.1332957 49.5419147,10.1814078 49.5419284,10.2285766 L49.5419769,12.5544138 C49.5419554,12.5571307 49.5419332,12.5596212 49.5419101,12.5619042 L49.5411897,12.5865075 L49.5411897,12.5865075 L49.540827,12.5870169 L57.5227111,12.5870169 C60.8364196,12.5870169 63.5227111,15.2733084 63.5227111,18.5870169 L63.5227111,18.5870169 L63.5227111,68.4921897 C63.5227111,71.8058982 60.8364196,74.4921897 57.5227111,74.4921897 L57.5227111,74.4921897 L14.866914,74.4921897 L14.866914,12.5870169 C14.8726413,12.5861981 16.2125227,12.1391713 18.8865583,11.2459365 L19.3722963,11.0836749 C21.3706457,10.4161009 24.0337639,9.5261949 27.361651,8.41395688 L28.2074722,8.13126546 C33.6520518,6.31155097 40.7631701,3.93446248 49.540827,1 L49.540827,1 Z M57.5227111,16.5867908 L18.8674158,16.5867908 L18.8674158,70.4921897 L57.5227111,70.4921897 C58.5770729,70.4921897 59.4408762,69.6763119 59.5172253,68.6414521 L59.5172253,68.6414521 L59.5227111,68.4921897 L59.5227111,18.5870169 C59.5227111,17.4824474 58.6272806,16.5867908 57.5227111,16.5867908 L57.5227111,16.5867908 Z M49.9529824,61.9446296 L49.9529824,66.1475282 L27.385918,66.1475282 L27.385918,61.9446296 L49.9529824,61.9446296 Z M49.9529824,21.3973811 L49.9529824,25.6002796 L27.385918,25.6002796 L27.385918,21.3973811 L49.9529824,21.3973811 Z"
				/>
			</g>
		</Pictogram>
	);
};

PassportPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Passport',
};
PassportPictogram.propTypes = propTypes;
