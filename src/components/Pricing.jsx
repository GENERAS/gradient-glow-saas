import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    features: ['5 Projects', 'Basic Analytics', '24/7 Support'],
    cta: 'Choose Plan',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$99',
    features: ['25 Projects', 'Advanced Analytics', 'Priority Support', 'API Access'],
    cta: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Projects', 'Dedicated Infrastructure', 'Premium Support', 'Custom Integrations'],
    cta: 'Contact Us',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Flexible Pricing for Teams of All Sizes</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border ${
                tier.popular ? 'border-purple-500 bg-gray-800/50' : 'border-gray-700 bg-gray-900'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                {tier.name !== 'Enterprise' && <span className="text-gray-400">/month</span>}
              </div>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block w-full text-center mt-10 py-3 px-6 rounded-lg font-bold transition-colors duration-300 ${
                  tier.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
