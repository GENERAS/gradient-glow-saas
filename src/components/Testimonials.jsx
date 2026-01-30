import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "SaaSy has transformed our workflow. It's the most intuitive and powerful tool we've ever used. Our productivity has skyrocketed!",
    author: 'Aisha Diallo',
    title: 'CEO, Innovate Africa',
    avatar: 'https://source.unsplash.com/random/100x100?portrait,woman',
  },
  {
    id: 2,
    quote: "The support team is incredible, and the platform itself is a game-changer. I can't imagine running our business without it.",
    author: 'Kwame Mensah',
    title: 'CTO, Tech Solutions Ghana',
    avatar: 'https://source.unsplash.com/random/100x100?portrait,man',
  },
  {
    id: 3,
    quote: "From analytics to project management, SaaSy delivers on all fronts. A must-have for any modern SaaS company.",
    author: 'Fatima Al-Jamil',
    title: 'Product Manager, Nile Ventures',
    avatar: 'https://source.unsplash.com/random/100x100?portrait,person',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Loved by Teams Worldwide</h2>
          <p className="text-gray-400 mt-4">Don't just take our word for it. Here's what our customers are saying.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 flex flex-col">
              <p className="text-gray-300 flex-grow">\"{testimonial.quote}\"</p>
              <div className="flex items-center mt-6">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;