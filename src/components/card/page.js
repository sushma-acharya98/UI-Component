"use client"; 
import Image from 'next/image';
import "./card.css";

const Card = () => {
	return (
		<>
			<div className='fourcolumn_wrapper'>
				<div className='title_holder'>
					<div className='container'>
						<p>Your SkillShikshya Journey</p>
						<h1>Step <span className='highlight' suppressHydrationWarning={true}>In.</span> Skill <span className='highlight' suppressHydrationWarning={true}>Up.</span> Stand <span className='highlight' suppressHydrationWarning={true}>Out.</span> 🚀</h1>
					</div>
				</div>
				<div className='block_fourcolumn'>
					<div className='container'>
						<div className='fourcolumn_row'>
							<div className="column column--red">
								<Image
									src="/image1.svg"
									width={324}
									height={406}
									alt="Start with Clarity"
									suppressHydrationWarning={true}
									priority
								/>
								<div className="content_holder">
									<h3>Start with Clarity</h3>
									<div className='subtitle'>Step into a better learning path.</div>
									<p>Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you&apos;re a beginner or upskilling, we have a path tailored to your growth.</p>
								</div>
							</div>
							<div className="column column--blue">
								<Image
									src="/image2.svg"
									width={244}
									height={430}
									alt="Learn by Doing"
									suppressHydrationWarning={true}
									priority
								/>
								<div className="content_holder">
									<h3>Learn by Doing</h3>
									<div className='subtitle'>Practical skills, real projects.</div>
									<p>Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
								</div>
							</div>
							<div className="column column--purple">
								<Image
									src="/image3.svg"
									width={374}
									height={309}
									alt="Get Mentored & Supported"
									suppressHydrationWarning={true}
									priority
								/>
								<div className="content_holder">
									<h3>Get Mentored & Supported</h3>
									<div className='subtitle'>You&apos;re not learning alone.</div>
									<p>Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You&apos;re never on your own.</p>
								</div>
							</div>
							<div className="column column--grey">
								<Image
									src="/image4.svg"
									width={340}
									height={347}
									alt="Achieve & Showcase"
									suppressHydrationWarning={true}
									priority
								/>
								<div className="content_holder">
									<h3>Achieve & Showcase</h3>
									<div className='subtitle'>Build your portfolio, get job-ready.</div>
									<p>Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Card;
