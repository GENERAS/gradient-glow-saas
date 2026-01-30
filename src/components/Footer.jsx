import React from 'react';

const footerLinks = [
  { title: 'Product', links: ['Features', 'Pricing', 'Updates', 'FAQ'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
  { title: 'Resources', links: ['Documentation', 'API Status', 'Security', 'Terms of Service'] },
  { title: 'Social', links: ['Twitter', 'LinkedIn', 'GitHub'] },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SaaSy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;