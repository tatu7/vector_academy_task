"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const trigger = useRef<HTMLButtonElement>(null);
	const mobileNav = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const clickHandler = ({ target }: { target: EventTarget | null }): void => {
			if (!mobileNav.current || !trigger.current) return;
			if (
				!mobileNavOpen ||
				mobileNav.current.contains(target as Node) ||
				trigger.current.contains(target as Node)
			)
				return;
			setMobileNavOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	useEffect(() => {
		const keyHandler = ({ keyCode }: { keyCode: number }): void => {
			if (!mobileNavOpen || keyCode !== 27) return;
			setMobileNavOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<div className='md:hidden'>
			<button
				ref={trigger}
				className={`hamburger ${mobileNavOpen && "active"}`}
				aria-controls='mobile-nav'
				aria-expanded={mobileNavOpen}
				onClick={() => setMobileNavOpen(!mobileNavOpen)}>
				<span className='sr-only'>Menu</span>
				<svg
					className='w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<rect y='4' width='24' height='2' rx='1' />
					<rect y='11' width='24' height='2' rx='1' />
					<rect y='18' width='24' height='2' rx='1' />
				</svg>
			</button>
			<nav
				id='mobile-nav'
				ref={mobileNav}
				className='absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out'
				style={
					mobileNavOpen
						? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
						: { maxHeight: 0, opacity: 0.8 }
				}>
				<ul className='bg-gray-800 px-4 py-2 flex grow justify-end flex-wrap flex-col items-center gap-8'>
					<li
						className='text-white '
						onClick={() => setMobileNavOpen(!mobileNavOpen)}>
						<Link href='/#use-cases'>Use cases</Link>
					</li>
					<li
						className='text-white '
						onClick={() => setMobileNavOpen(!mobileNavOpen)}>
						<Link href='/#about'>About</Link>
					</li>
					<li
						className='text-white'
						onClick={() => setMobileNavOpen(!mobileNavOpen)}>
						<Link href='/#pricing'>Pricing</Link>
					</li>
					<li
						className='text-white'
						onClick={() => setMobileNavOpen(!mobileNavOpen)}>
						<Link href='/#blog'>Blog</Link>
					</li>
					<li>
						<Link
							href='/#'
							style={{ color: "#707070" }}
							className='font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
							Log in
						</Link>
					</li>
					<li>
						<Link
							style={{ backgroundColor: "#326CF9", borderRadius: "5px" }}
							href='/#'
							className='btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3'>
							Sign Up
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
