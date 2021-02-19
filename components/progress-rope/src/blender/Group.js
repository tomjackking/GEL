/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { blenderGroup } from '../overrides/group';
import { blenderGroupButtonWrapper } from '../overrides/groupButtonWrapper';
import { blenderGroupButton } from '../overrides/groupButton';
import { blenderGroupList } from '../overrides/groupList';

// ==============================
// Component
// ==============================

export const Group = ({ index, id, text, active, visited, open, children, ...rest }) => {
	const { component: Group, styles: groupStyles, attributes: groupAttributes } = blenderGroup;
	const {
		component: GroupButtonWrapper,
		styles: groupButtonWrapperStyles,
		attributes: groupButtonWrapperAttributes,
	} = blenderGroupButtonWrapper;
	const {
		component: GroupButton,
		styles: groupButtonStyles,
		attributes: groupButtonAttributes,
	} = blenderGroupButton;
	const {
		component: GroupList,
		styles: groupListStyles,
		attributes: groupListAttributes,
	} = blenderGroupList;

	const state = {
		id,
		text,
		active,
		visited,
		open,
	};

	return (
		<Group {...rest} state={state} {...groupAttributes(null, state)} css={groupStyles(null, state)}>
			<GroupButtonWrapper
				state={state}
				{...groupButtonWrapperAttributes(null, state)}
				css={groupButtonWrapperStyles(state)}
			>
				<GroupButton
					state={state}
					{...groupButtonAttributes(null, state)}
					css={groupButtonStyles(state)}
				>
					{text}
				</GroupButton>
			</GroupButtonWrapper>
			<GroupList state={state} {...groupListAttributes(null, state)} css={groupListStyles(state)}>
				{children}
			</GroupList>
		</Group>
	);
};

// ==============================
// Types
// ==============================

Group.propTypes = {
	/**
	 * Group id
	 */
	id: PropTypes.string,

	/**
	 * Group text
	 */
	text: PropTypes.string,

	/**
	 * Is an active group
	 */
	active: PropTypes.bool.isRequired,

	/**
	 * If group is visited
	 */
	visited: PropTypes.bool.isRequired,

	/**
	 * If group is open
	 */
	open: PropTypes.bool.isRequired,

	/**
	 * Panel body content
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	active: false,
	visited: false,
	open: false,
};

Group.defaultProps = defaultProps;
