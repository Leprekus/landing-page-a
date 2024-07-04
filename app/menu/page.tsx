import Container from '@/components/Container';
import { H1 } from '@/components/typography';
import Card from '@/components/ui/Card';
import { slides } from '@/sample';

export default function MenuPage() {
  return (
	<Container className='space-y-8 flex flex-col justify-center'>
    <H1>Menu</H1>
    <div className='grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-8 gap-8 mx-auto'>
      {
        slides.map((item) => (
          <Card  {...item} key={`${item.src}`} />
        ))}
      
    </div>
  </Container>
  )
}