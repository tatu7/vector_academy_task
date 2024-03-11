import Image from "next/image";

import phone from "@/public/images/images/image2.png";
export default function Testimonials() {
	return (
		<section id='blog'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 '>
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
						<div
							className='inline-flex text-sm font-semibold py-1 px-3 m-2 mb-4'
							style={{ color: "#3D82F2" }}>
							STEP 2
						</div>
						<h1 className='h2 mb-4 text-white '>Share Your Homepage</h1>
						<p className='text-xl text-gray-400'>
							Share your Wavium homepage link with your followers, and <br />{" "}
							we'll handle the rest.
						</p>
					</div>
					<div className='flex flex-col md:flex-row w-full text-white'>
						<div className='flex-grow md:flex-1 flex flex-col items-center justify-center p-8'>
							<div className='mb-4 text-center md:text-left'>
								<h2 className='text-sm mb-2' style={{ color: "#0FC65C" }}>
									One Link
								</h2>
								<p className='text-2xl md:text-4xl font-bold opacity-50'>
									ALL You Create.
								</p>
								<p className='text-2xl md:text-4xl font-bold'>One Link</p>
								<div className='mt-4'>
									<Image
										className='w-60 md:w-auto h-auto'
										src={phone}
										width={540}
										height={405}
										alt='Phone'
									/>
								</div>
							</div>
						</div>
						<div className='flex-grow md:flex-1 flex flex-col items-center md:items-start bg-gray-900 p-8'>
							<div className='text-center md:text-left'>
								<h2 className='text-sm mb-2' style={{ color: "#0FC65C" }}>
									Collect Subscribers
								</h2>
								<p className='text-2xl md:text-4xl font-bold opacity-50'>
									Emails.
								</p>
								<p className='text-2xl md:text-4xl font-bold opacity-50'>
									Phone #s.
								</p>
								<p className='text-2xl md:text-4xl font-bold'>All Yours.</p>
							</div>
						</div>
					</div>
					<div className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'>
						<div data-aos='fade-up' data-aos-delay='400'>
							<a
								className='btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0'
								style={{ backgroundColor: "#326CF9", borderRadius: "5px" }}
								href='#'>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
