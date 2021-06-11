/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormGroup>
					<Field
						label="Email address"
						hint="Make sure your email address is correct as we will use it to confirm your account"
						error="Enter a valid email address"
					>
						<TextInput type="email" size="large" width={30} invalid />
					</Field>
				</FormGroup>
			</Form>
		</Playground>
	);
};

export default Demo;