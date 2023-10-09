import { features } from '@/constants/features';

export const Features = () => {
	return (
		<section className='py-14 bg-gradient-radial'>
			<div className='max-w-screen-xl mx-auto px-4 text-center text-slate-600 dark:text-slate-200/80 md:px-8'>
				<div className='max-w-2xl mx-auto'>
					<h3 className='text-slate-800 text-3xl font-semibold sm:text-4xl'>
						The fastest way to launch a product
					</h3>
					<p className='mt-3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						congue, nisl eget molestie varius, enim ex faucibus purus.
					</p>
				</div>
				<div className='mt-12'>
					<ul className='grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3'>
						{features.map((item, idx) => (
							<li
								key={idx}
								className='space-y-3'>
								<div className='w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center'>
									{item.icon}
								</div>
								<h4 className='text-lg text-slate-700 font-bold'>
									{item.title}
								</h4>
								<p>{item.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
