import React, {ReactElement} from 'react';
import {Disclosure, Transition, Tab} from '@headlessui/react';
import IconChevron from '../icons/IconChevron';
import * as CardTypes from './Card.d';

function	CardDetailsSummary({startChildren, endChildren, ...props}: CardTypes.TCardDetailSummary): ReactElement{
	return (
		<div className={'flex flex-col justify-between items-start p-6 w-full rounded-lg cursor-pointer md:flex-row md:items-center'} {...props}>
			<div className={'w-fit'}>
				{startChildren}
			</div>
			<div className={'flex flex-row items-center mt-4 w-full md:mt-0'}>
				{endChildren}
				<div className={'ml-auto'}>
					<IconChevron
						className={`w-6 h-6 text-primary transition-transform ${props.open ? '-rotate-90' : '-rotate-180'}`} />
				</div>
			</div>
		</div>
	);
}

function	CardDetails({summary, variant = 'background', isSticky = true, children}: CardTypes.TCardDetail): ReactElement {
	return (
		<Disclosure>
			{({open}): ReactElement => (
				<div className={`overflow-hidden w-full cursor-pointer ${variant === 'background' ? 'bg-background' : 'bg-surface'} shadow-none rounded-lg p-0`}>
					<Disclosure.Button as={'div'} className={`rounded-lg transition-colors ${variant === 'background' ? 'bg-background' : 'bg-surface'} ${open ? '' : 'hover:bg-surface-variant'} ${isSticky ? 'relative md:sticky top-0' : ''}`}>
						{summary}
					</Disclosure.Button>
					<Transition
						as={React.Fragment}
						show={open}
						enter={'transition duration-100 ease-out origin-top'}
						enterFrom={'transform scale-y-0 opacity-0 origin-top'}
						enterTo={'transform scale-y-100 opacity-100 origin-top'}
						leave={'transition ease-out origin-top'}
						leaveFrom={'transform scale-y-100 opacity-100 origin-top'}
						leaveTo={'transform scale-y-0 opacity-0 origin-top'}>
						<Disclosure.Panel static className={`px-6 pb-6 w-full ${variant === 'background' ? 'bg-background' : 'bg-surface'}`}>
							{children}
						</Disclosure.Panel>
					</Transition>
				</div>
			)}
		</Disclosure>
	);
}

function	CardWithTabs({tabs}: CardTypes.TCardWithTabs): ReactElement {
	return (
		<div>
			<Tab.Group>
				<Tab.List as={Card} className={'flex flex-row w-full rounded-b-none'} hasNoPadding>
					{tabs.map((option: CardTypes.TCardWithTabsOption): ReactElement => (
						<Tab
							key={option.label}
							as={'div'}
							className={({selected}): string => `w-full h-20 border-b-2 flex-center cursor-pointer ${selected ? 'border-primary text-primary font-bold' : 'border-disabled transition-colors cursor-pointer hover:bg-background text-typo-secondary'}`}>
							<p className={'text-lg text-center'}>{option.label}</p>
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels as={Card} className={'grid grid-cols-2 gap-x-4 w-full rounded-t-none'}>
					{tabs.map((option: CardTypes.TCardWithTabsOption): ReactElement => (
						<Tab.Panel key={option.label} as={React.Fragment}>
							{option.children}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

function	CardBase({
	children,
	onClick,
	isNarrow,
	hasNoPadding,
	variant = 'surface',
	className,
	...props
}: CardTypes.TCard): ReactElement {
	return (
		<section
			className={`${className ?? ''} ${variant === 'background' ? 'bg-background' : 'bg-surface'} shadow-none rounded-lg ${hasNoPadding ? 'p-0' : isNarrow ? 'p-2 md:p-4' : 'p-4 md:p-6'} transition-all ${onClick ? 'cursor-pointer hover:bg-surface-variant shadow-lg' : ''}`}
			{...props}>
			{children}
		</section>
	);
}

export const Card = Object.assign(CardBase, {
	Detail: Object.assign(CardDetails, {Summary: CardDetailsSummary}),
	Tabs: CardWithTabs
});