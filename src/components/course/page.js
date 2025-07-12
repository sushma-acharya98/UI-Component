"use client";
import { useState } from "react";
import Image from "next/image";
import "./course.css";

const courseData = [
	{
		id: 1,
		count: "23+",
		title: "All Courses",
		description: "courses you're powering through right now.",
		icons: [
			{ src: "/icons/react.svg", width: 94, height: 94 },
			{ src: "/icons/social.svg", width: 94, height: 94 },
			{ src: "/icons/vue.svg", width: 117, height: 130 },
			{ src: "/icons/design.svg", width: 94, height: 130 },
		],
	},
	{
		id: 2,
		count: "05+",
		title: "Upcoming Courses",
		description: "exciting new courses waiting to boost your skills.",
		icons: [
			{ src: "/icons/react.svg", width: 94, height: 94 },
			{ src: "/icons/social.svg", width: 94, height: 94 },
			{ src: "/icons/vue.svg", width: 117, height: 130 },
			{ src: "/icons/design.svg", width: 94, height: 130 },
		],
	},
	{
		id: 3,
		count: "10+",
		title: "Ongoing Courses",
		description: "currently happening—don’t miss out on the action!",
		icons: [
			{ src: "/icons/react.svg", width: 94, height: 94 },
			{ src: "/icons/social.svg", width: 94, height: 94 },
			{ src: "/icons/vue.svg", width: 117, height: 130 },
			{ src: "/icons/design.svg", width: 94, height: 130 },
		],
	},
];

const CourseCard = ({ course, isOpen, onClick }) => {
	return (
		<div
		className={`course_card course_main-card ${
			isOpen ? "is-open animate-open" : "is-closed animate-close"
		}`}
		onClick={onClick}
		>
			<Image
				src="/icons/click-me.svg"
				alt="Click Me"
				width={64}
				height={72}
				className='click_me'
			/>
			{isOpen && (
				<div className="course_top">
					<a
						href="#"
						className="view-link"
						onClick={(e) => e.stopPropagation()}
					>
						View all Courses →
					</a>
					<div className="course_icons">
						{course.icons.map((icon, index) => (
							<Image
								key={index}
								src={icon.src}
								width={icon.width}
								height={icon.height}
								alt={`icon-${index}`}
								priority
							/>
						))}
					</div>
				</div>
			)}
			<div className="course_count">
				<h1>{course.count.replace("+", "")}<span>+</span></h1>
				<div className="course_info">
					<strong>{course.title}</strong>
					<p>{course.description}</p>
				</div>
			</div>
		</div>
	);
};

const Page = () => {
	const [openId, setOpenId] = useState(1);

	return (
		<div className="block_courses">
			<div className="container">
				<div className="title_holder">
					<p>Explore our classes and master trending skills!</p>
					<h1>
						Dive Into{" "}
						<span className="highlight" suppressHydrationWarning={true}>
						What’s Hot Right Now!
						</span>{" "}
						🔥
					</h1>
				</div>
				<div className="course_cards">
					{courseData.map((course) => (
						<CourseCard
							key={course.id}
							course={course}
							isOpen={openId === course.id}
							onClick={() => setOpenId(course.id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
