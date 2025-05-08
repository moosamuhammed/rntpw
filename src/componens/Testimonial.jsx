import React from 'react';

const TestimonialCard = ({ name, profession, text, imageUrl }) => {
    return (
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600 duration-300">
            <div className="flex items-center gap-4 mb-4">
                <img src={imageUrl} alt={`Image of ${name}`} className="rounded-full" />
                <div>
                    <h3 className="text-lg font-semibold text-white">{name}</h3>
                    <p className="text-sm text-gray-300">{profession}</p>
                </div>
            </div>
            <p className="text-white leading-relaxed">{text}</p>
        </div>
    );
};

const TestimonialSection = () => {
    // Dummy data for testimonials
    const testimonials = [
        {
            name: "Client Name 1",
            profession: "Profession 1",
            text: "I ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Client Name 2",
            profession: "Profession 2",
            text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Client Name 3",
            profession: "Profession 3",
            text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita.",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <section className="bg-gradient-to-b  from-red-900 via-red-900 to-black py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-2">TESTIMONIAL</h2>
                    <h2 className="text-3xl font-bold text-white mb-4">Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            profession={testimonial.profession}
                            text={testimonial.text}
                            imageUrl={testimonial.imageUrl}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-8 space-x-3">
                    <span className="block h-3 w-3 rounded-full bg-amber-500"></span>
                    <span className="block h-3 w-3 rounded-full bg-amber-700"></span>
                    <span className="block h-3 w-3 rounded-full bg-amber-600"></span>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
