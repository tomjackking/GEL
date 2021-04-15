/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';
import { useState } from 'react';

function Example({ brand }) {
	const [selectorValue, setSelectorValue] = useState(['1', '3']);

	const [loneRanger1, setLoneRanger1] = useState(false);
	const [loneRanger2, setLoneRanger2] = useState(true);

	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Selector name="example-default">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Types</h2>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>No next indicator</h2>
			<h3>Radio</h3>
			<Selector name="example-default" nextIndicator={false}>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Default value</h2>

			<h3>Radio</h3>
			<Selector type="radio" name="exmaple-radio-defaultvalue" defaultValue="2">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-defaultvalue" defaultValue={['2', '3']}>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Managed state</h2>

			<h3>Checkbox</h3>
			<p>{selectorValue.toString()}</p>
			<Selector
				type="checkbox"
				name="example-checkbox-defaultvalue"
				value={selectorValue}
				onChange={(value, event) => setSelectorValue(value)}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Option alone with defaultChecked</h2>

			<h3>Radio</h3>
			<Option type="radio" name="example-lone-radio" value="1">
				Here is a label
			</Option>
			<Option type="radio" name="example-lone-radio" value="2" defaultChecked>
				Here is a label
			</Option>
			<Option type="radio" name="example-lone-radio" value="3">
				Here is a label
			</Option>

			<h3>Checkbox</h3>
			<Option type="checkbox" name="example-long-checkbox" value="1">
				Here is a label
			</Option>
			<Option type="checkbox" name="example-long-checkbox" value="2" defaultChecked>
				Here is a label
			</Option>
			<Option type="checkbox" name="example-long-checkbox" value="3" defaultChecked>
				Here is a label
			</Option>

			<hr />

			<h2>Option alone state managed</h2>
			<Option
				value="1"
				checked={loneRanger1}
				onChange={(event) => setLoneRanger1(event.target.checked)}
			>
				Here is a label
			</Option>
			<Option
				value="2"
				checked={loneRanger2}
				onChange={(event) => setLoneRanger2(event.target.checked)}
			>
				Here is a label
			</Option>

			<hr />

			<h2>onChange</h2>

			<h3>Radio</h3>
			<Selector
				type="radio"
				name="example-radio-onchange"
				onChange={(_, value) => console.log(`Selected option ${value}`)}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector
				type="checkbox"
				name="example-checkbox-onchange"
				onChange={(_, value, wasSelected) =>
					console.log(`${wasSelected ? 'De-selected' : 'Selected'} option ${value}`)
				}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>preventDefault</h2>
			<p css={{ fontStyle: 'italic' }}>Checking not implemented</p>

			<h3>Radio</h3>
			<Selector
				type="radio"
				name="example-radio-preventdefault"
				onChange={(event) => {
					event.preventDefault();
					console.log('I have to do all the logic myself now');
				}}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector
				type="checkbox"
				name="example-checkbox-preventdefault"
				onChange={(event) => {
					event.preventDefault();
					console.log('I have to do all the logic myself now');
				}}
			>
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Long lines</h2>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-longlines">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-longlines">
				<Option value="1">Here is a label</Option>
				<Option value="2">Here is a label</Option>
				<Option value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</Option>
			</Selector>
		</GEL>
	);
}

export default Example;
