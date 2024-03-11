export const metadata = {
	title: "Jo'raqo'zi- Vector IT academy",
	description: " this website created by Jo'raqo'zi",
};

import Hero from "@/components/hero";
import FooterHero from "@/components/foooterHero";
import Features from "@/components/features";
import Experts from "@/components/Experts";
import Users from "@/components/users";
import Step1 from "@/components/Step1";
import Step3 from "@/components/Step3";
import Step2 from "@/components/Step2";

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Step1 />
			<Step2 />
			<Step3 />
			<Experts />
			<Users />
			<FooterHero />
		</>
	);
}
