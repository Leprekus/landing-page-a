import HeroBanner from '@/components/HeroBanner';
import Location from '@/components/Location';
import MainContent from '@/components/MainContent';
import Image from 'next/image';

export default function Home() {
	return <main className='flex flex-col gap-4'>
      <HeroBanner/>
      <MainContent/>
      <Location/>
  </main>;
}
