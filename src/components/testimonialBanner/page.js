"use client"; import Image from 'next/image'
import "./testimonialbanner.css";

const testimonials = [
    { id: 1, img: '/images/user1.jpg', alt: 'User 1' },
    { id: 2, img: '/images/user2.jpg', alt: 'User 2' },
    { id: 3, img: '/images/user3.jpg', alt: 'User 3' },
    { id: 4, img: '/images/user4.jpg', alt: 'User 4' },
    { id: 5, img: '/images/user5.jpg', alt: 'User 5' },
    { id: 6, img: '/images/user6.jpg', alt: 'User 6' },
    { id: 7, img: '/images/user7.jpg', alt: 'User 7' }
];

const Page = () => {
    return (
        <div className="testimonial-wrapper">
            <div className="testimonial-circle">
                {testimonials.map((user) => (
                <div className="testimonial-avatar" key={user.id}>
                    <img src={user.img} alt={user.alt} />
                </div>
                ))}
            </div>
            <div className="testimonial-text">
                <p>Hear How They Level Up Their Game!</p>
                <h2>
                Skill <span className="highlight">Masters</span> Unite! <span>🤝</span>
                </h2>
                <a href="#" className="testimonial-link">
                View all Testimonials <span className="arrow">→</span>
                </a>
            </div>
        </div>
    )
}

export default Page