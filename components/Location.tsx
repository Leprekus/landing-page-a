import { MapsLocation } from '@/sample';
import Container from './Container';
import { H1 } from './typography';
export default function Location() {
  return (
	<Container className='flex flex-col justify-center items-center gap-4'>
		<H1 id='Location'>Location</H1>
		{MapsLocation}
	</Container>
  )
}