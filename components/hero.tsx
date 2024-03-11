import "./style.css";
import Image from "next/image";
import Image01 from "@/public/images/images/Dot.png";
export default function Hero() {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
				<div
					className='absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none'
					aria-hidden='true'
					data-aos='fade-up'
					data-aos-delay='400'></div>
				<div className='relative pt-32 pb-10 md:pt-40 md:pb-16'>
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
						<h1 className='h1 mb-4' data-aos='fade-up'>
							Own your audience.
							<br />
							<span className='gradien_text'>So you don't lost them.</span>
						</h1>
						<p
							className='text-xl text-white mb-8 '
							style={{ fontWeight: "600" }}
							data-aos='fade-up'
							data-aos-delay='200'>
							Turn your audience into email and <br /> text message subscribers.
						</p>
						<div className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'>
							<div data-aos='fade-up' data-aos-delay='400'>
								<a
									className='btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0'
									style={{ backgroundColor: "#326CF9", borderRadius: "5px" }}
									href='#'>
									Get Started Now
								</a>
							</div>
							<div data-aos='fade-up' data-aos-delay='600'>
								<a
									style={{
										backgroundColor: "transparent",
										border: "1px solid #707070",
										borderRadius: "5px",
										color: "#707070",
									}}
									className='btn w-full sm:w-auto sm:ml-4'
									href='#'>
									View A Demo
								</a>
							</div>
						</div>
						<div className=' max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-4'>
							<span className='text-xl' style={{ color: "#707070" }}>
								<b style={{ color: "#fff", position: "relative" }}>
									<Image
										src={Image01}
										alt='Dot'
										width={24}
										height={24}
										style={{
											position: "absolute",
											left: "-30px",
											top: "1px",
										}}
									/>
									1000+
								</b>{" "}
								creators have already started
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
