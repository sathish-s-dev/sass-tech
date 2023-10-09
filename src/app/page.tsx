import { Features } from '@/components/FeatureSection';
import { Hero } from '@/components/Hero';
import Pricing from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
	return (
		<main className=''>
			<Hero />
			<Features />
			<Pricing />
			<Testimonials />
		</main>
	);
}
