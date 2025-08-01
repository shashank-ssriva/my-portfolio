'use client';

import { motion } from 'framer-motion';

export default function Experience() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Experience
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Verix (DevSecOps Lead & CISO)',
							description: 'Verix is a blockchain and AI-powered authentication platform trusted by companies like Netflix, Meta, and Pepsi to verify credentials and combat fraud. At Verix, I own the cloud and DevSecOps strategy, as well as serve as acting CISO.',
							details: [
								'Designed and deployed secure, scalable infrastructure across AWS, GCP, and Azure to support a platform serving 9M+ monthly users; ensured compliance with ISO 27001, SOC 2, GDPR, FERPA, CCPA, and HIPAA.',
								'Scaled Kubernetes (EKS, AKS, GKE) and provisioned RDS/CloudSQL clusters to support high-availability microservices with 99.99% uptime, PCI-DSS compliance, and sub-second query performance.',
								'Defined DevSecOps roadmap for engineering org with infra hardening, penetration testing, and policy automation — significantly reducing security risks',
								'Developed internal tooling using Python, including Slack bots, RAG-based knowledge retrieval apps, and MCP server utilities — streamlining engineering workflows and boosting team responsiveness.',
							],
							tech: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Helm', 'Jenkins', 'MySQL', 'PostgreSQL', 'Redis', 'Python'],
						},
						{
							title: 'Paytm (Principal Engineer',
							description: 'Paytm is one of India’s largest fintech platforms, with 300M+ users and a $2B+ annual revenue run rate. As a Principal Engineer, I led a team of 8 DevOps engineers and drove cloud migration, infrastructure automation, and performance optimization for FASTag — a tolling platform used by 20M+ customers.',
							details: [
								'Led end-to-end migration of FASTag infrastructure from on-prem to AWS, improving scalability, compliance, and performance.',
								'$9K/month cloud cost savings through Kubernetes-based optimization and right-sizing workloads.',
								'Architected & managed large ELK, Redis, Kafka clusters for real-time log processing, caching, and stream processing at scale.',
								'Mentored 100+ interns and DevOps engineers; led tech interviews and training programs internally.',
							],
							tech: ['Node', 'Java', 'AWS', 'Prometheus', 'Grafana', 'Python', 'MySQL', 'Kafka', 'Redis', 'Elasticsearch', 'Docker', 'Kubernetes'],
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
