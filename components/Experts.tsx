import Image from "next/image";
import FeatImage01 from "@/public/images/images/image4.png";
export default function Newsletter() {
	return (
		<section>
			<div className=' mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 '>
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
						<h1 className='h2 mb-4 text-white'>Experts Agree</h1>
					</div>
					<div
						className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
						data-aos='fade-up'>
						<Image
							className='max-w-full mx-auto md:max-w-none h-auto'
							src={FeatImage01}
							style={{ width: "100%" }}
							height={450}
							alt='Features 01'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
