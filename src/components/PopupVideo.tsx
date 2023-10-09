'use client';

import React, { useState } from 'react';
import Video from './Video';
import Image from 'next/image';

const PopupVideo = () => {
	const [isVideoPoppedUp, setVideoPopUp] = useState(false);

	return (
		<>
			<div className='relative'>
				<Image
					src='https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
					className='rounded-lg w-full'
					width={250}
					height={250}
					alt=''
				/>
				<button
					className='absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white'
					onClick={() => setVideoPopUp(true)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						className='w-6 h-6 m-auto'>
						<path d='M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z' />
					</svg>
				</button>
			</div>
			{isVideoPoppedUp ? <Video setVideoPopUp={setVideoPopUp} /> : ''}
		</>
	);
};

export default PopupVideo;
