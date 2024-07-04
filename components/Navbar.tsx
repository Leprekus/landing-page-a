import { navItems } from '@/sample';
import Link from 'next/link';
import { DM_Serif_Display } from 'next/font/google';
const dmSerifDisplay = DM_Serif_Display({
	weight: '400',
	subsets: ['latin']
 })
export default function Navbar() {
	return (
			<nav className={`bg-zinc-100 rounded-md h-20 flex items-center justify-center gap-4 uppercase ${dmSerifDisplay.className }`}>
				{navItems.map((item) => (
					<Link className='transition-all hover:text-gray-600' key={item.title} href={item.href}>
						{item.title}
					</Link>
				))}
			</nav>
	);
}
