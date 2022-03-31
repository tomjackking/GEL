/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				Lorem ipsum dolor{' '}
				<Link href="#" type="inline">
					Look, I’m an inline link
				</Link>{' '}
				sit amet consectetur, adipisicing elit. Libero facilis odit voluptate reprehenderit laborum
				numquam ex optio doloribus magni repudiandae vero fugiat iusto tempora debitis sunt
				laboriosam nobis, ut voluptatum?
			</p>
		</Playground>
	);
};

export default Demo;
