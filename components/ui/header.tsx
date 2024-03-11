import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import logo from "@/public/images/images/logo.png";
export default function Header() {
	return (
		<header className=' w-full z-30 fixed bg-gray-900'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='flex items-center justify-between h-20'>
					<div className='shrink-0 mr-4'>
						<Link href='/' className='block' aria-label='Cruip'>
							<Image src={logo} alt=' logo' width={120} height={80} />
						</Link>
					</div>
					<nav className='hidden md:flex md:grow'>
						<ul className='flex grow justify-end flex-wrap items-center gap-8'>
							<li className='text-white '>
								<Link href='/#'>Use Cases</Link>
							</li>
							<li className='text-white '>
								<Link href='/#'>About</Link>
							</li>
							<li className='text-white '>
								<Link href='/#'>Pricing</Link>
							</li>
							<li className='text-white'>
								<Link href='/#'>Blog</Link>
							</li>
						</ul>
					</nav>
					<div className='hidden md:flex md:grow justify-end'>
						<Link
							href='/#'
							style={{ color: "#707070" }}
							className='font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
							Log in
						</Link>
						<Link
							style={{ backgroundColor: "#326CF9", borderRadius: "5px" }}
							href='/#'
							className='btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3'>
							Sign Up
						</Link>
					</div>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
