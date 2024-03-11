import Image from "next/image";
import emaoji1 from "@/public/images/images/emaoji1.png";
import emaoji2 from "@/public/images/images/emaoji2.png";
import emaoji3 from "@/public/images/images/emaoji3.png";
export default function Features() {
	return (
		<section id='use-cases'>
			<div className='max-w-6xl mx-auto  '>
				<div className='py-12 md:py-20'>
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
						<h2 className='h2 mb-4'>Why Creators Love Marico</h2>
					</div>
					<div
						className='max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none'
						data-aos-id-blocks>
						<div
							className='relative flex flex-col items-center'
							data-aos='fade-up'
							data-aos-anchor='[data-aos-id-blocks]'>
							<h4
								className='h4 mb-2 '
								style={{ display: "flex", alignItems: "center" }}>
								<Image
									src={emaoji1}
									alt='emoji1 '
									style={{ height: "24px", width: "24px", marginRight: "4px" }}
								/>
								Reduced Anxiety
							</h4>
							<p className='text-lg text-gray-400 text-center'>
								Never worry about losing your audience.
							</p>
						</div>
						<div
							className='relative flex flex-col items-center'
							data-aos='fade-up'
							data-aos-delay='100'
							data-aos-anchor='[data-aos-id-blocks]'>
							<h4
								className='h4 mb-2'
								style={{ display: "flex", alignItems: "center" }}>
								<Image
									src={emaoji2}
									alt='emoji2 '
									style={{ height: "24px", width: "24px", marginRight: "4px" }}
								/>
								Lower Workload
							</h4>
							<p className='text-lg text-gray-400 text-center'>
								Just share one link. We'll handle the rest.
							</p>
						</div>
						<div
							className='relative flex flex-col items-center'
							data-aos='fade-up'
							data-aos-delay='200'
							data-aos-anchor='[data-aos-id-blocks]'>
							<h4
								className='h4 mb-2'
								style={{ display: "flex", alignItems: "center" }}>
								<Image
									src={emaoji3}
									alt='emoji3 '
									style={{ height: "24px", width: "24px", marginRight: "4px" }}
								/>
								More Time
							</h4>
							<p className='text-lg text-gray-400 text-center'>
								Spend less time on marketing tools
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
