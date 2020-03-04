/** @jsx jsx */

import { jsx } from '@westpac/core';
import * as components from '@westpac/symbol';
import { Cell, Grid, Name } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const symbols = Object.keys(components).filter(s => s.includes('Symbol'));

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<Grid>
				{symbols.map(s => {
					const Symbol = components[s];
					return (
						<Cell key={s}>
							<Symbol />
							<Name>{s}</Name>
						</Cell>
					);
				})}
			</Grid>
		</Playground>
	);
};
