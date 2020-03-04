/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';
import { HouseIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const AssistiveText = ({ children, look }) => (
	<span css={{ verticalAlign: 'middle' }}>{children}</span>
);

const Icon = ({ current, assistiveText, ...props }) => <HouseIcon {...props} />;

export default ({ context, showCode, showDemo }) => {
	const overridesWithTokens = {};
	overridesWithTokens['@westpac/breadcrumb'] = {
		Breadcrumb: {
			styles: styles => ({
				...styles,
				outline: '1px solid red',
			}),
		},
		Icon: {
			component: Icon,
		},
		AssistiveText: {
			component: AssistiveText,
		},
	};

	return (
		<Playground
			context={context}
			showCode={showCode}
			showDemo={showDemo}
			brand={overridesWithTokens}
		>
			<Intopia ignore />
			<h2>With overrides applied</h2>
			<Breadcrumb>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb href="#/credit-cards/" text="Credit cards" />
			</Breadcrumb>

			<hr />

			<Breadcrumb
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>

			<h2>With overrides and component overrides</h2>
			<Breadcrumb
				overrides={{
					Crumb: {
						styles: styles => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb href="#/credit-cards/" text="Credit cards" />
			</Breadcrumb>

			<hr />

			<Breadcrumb
				overrides={{
					Crumb: {
						styles: styles => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>
		</Playground>
	);
};
