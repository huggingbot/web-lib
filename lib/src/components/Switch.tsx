
import	React, {ReactElement}		from	'react';
import	{Switch as HeadlessSwitch}	from	'@headlessui/react';

export type TSwitch = {
	isEnabled: boolean;
	onSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

function Switch({isEnabled, onSwitch}: TSwitch): ReactElement {
	return (
		<div>
			<HeadlessSwitch
				checked={isEnabled}
				onChange={onSwitch}
				onKeyDown={({keyCode}: {keyCode: number}) => keyCode === 13 ? onSwitch(s => !s) : null}
				className={`${isEnabled ? 'bg-secondary-variant' : 'bg-surface'}
				relative flex h-6 w-[42px] border border-primary rounded-full cursor-pointer transition-colors ease-in-out duration-200 p-0 items-center`}
			>
				<span className={'sr-only'}>{'Use setting'}</span>
				<span
					aria-hidden={'true'}
					className={`${isEnabled ? 'translate-x-4' : 'translate-x-0'} mx-1 pointer-events-none inline-block h-4 w-4 rounded-full bg-primary transition ease-in-out duration-200 transform`}
				/>
			</HeadlessSwitch>
		</div>
	);
}

export {Switch};