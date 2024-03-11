import Image from "next/image";
import FeatImage01 from "@/public/images/images/image5.png";
export default function Newsletter() {
	return (
		<section>
			<div className=' mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 '>
					<div
						className='max-w-xl relative md:max-w-none md:w-full mx-auto lg:mb-0'
						data-aos='fade-up'>
						<div
							className='absolute inset-0 flex items-center justify-center p-4'
							style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
							<p className='text-white text-center text-2xl md:text-4xl font-bold'>
								We've helped over 1,000 creators <br /> claim control of their
								audience.
							</p>
						</div>

						{/* Image */}
						<Image
							className='max-w-full mx-auto md:max-w-none h-auto'
							src={FeatImage01}
							objectFit='cover'
							alt='Features background'
							style={{ width: "100%", height: "650px" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
