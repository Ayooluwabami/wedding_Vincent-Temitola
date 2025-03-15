
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wedding-beige/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/"
            className="font-cormorant text-4xl font-semibold text-wedding-charcoal mb-6"
          >
            Tobiloba & Temitola
          </Link>

          <p className="font-cormorant italic text-lg text-wedding-charcoal mb-8">
            {`April 25-26, 2025 • Akure, Ondo State, Nigeria`}
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <Link to="/story" className="nav-link">Our Story</Link>
            <Link to="/schedule" className="nav-link">Schedule</Link>
            <Link to="/Schedule" className="nav-link">Venue</Link>
            <Link to="/faq" className="nav-link">Q & A</Link>
          </div>

          <div className="flex items-center justify-center text-wedding-charcoal mb-4">
            <Heart size={18} className="text-wedding-rose mr-2" />
            <p className="font-cormorant italic">
              Thank you for celebrating with us
            </p>
            <Heart size={18} className="text-wedding-rose ml-2" />
          </div>

          <p className="text-sm text-wedding-charcoal/60 mt-4 pt-4 border-t border-wedding-charcoal/10 w-full text-center">
            © {currentYear} Copyright Ayobami Ekundayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
