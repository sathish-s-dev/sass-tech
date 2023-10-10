export default function Contact() {
	return (
		<main className='relative py-10'>
			<div className='relative z-10 max-w-screen-xl mx-auto text-slate-600 sm:px-4 md:px-8'>
				<div className='max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0'>
					<h3 className='dark:text-cyan-200 text-cyan-700 font-semibold'>
						Contact
					</h3>
					<p className='dark:text-white text-slate-950 text-3xl font-semibold sm:text-4xl'>
						Get in touch
					</p>
					<p className='dark:text-slate-300 text-slatee-600'>
						We’d love to hear from you! Please fill out the form bellow.
					</p>
				</div>
				<div className='mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl'>
					<form className='space-y-5'>
						<div>
							<label className='font-medium'>Full name</label>
							<input
								type='text'
								required
								className='w-full mt-2 px-3 py-2 text-slate-500 bg-transparent outline-none border focus:border-slate-800 shadow-sm rounded-lg'
							/>
						</div>
						<div>
							<label className='font-medium'>Email</label>
							<input
								type='email'
								required
								className='w-full mt-2 px-3 py-2 text-slate-500 bg-transparent outline-none border focus:border-slate-800 shadow-sm rounded-lg'
							/>
						</div>
						<div>
							<label className='font-medium'>Phone number</label>
							<div className='relative mt-2'>
								<div className='absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2'>
									<select className='text-sm bg-transparent outline-none rounded-lg h-full'>
										<option>US</option>
										<option>ES</option>
										<option>MR</option>
									</select>
								</div>
								<input
									type='number'
									placeholder='+1 (555) 000-000'
									required
									className='w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-800 shadow-sm rounded-lg'
								/>
							</div>
						</div>
						<div>
							<label className='font-medium'>Message</label>
							<textarea
								required
								className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-slate-800 shadow-sm rounded-lg'></textarea>
						</div>
						<button className='w-full px-4 py-2 text-white font-medium bg-slate-800 hover:bg-slate-700 active:bg-slate-900 rounded-lg duration-150'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
