import React from 'react';
import { Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react';
import CESLogo from '../assets/ces-logo-main.png';
import SITLogo from '../assets/sit-logo-main.png';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/computer-engineers-society-sit/", label: "LinkedIn" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/sitcesclub", label: "Instagram" },
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/share/mACUTuYu9TqT6yFj/", label: "Facebook" },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      href: "#",
      label: "Discord"
    }
  ];

  const quickLinks = [
    { text: "Home", href: "#home" },
    { text: "About CES", href: "#about-us" },
    { text: "Vision", href: "#vision" },
    { text: "Events", href: "#events" },
    { text: "Our Team", href: "#team" },
    { text: "Gallery", href: "#memories" }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="text-white mt-10" id="footer">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Title Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={CESLogo}
                alt="Computer Engineers' Society"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold mb-2 primary-text-color">Computer Engineers' Society</h3>
            <p className="text-base font-medium mb-4 text-white text-xl">Siliguri Institute of Technology</p>
            <p className="text-white leading-relaxed">
              Empowering the next generation of innovators and technologists through
              collaborative learning, hands-on projects, and community building under the
              prestigious Techno India Group.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-yellow-400 transition-colors duration-200 inline-flex items-center text-left"
                  >
                    {link.text}
                    <ExternalLink size={14} className="ml-1 opacity-70" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-white">
                <strong>Email:</strong><br />
                ces@sittechno.edu.in
              </p>
              <p className="text-white">
                <strong>Phone:</strong><br />
                +91-9434344744
              </p>
              <p className="text-white">
                <strong>Address:</strong><br />
                SIT Campus, Sukna<br />
                Darjeeling - 734009<br />
                West Bengal, India
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(social.href)}
                    aria-label={social.label}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-400 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <button
                onClick={() => handleLinkClick('#about-us')}
                className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Join Our Community</span>
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Institution Recognition */}
        <div className="bg-white text-black rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 rounded-full flex items-center justify-center">
                <img
                  src={SITLogo}
                  alt="SIT Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Techno India Group</p>
                <p className="text-sm text-gray-700">A Satyam Roychowdhury Initiative</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-600"></div>
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg">Established 1999</p>
              <p className="text-sm text-gray-700">25+ Years of Excellence in Technical Education</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-white text-lg">
            © 2026 Computer Engineers' Society. All rights reserved.
          </p>
          <p className="text-white mt-2">
            Made with ❤️ by Computer Engineers' Society
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
