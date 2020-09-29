/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Svg } from './Svg';

export const MyobLogo = ({ width, height = 'auto', color, ...rest }) => {
	const { COLORS } = useBrand();

	color = color || COLORS.neutral;

	return (
		<Svg viewBox="0 0 90 38" width={90} height={38} css={{ width, height }} {...rest}>
			<title>MYOB logo</title>
			<path
				d="M73.879 0l.003.006c-3.37 0-3.908 2.313-3.97 3.446v25.08l2.385-.002c1.91.04 2.353-1.21 2.373-1.913v-.19c1.497 1.607 3.554 2.526 5.872 2.526 5.053 0 9.17-4.448 9.17-10.277 0-5.867-4.117-10.316-9.17-10.316-2.208 0-4.192.844-5.652 2.301V.001H73.88zm1.011 18.714c0-3.144 2.209-5.675 4.941-5.675 2.732 0 4.94 2.454 4.94 5.675 0 3.145-2.208 5.56-4.94 5.56s-4.94-2.492-4.94-5.56zm-60.068-7.631c-1.385-1.726-3.519-2.8-6.139-2.8C3.406 8.283 0 12.08 0 17.103v11.428h1.61c1.094-.069 3.256-.625 3.33-3.899v-7.644c0-2.224 1.535-3.758 3.743-3.758 3.257 0 3.593 2.646 3.593 3.758v11.543h1.612c1.09-.068 3.24-.622 3.329-3.862v-7.68c0-2.225 1.572-3.759 3.743-3.759 3.256 0 3.63 2.646 3.63 3.758v11.543h1.608c1.1-.069 3.281-.63 3.333-3.95v-7.477c0-5.177-3.182-8.82-8.571-8.82-2.508 0-4.679 1.073-6.138 2.799zm34.066 7.593c0 5.905 4.342 10.316 9.694 10.316 5.352 0 9.731-4.41 9.731-10.316 0-5.906-4.38-10.393-9.731-10.393-5.352 0-9.694 4.487-9.694 10.393zm4.94.038c0-3.413 2.134-5.79 4.754-5.79 2.62 0 4.753 2.377 4.753 5.79 0 3.336-2.133 5.637-4.753 5.637s-4.754-2.3-4.754-5.637zM43.772 10.97l-4.154 11.794L35.1 10.553c-.684-1.933-2.47-1.827-2.47-1.827h-3.847l7.658 19.187-.018-.06c0 .004.014.041.028.079s.028.076.028.079l-.038-.098c.251.78.177 1.215-.052 1.968l-.168.486c-.89 2.268-2.142 2.883-4.81 2.73v.016l1.85 4.637c3.428-.077 6.007-1.223 7.73-5.615l9.217-23.407v-.002l-3.447-.002h-.014c-.185 0-2.148.052-2.975 2.247z"
				fill={color}
				fillRule="evenodd"
				opacity={0.7}
			/>
		</Svg>
	);
};
