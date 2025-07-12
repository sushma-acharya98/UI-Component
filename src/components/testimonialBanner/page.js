"use client"; import Image from 'next/image'
import "./testimonialbanner.css";

const testimonials = [
    { id: 1, img: '/banner/user1.png', alt: 'User 1' },
    { id: 2, img: '/banner/thumb.gif', alt: 'User 1' },
    { id: 3, img: '/banner/user2.png', alt: 'User 2' },
    { id: 4, img: '/banner/user3.png', alt: 'User 3' },
    { id: 5, img: '/banner/like.gif', alt: 'User 1' },
    { id: 6, img: '/banner/user4.png', alt: 'User 4' },
    { id: 7, img: '/banner/award.gif', alt: 'User 1' },
    { id: 8, img: '/banner/user5.png', alt: 'User 5' },
    { id: 9, img: '/banner/smile.gif', alt: 'User 1' },
    { id: 10, img: '/banner/user6.png', alt: 'User 6' },
];

const Page = () => {
    return (
        <div className="block_testimonial">
            <div className='container'>
                <div className='testimonial_outer'>

                    <div className="testimonial_circle">
                        {testimonials.map((user, index) => (
                            <div
                            className="testimonial-avatar"
                            key={user.id}
                            data-user={index + 1}
                            >
                            <img src={user.img} alt={user.alt} />
                            </div>
                        ))}
                    </div>

                    <div className="testimonial_text">
                        <p>Hear How They Level Up Their Game!</p>
                        <h2>
                            Skill <span className="highlight">Masters</span> Unite! <span>🤝</span>
                        </h2>
                        <a href="#" className="testimonial_link">
                            View all Testimonials <span className="arrow">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.34171 0.508396C7.79732 0.0527842 8.53601 0.052784 8.99162 0.508396L13.6583 5.17506C14.1139 5.63067 14.1139 6.36937 13.6583 6.82498L8.99162 11.4916C8.53601 11.9473 7.79732 11.9473 7.34171 11.4916C6.8861 11.036 6.8861 10.2973 7.34171 9.84173L10.0168 7.16669L1.16667 7.16669C0.522335 7.16669 -2.81646e-08 6.64435 0 6.00002C2.81647e-08 5.35569 0.522335 4.83335 1.16667 4.83335H10.0168L7.34171 2.15831C6.8861 1.7027 6.8861 0.964008 7.34171 0.508396Z" fill="#2B2B2B"/></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page