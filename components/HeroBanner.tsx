import { heroBannerLink } from '@/sample';
import { CSSProperties } from 'react';
import Button from './ui/Button';
import Link from 'next/link';

export default function HeroBanner() {
	const heroBannerStyle: CSSProperties = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		minHeight: 'calc(100vh - 112px)', //navbar height 80 + py-4 32
		background: `url(${heroBannerLink}) no-repeat center center/cover`,
		color: '#fff',
		padding: '20px',
	
	};

	return <div className='rounded-md'  style={heroBannerStyle}>
		<Link href='/#Location'>
		<Button>
				Location
		</Button>
		</Link>
	</div>;
}
