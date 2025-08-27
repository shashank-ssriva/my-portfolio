'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built a system for Virtualness (now Verix) that handled more than 9 million monthly users.</li>
									<li>• Enabled 99.99% availability for critical apps, systems & APIs.</li>
									<li>• Worked on Paytm FASTag infrastructure to power more than 20 million customers.</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Observability</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built comprehensive observability systems enabling both proactive & reactive monitoring.</li>
									<li>• Implemented efficient database monitoring to identify DB specific bottlenecks.</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Cloud & other Infrastructure</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Reduced total AWS costs by more than $150K (across all projects).</li>
									<li>• Single-handedly set up the entire Verix & Paytm FASTag cloud infrastructure from scratch.</li>
									<li>• Helped Verix achieve ISO 27001, SOC 2, GDPR, FERPA, CCPA, and HIPAA compliances.</li>
									<li>• Single-handedly set up the entire Linux infrastructure for SAS (Scandinavian Airlines) from scratch.</li>
									<li>• Led Paytm FASTag AWS cloud migration, infrastructure automation, and performance optimization.</li>
									<li>• Significantly enhanced API Gateway operations.</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CI/CD Pipeline</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Enabled one-click fully automated deployments with notifications, powering mutiple daily releases.</li>
									<li>• Reduced deployment & release time by 75%.</li>
									<li>• Wrote code for automated testing of critical APIs.</li>
									<li>• Enabled DevOps "shift-left" methodology by integrating numerous SAST/DAST tools with the pipeline.</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Development & Leadership</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Coding & Governance</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built & managed numerous tools, apps, slackbots & APIs.</li>
									<li>• Established compliance & security standards.</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Team Impact</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Led high-pace DevOps teams at Paytm & Xebia.</li>
									<li>• Created 100+ technical documentation guides/SOPs.</li>
									<li>• Mentored more than 100 DevOps interns & Engineers.</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
