import React from 'react';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'secondary' | 'ghost' | 'primary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = 'primary', ...props }, ref) => {
		
		return (
			<button
				className={`rounded-md py-2 px-4 bg-primary transition-all`}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = 'Button';

export default Button;
