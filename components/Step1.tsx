import Image from "next/image";
import FeatImage01 from "@/public/images/images/image1.png";
export default function Zigzag() {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 '>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
						<div
							className='inline-flex text-sm font-semibold py-1 px-3 m-2 mb-4'
							style={{ color: "#3D82F2" }}>
							STEP 1
						</div>
						<h1 className='h2 mb-4 text-white'>Connect Your Content</h1>
						<p className='text-xl text-gray-400'>
							Bring all of your content together and get a Homepage that <br />
							automatically updates whenever you create anywhere online.
						</p>
						<div data-aos='fade-up' data-aos-delay='600'>
							<a
								style={{
									backgroundColor: "transparent",
									border: "1px solid #707070",
									borderRadius: "5px",
									color: "#707070",
								}}
								className='btn w-full sm:w-auto sm:ml-4 mt-6'
								href='#'>
								View Avaiable Sources
							</a>
						</div>
					</div>
					<div className='grid gap-20'>
						<div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
								data-aos='fade-up'>
								<Image
									className='max-w-full mx-auto md:max-w-none h-auto'
									src={FeatImage01}
									width={540}
									height={405}
									alt='Features 01'
								/>
							</div>
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
								data-aos='fade-right'>
								<div className='md:pr-4 lg:pr-12 xl:pr-16'>
									<div className=' text-xl text-white mb-6'>Your Homepage</div>
									<h3 className='h3 mb-3'>
										Your Content. <br />
										All in <span style={{ color: "#3C82F4" }}>One Spot</span>
									</h3>

									<ul className='text-lg text-gray-400 -mb-2'>
										<li className='flex items-center mb-2'>
											<div
												className='flex items-center justify-center h-5 w-5 rounded-full text-white mr-4'
												style={{
													backgroundColor: "#2D2D2D",
													fontSize: "10px",
												}}>
												<span className='font-bold'>1</span>
											</div>
											<span
												className='text-lg text-white'
												style={{ fontSize: "16px" }}>
												Bring all of your content together into one homepage.
											</span>
										</li>
										<li className='flex items-center mb-2'>
											<div
												className='flex items-center justify-center h-5 w-5 rounded-full text-white mr-4'
												style={{
													backgroundColor: "#2D2D2D",
													fontSize: "10px",
												}}>
												<span className='font-bold'>2</span>
											</div>
											<span
												className='text-lg text-white'
												style={{ fontSize: "16px" }}>
												Your page automatically updates whenever you create.
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
