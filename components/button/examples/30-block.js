/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>

			<Button appearance="primary" size="xlarge" block>
				Primary extra large block button
			</Button>
			<br />

			<Button appearance="hero" size="large" block>
				Hero large block button
			</Button>
			<br />

			<Button appearance="faint" size="small" block>
				Faint small block button
			</Button>
			<hr />

			<h2>Soft</h2>
			<Button appearance="primary" size="xlarge" soft block>
				Primary extra large soft block button
			</Button>
			<br />

			<Button appearance="hero" size="large" soft block>
				Hero large soft block button
			</Button>
			<br />

			<Button appearance="faint" size="small" soft block>
				Faint small soft block button
			</Button>
		</GEL>
	);
}

export default Example;
