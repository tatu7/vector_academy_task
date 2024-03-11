import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/images/logo.png";
export default function Footer() {
	return (
		<footer>
			<div className='pb-12  md:pb-16'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6'>
					<div className='flex flex-row items-center justify-between md:flex-row mb-8 md:mb-12'>
						<div className='md:col-span-4 lg:col-span-5'>
							<div className=''>
								<Link href='/' className='inline-block' aria-label='Cruip'>
									<Image src={logo} alt=' logo' width={140} height={100} />
								</Link>
								<p className='text-gray-400 text-sm '>info@marico.co</p>
							</div>
						</div>
						<div className='flex flex-row  justify-between md:col-span-8 lg:col-span-7  sm:grid-cols-4 gap-8'>
							<li className='mb-1 list-none'>
								<Link
									href='/#'
									className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'>
									About
								</Link>
							</li>
							<li className='mb-1 list-none'>
								<Link
									href='/#'
									className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'>
									Pricing
								</Link>
							</li>
							<li className='mb-1 list-none'>
								<Link
									href='/#'
									className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'>
									Blog
								</Link>
							</li>
							<li className='mb-1 list-none'>
								<Link
									href='/#'
									className='text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'>
									Sign In
								</Link>
							</li>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
