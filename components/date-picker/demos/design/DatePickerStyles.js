import { jsx, Global, css } from '@westpac/core';

// This is a temp fix since for some reason Duet Date Picker doesn't re-add the styles to the page on mount/unmount when switching between tabs in keystone
export const DatePickerStyles = (props) => (
	<Global
		styles={css`
			.duet-date *,
			.duet-date *::before,
			.duet-date *::after {
				box-sizing: border-box;
				margin: 0;
				width: auto;
			}
			.duet-date {
				box-sizing: border-box;
				color: var(--duet-color-text);
				display: block;
				font-family: var(--duet-font);
				margin: 0;
				position: relative;
				text-align: left;
				width: 100%;
			}
			.duet-date__input {
				-webkit-appearance: none;
				appearance: none;
				background: var(--duet-color-surface);
				border: 1px solid var(--duet-color-border, var(--duet-color-text));
				border-radius: var(--duet-radius);
				color: var(--duet-color-text);
				float: none;
				font-family: var(--duet-font);
				font-size: 100%;
				line-height: normal;
				padding: 14px 60px 14px 14px;
				width: 100%;
			}
			.duet-date__input:focus {
				border-color: var(--duet-color-primary);
				box-shadow: 0 0 0 1px var(--duet-color-primary);
				outline: 0;
			}
			.duet-date__input::-webkit-input-placeholder {
				color: var(--duet-color-placeholder);
				opacity: 1;
			}
			.duet-date__input:-moz-placeholder {
				color: var(--duet-color-placeholder);
				opacity: 1;
			}
			.duet-date__input:-ms-input-placeholder {
				color: var(--duet-color-placeholder);
			}
			.duet-date__input-wrapper {
				position: relative;
				width: 100%;
			}
			.duet-date__toggle {
				-moz-appearance: none;
				-webkit-appearance: none;
				-webkit-user-select: none;
				align-items: center;
				appearance: none;
				background: var(--duet-color-button);
				border: 0;
				border-radius: 0;
				border-bottom-right-radius: var(--duet-radius);
				border-top-right-radius: var(--duet-radius);
				box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.1);
				color: var(--duet-color-text);
				cursor: pointer;
				display: flex;
				height: calc(100% - 2px);
				justify-content: center;
				padding: 0;
				position: absolute;
				right: 1px;
				top: 1px;
				user-select: none;
				width: 48px;
				z-index: 2;
			}
			.duet-date__toggle:focus {
				box-shadow: 0 0 0 2px var(--duet-color-primary);
				outline: 0;
			}
			.duet-date__toggle-icon {
				display: flex;
				flex-basis: 100%;
				justify-content: center;
				align-items: center;
			}
			.duet-date__dialog {
				display: flex;
				left: 0;
				min-width: 320px;
				opacity: 0;
				position: absolute;
				top: 100%;
				transform: scale(0.96) translateZ(0) translateY(-20px);
				transform-origin: top right;
				transition: transform 300ms ease, opacity 300ms ease, visibility 300ms ease;
				visibility: hidden;
				width: 100%;
				will-change: transform, opacity, visibility;
				z-index: var(--duet-z-index);
			}
			@media (max-width: 35.9375em) {
				.duet-date__dialog {
					background: var(--duet-color-overlay);
					bottom: 0;
					position: fixed;
					right: 0;
					top: 0;
					transform: translateZ(0);
					transform-origin: bottom center;
				}
			}
			.duet-date__dialog.is-left {
				left: auto;
				right: 0;
				width: auto;
			}
			.duet-date__dialog.is-active {
				opacity: 1;
				transform: scale(1.0001) translateZ(0) translateY(0);
				visibility: visible;
			}
			.duet-date__dialog-content {
				background: var(--duet-color-surface);
				border: 1px solid rgba(0, 0, 0, 0.1);
				border-radius: var(--duet-radius);
				box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
				margin-left: auto;
				margin-top: 8px;
				max-width: 310px;
				min-width: 290px;
				padding: 16px 16px 20px;
				position: relative;
				transform: none;
				width: 100%;
				z-index: var(--duet-z-index);
			}
			@media (max-width: 35.9375em) {
				.duet-date__dialog-content {
					border: 0;
					border-radius: 0;
					border-top-left-radius: var(--duet-radius);
					border-top-right-radius: var(--duet-radius);
					bottom: 0;
					left: 0;
					margin: 0;
					max-width: none;
					min-height: 26em;
					opacity: 0;
					padding: 0 8% 20px;
					position: absolute;
					transform: translateZ(0) translateY(100%);
					transition: transform 400ms ease, opacity 400ms ease, visibility 400ms ease;
					visibility: hidden;
					will-change: transform, opacity, visibility;
				}
				.is-active .duet-date__dialog-content {
					opacity: 1;
					transform: translateZ(0) translateY(0);
					visibility: visible;
				}
			}
			.duet-date__table {
				border-collapse: collapse;
				border-spacing: 0;
				color: var(--duet-color-text);
				font-size: 1rem;
				font-weight: var(--duet-font-normal);
				line-height: 1.25;
				text-align: center;
				width: 100%;
			}
			.duet-date__table-header {
				font-size: 0.75rem;
				font-weight: var(--duet-font-bold);
				letter-spacing: 1px;
				line-height: 1.25;
				padding-bottom: 8px;
				text-decoration: none;
				text-transform: uppercase;
			}
			.duet-date__cell {
				text-align: center;
			}
			.duet-date__day {
				-moz-appearance: none;
				-webkit-appearance: none;
				appearance: none;
				background: transparent;
				border: 0;
				border-radius: 50%;
				color: var(--duet-color-text);
				cursor: pointer;
				display: inline-block;
				font-family: var(--duet-font);
				font-size: 0.875rem;
				font-variant-numeric: tabular-nums;
				font-weight: var(--duet-font-normal);
				height: 36px;
				line-height: 1.25;
				padding: 0 0 1px;
				position: relative;
				text-align: center;
				vertical-align: middle;
				width: 36px;
				z-index: 1;
			}
			.duet-date__day.is-today {
				box-shadow: 0 0 0 1px var(--duet-color-primary);
				position: relative;
				z-index: 200;
			}
			.duet-date__day:hover::before,
			.duet-date__day.is-today::before {
				background: var(--duet-color-primary);
				border-radius: 50%;
				bottom: 0;
				content: '';
				left: 0;
				opacity: 0.06;
				position: absolute;
				right: 0;
				top: 0;
			}
			.duet-date__day[aria-pressed='true'],
			.duet-date__day:focus {
				background: var(--duet-color-primary);
				box-shadow: none;
				color: var(--duet-color-text-active);
				outline: 0;
			}
			.duet-date__day:active {
				background: var(--duet-color-primary);
				box-shadow: 0 0 5px var(--duet-color-primary);
				color: var(--duet-color-text-active);
				z-index: 200;
			}
			.duet-date__day:focus {
				box-shadow: 0 0 5px var(--duet-color-primary);
				z-index: 200;
			}
			.duet-date__day:not(.is-month) {
				box-shadow: none;
			}
			.duet-date__day:not(.is-month),
			.duet-date__day[aria-disabled='true'] {
				background: transparent;
				color: var(--duet-color-text);
				cursor: default;
				opacity: 0.5;
			}
			.duet-date__day[aria-disabled='true'].is-today {
				box-shadow: 0 0 0 1px var(--duet-color-primary);
			}
			.duet-date__day[aria-disabled='true'].is-today:focus {
				box-shadow: 0 0 5px var(--duet-color-primary);
				background: var(--duet-color-primary);
				color: var(--duet-color-text-active);
			}
			.duet-date__day[aria-disabled='true']:not(.is-today)::before {
				display: none;
			}
			.duet-date__day.is-outside {
				background: var(--duet-color-button);
				box-shadow: none;
				color: var(--duet-color-text);
				cursor: default;
				opacity: 0.6;
				pointer-events: none;
			}
			.duet-date__day.is-outside::before {
				display: none;
			}
			.duet-date__header {
				align-items: center;
				display: flex;
				justify-content: space-between;
				margin-bottom: 16px;
				width: 100%;
			}
			.duet-date__nav {
				white-space: nowrap;
			}
			.duet-date__prev,
			.duet-date__next {
				-moz-appearance: none;
				-webkit-appearance: none;
				align-items: center;
				appearance: none;
				background: var(--duet-color-button);
				border: 0;
				border-radius: 50%;
				color: var(--duet-color-text);
				cursor: pointer;
				display: inline-flex;
				height: 32px;
				justify-content: center;
				margin-left: 8px;
				padding: 0;
				transition: background-color 300ms ease;
				width: 32px;
			}
			@media (max-width: 35.9375em) {
				.duet-date__prev,
				.duet-date__next {
					height: 40px;
					width: 40px;
				}
			}
			.duet-date__prev:focus,
			.duet-date__next:focus {
				box-shadow: 0 0 0 2px var(--duet-color-primary);
				outline: 0;
			}
			.duet-date__prev:active:focus,
			.duet-date__next:active:focus {
				box-shadow: none;
			}
			.duet-date__prev:disabled,
			.duet-date__next:disabled {
				cursor: default;
				opacity: 0.5;
			}
			.duet-date__prev svg,
			.duet-date__next svg {
				margin: 0 auto;
			}
			.duet-date__select {
				display: inline-flex;
				margin-top: 4px;
				position: relative;
			}
			.duet-date__select span {
				margin-right: 4px;
			}
			.duet-date__select select {
				cursor: pointer;
				font-size: 1rem;
				height: 100%;
				left: 0;
				opacity: 0;
				position: absolute;
				top: 0;
				width: 100%;
				z-index: 2;
			}
			.duet-date__select select:focus + .duet-date__select-label {
				box-shadow: 0 0 0 2px var(--duet-color-primary);
			}
			.duet-date__select-label {
				align-items: center;
				border-radius: var(--duet-radius);
				color: var(--duet-color-text);
				display: flex;
				font-size: 1.25rem;
				font-weight: var(--duet-font-bold);
				line-height: 1.25;
				padding: 0 4px 0 8px;
				pointer-events: none;
				position: relative;
				width: 100%;
				z-index: 1;
			}
			.duet-date__select-label svg {
				width: 16px;
				height: 16px;
			}
			.duet-date__mobile {
				align-items: center;
				border-bottom: 1px solid rgba(0, 0, 0, 0.12);
				display: flex;
				justify-content: space-between;
				margin-bottom: 20px;
				margin-left: -10%;
				overflow: hidden;
				padding: 12px 20px;
				position: relative;
				text-overflow: ellipsis;
				white-space: nowrap;
				width: 120%;
			}
			@media (min-width: 36em) {
				.duet-date__mobile {
					border: 0;
					margin: 0;
					overflow: visible;
					padding: 0;
					position: absolute;
					right: -8px;
					top: -8px;
					width: auto;
				}
			}
			.duet-date__mobile-heading {
				display: inline-block;
				font-weight: var(--duet-font-bold);
				max-width: 84%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			@media (min-width: 36em) {
				.duet-date__mobile-heading {
					display: none;
				}
			}
			.duet-date__close {
				-webkit-appearance: none;
				align-items: center;
				appearance: none;
				background: var(--duet-color-button);
				border: 0;
				border-radius: 50%;
				color: var(--duet-color-text);
				cursor: pointer;
				display: flex;
				height: 24px;
				justify-content: center;
				padding: 0;
				width: 24px;
			}
			@media (min-width: 36em) {
				.duet-date__close {
					opacity: 0;
				}
			}
			.duet-date__close:focus {
				box-shadow: 0 0 0 2px var(--duet-color-primary);
				outline: none;
			}
			@media (min-width: 36em) {
				.duet-date__close:focus {
					opacity: 1;
				}
			}
			.duet-date__close svg {
				margin: 0 auto;
			}
			.duet-date__vhidden {
				border: 0;
				clip: rect(1px, 1px, 1px, 1px);
				height: 1px;
				overflow: hidden;
				padding: 0;
				position: absolute;
				top: 0;
				width: 1px;
			}
		`}
		{...props}
	/>
);
