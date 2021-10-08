/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { defaultFieldset } from './overrides/fieldset';
import { ErrorMessage } from './ErrorMessage';
import { FormLabel } from './FormLabel';
import { Hint } from './Hint';

import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Fieldset = ({
	instanceId,
	legend,
	hint,
	error,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [id, setId] = useState(instanceId);
	const [ariaDescribedByValue, setAriaDescribedByValue] = useState();

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instanceId) {
			setId(`gel-fieldset-${useInstanceId()}`);
		}
	}, [instanceId]);

	useEffect(() => {
		const arr = [...(hint ? [`${id}-hint`] : []), ...(error ? [`${id}-error`] : [])];
		setAriaDescribedByValue(arr.join(' '));
	}, [id, hint, error]);

	const defaultOverrides = {
		Fieldset: defaultFieldset,
	};

	const state = {
		id,
		legend,
		hint,
		error,
		ariaDescribedByValue,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Fieldset: { component: Fieldset, styles: fieldsetStyles, attributes: fieldsetAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Fieldset state={state} {...fieldsetAttributes(state)} css={fieldsetStyles(state)} {...rest}>
			<FormLabel tag="legend" overrides={componentOverrides}>
				{legend}
			</FormLabel>
			{hint && (
				<Hint id={`${id}-hint`} overrides={componentOverrides}>
					{typeof hint === 'function' ? hint() : hint}
				</Hint>
			)}
			{error && <ErrorMessage id={`${id}-error`} message={error} overrides={componentOverrides} />}
			{children}
		</Fieldset>
	);
};

// ==============================
// Types
// ==============================

Fieldset.propTypes = {
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * Legend text
	 */
	legend: PropTypes.string,

	/**
	 * Hint text
	 */
	hint: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * Error message text
	 */
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Fieldset: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Legend: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Hint: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ErrorList: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ErrorListItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Fieldset.defaultProps = {};
