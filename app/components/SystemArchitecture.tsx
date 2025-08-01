'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					DevOps Activities & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'AWS API Gateway Automation',
							description: 'Build a Python app to automate the creation of AWS API Gateway resources by reading API information from a Google Sheet',
							details: [
								'Reduced API creation time by 90% - no more fiddling with AWS Console or CLI.',
								'End-to-end automation using Jenkins pipeline',
								'Increased Dev velocity.',
							],
							tech: ['Python', 'Jenkins', 'Groovy', 'Boto3', 'Google Sheets API'],
						},
						{
							title: 'AI based LinkedIn & other profile categorisor and credential issuer',
							description: 'Built an end-to-end AI automation tool that categorises LinkedIn and similar profiles, creates Verix credentials & issues them.',
							details: [
								'One-click automation.',
								'Saved countless man-hours by automating manual processes.',
								'Optimized and enhanced the credential delivery cycle by 99%',
							],
							tech: ['Python', 'OpenAI', 'FastAPI', 'Phantom Buster', 'Google Sheets API', 'MySQL'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
