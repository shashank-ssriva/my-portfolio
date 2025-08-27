'use client';

import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import SystemArchitecture from './components/SystemArchitecture';
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';
import Skills from './components/Skills';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<Experience />
			<SystemArchitecture />
			<TechnicalMetrics />
			<Skills />
			<ContactSection />
		</main>
	);
}
