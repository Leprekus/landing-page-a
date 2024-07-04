import { slides } from '@/sample';
import Container from './Container';
import Card from './ui/Card';
import Link from 'next/link';

export default function MainContent() {
	return (
		<Container>
			<div className='relative flex flex-col items-center justify-center gap-8 md:px-8 md:flex-row md:items-baseline
			
			'>
				{slides.slice(0, 4).map((item) => (
					<Card {...item} key={`${item.src}`} />
				))}
				<div className='absolute bottom-0 h-32 left-0 right-0 bg-gradient-to-t from-zinc-100 to-transparent flex justify-center items-end p-4'>
					<Link href='/menu' className='text-primary hover:underline'>Browse</Link>
				</div>
			</div>
		</Container>
	);
}
