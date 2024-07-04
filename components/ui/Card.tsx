import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface CardProps {
	src: string;
	name: string;
	size: number;
	price: number;
	description: string;
	className?: string
}
export default function Card({
	src,
	name,
	size,
	price,
	description,
	className
}: CardProps) {
	return (
		<div className={twMerge(`flex flex-col w-56 h-80 gap-3 col-span-1 p-4 border rounded-md shadow`, className)}>
			<div className='h-52 w-48 relative rounded-md overflow-hidden'>
				<Image
					src={src}
					alt={`menu item`}
					fill
					className='object-cover'
				/>
			</div>
			<div className='flex gap-2 px-2 text-sm'>
				<span className='bg-gray-200 py-0.5 px-2 rounded-md text-green-700 font-medium '>$ {price} CAD</span>
				<span className='text-green-700 py-0.5 px-2 font-medium'>{size} fl oz</span>
			</div>
			<div className='px-2 text-xs overflow-y-scroll scrollbar'>
				<span className='text-sm font-semibold'>{name} - </span>
				<span className=''>{description}</span>
				
			</div>
		</div>
	);
}
