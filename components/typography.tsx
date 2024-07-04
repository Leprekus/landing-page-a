import React from 'react';
import { DM_Serif_Display } from 'next/font/google';

const dmSerifDisplay = DM_Serif_Display({
	weight: '400',
	subsets: ['latin']
 })

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
	variant?: 'primary' | 'secondary' | 'ghost' | 'default';
}

export const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
	({ variant = 'default', ...props }, ref) => {
		const variantStyle = {
			primary: '',
			secondary: '',
			ghost: '',
			default: `text-xl lg:text-4xl font-bold text-primary mx-auto w-fit ${dmSerifDisplay.className}`,
		};
		return (
			<h1
				className={`${variantStyle[variant]} ${props.className || ''}`}
				ref={ref}
				{...props}
			/>
		);
	}
);

H1.displayName = 'H1';
