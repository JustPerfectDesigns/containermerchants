import React from "react";
import bg from "../../public/images/about-bg.png";

const AboutUsPage = () => {
	return (
		<div className="mt-20">
			<div className="ml-5 mr-5 md:container">
				<h2 className="font-bold text-2xl md:text-[26px] lg:text-4xl md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto">
					About us
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Established in 2002, Container Merchant has built a strong reputation
					for delivering cost-effective and reliable shipping container
					solutions for construction and various industries. This success has
					fueled substantial and sustained company growth, fostering a dedicated
					team of skilled and qualified professionals.
					<br />
					<br />
					Servicing clients across South Africa and facilitating container sales
					and conversions globally, Container Merchant possesses the expertise
					and product range to address diverse portable storage and construction
					needs. Leveraging our own fleet of specialized delivery vehicles,
					operated by trained in-house drivers, we ensure not only top-tier
					products but also exceptional customer service—from the initial order
					to delivery and installation. Whether you&apos;re an individual
					seeking a single construction container or a multinational corporation
					in need of multiple units for various applications, we are committed
					to upholding the highest professional standards. We boast national and
					international accreditations, alongside robust systems and policies
					benefiting our team, customers, and suppliers. As our project
					portfolio expands, we readily submit Pre-Qualification Questionnaires
					(PQQ) when required.
					<br />
					<br />
					For a more comprehensive understanding of our vision, policies, and
					dedication to our stakeholders, please explore the detailed
					information below.
				</p>
			</div>
			<div
				style={{
					// use the src property of the image object
					backgroundImage: `url(${bg.src})`,
					// other styles
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				className="mt-20 lg:mt-40"
			>
				<div className="h-[26rem] md:h-[34rem] lg:h-[40rem] w-full"></div>
			</div>

			<div className="ml-5 mr-5 md:container mt-20 lg:mt-40">
				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto">
					Quality Management – Business Management System (BMS)
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Discover our Vision & Mission Statement
					<br />
					We take great pride in our Business Management System (BMS),
					encompassing quality, environmental, and health and safety processes
					designed to meet ISO 9001:2015 (Quality), ISO 14001:2015
					(Environment), and ISO 45001:2018 (Health and Safety) standards, or
					any other standard aligned with Annex SL Structure.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Health & Safety{" "}
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					At Container Merchant, we are steadfast in ensuring the health,
					safety, and welfare of all employees. We establish necessary
					procedures and systems to achieve this goal, providing a secure
					working environment, safe access, and well-maintained equipment and
					systems. Our commitment extends to health and safety in the handling,
					storage, and transport of materials. We prioritize information,
					instructions, training, and supervision to ensure the well-being of
					our team and others in the workplace. Container Merchant also
					acknowledges its responsibility to safeguard the health and safety of
					customers, visitors, and contractors affected by our work.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Corporate Social Responsibility{" "}
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Recognizing the integration of business values with societal and
					environmental expectations, Container Merchant aligns its operations
					with the interests of customers, employees, regulators, suppliers, the
					local community, and the environment. Our commitment to sustainable
					development is evident in our transparent communication of strategies,
					targets, performance, and governance to stakeholders. We take all
					feedback seriously as part of our ongoing commitment to responsible
					business practices.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Equality and Diversity Policy{" "}
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Container Merchant operates as an equal opportunity employer,
					committed to treating all employees and job applicants fairly. We
					avoid unlawful discrimination in all aspects of employment, from
					recruitment and promotion to training, pay, and benefits. Our
					commitment extends to creating a work environment where employment
					decisions are based on experience, abilities, and qualifications,
					without regard to various factors such as age, disability, gender,
					race, religion, or sexual orientation. Breaches of our equal
					opportunities policy are subject to action under the Company’s
					disciplinary procedure.
				</p>

				<h2 className="font-bold text-[22px] md:text-[24px] lg:text-[30px] md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center mx-auto mt-12 md:mt-14 lg:mt-20">
					Sustainable Procurement Policy{" "}
				</h2>
				<p className="text-center lg:w-3/4 lg:mx-auto mt-8">
					Container Merchant actively challenges the need for consumption of
					goods and services, promoting recycling and reusing materials whenever
					possible. We consider the environmental impact in procurement
					decisions, incorporating total cost ownership, including environmental
					factors. Our commitment involves assessing environmental and corporate
					risks, working collaboratively with our supplier base, and promoting
					sustainable practices. Container Merchant ensures that its procurement
					policy complies with legal and regulatory requirements related to
					health and safety, equality, and diversity at all times.
				</p>
			</div>
		</div>
	);
};

export default AboutUsPage;
