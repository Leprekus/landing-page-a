import { slides } from '@/sample';
import Container from './Container';
import Card from './ui/Card';
import Link from 'next/link';

export default function MainContent() {
	const item1 = slides[0]
	const item2 = slides[1]
	const item3 = slides[2]
	const item4 = slides[3]
	return (
		<Container>
			<div className='relative flex items-center justify-center gap-8 md:px-8
			
			'>
				<Card className='' { ...item1 }/>
				<Card className='' { ...item2 }/>
				<Card className='hidden md:flex' { ...item3 }/>
				<Card className='hidden lg:flex' { ...item4 }/>
				<div className='absolute bottom-0 h-32 left-0 right-0 bg-gradient-to-t from-zinc-100 to-transparent flex justify-center items-end p-4'>
					<Link href='/menu' className='text-primary hover:underline'>Browse</Link>
				</div>
			</div>
		</Container>
	);
}
