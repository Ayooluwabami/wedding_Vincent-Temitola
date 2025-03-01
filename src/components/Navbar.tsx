
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/story', label: 'Our Story' },
  { path: '/schedule', label: 'Schedule' },
  { path: '/gifts', label: 'Gifts' },
  { path: '/venue', label: 'Venue' },
  { path: '/faq', label: 'Q&A' },
  { path: '/wedding-party', label: 'Wedding Party' },
  { path: '/moments', label: 'Moments' }
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isMobileScrollView = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/80 backdrop-blur-md shadow-md' 
      : 'bg-transparent'
  }`;

  const logoTextClasses = `font-cormorant font-semibold tracking-wider transition-all duration-300 ${
    isScrolled ? 'text-wedding-charcoal' : 'text-wedding-charcoal'
  }`;

  const linkTextClasses = `font-montserrat text-xs md:text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
    isScrolled ? 'text-wedding-charcoal' : 'text-wedding-charcoal'
  }`;

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" aria-label="Home">
            <span className={`text-2xl ${logoTextClasses} text-[#bd8869]`}>V<span className="text-[#d0879e]">&</span>T</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {routes.map((route) => (
              isMobileScrollView && pathname === '/' ? (
                // Mobile scroll view links - only when on home page
                <button
                  key={route.path}
                  onClick={() => scrollToSection(route.path.substring(1) || 'home')}
                  className={`${linkTextClasses} px-2 py-1 hover:text-wedding-gold nav-link relative`}
                >
                  {route.label}
                </button>
              ) : (
                // Regular NavLinks for desktop or non-home pages
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) => 
                    `${linkTextClasses} px-2 py-1 hover:text-wedding-gold nav-link relative ${isActive ? 'active-nav-link' : ''}`
                  }
                >
                  {route.label}
                </NavLink>
              )
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={24} className="text-wedding-charcoal" />
            ) : (
              <Menu size={24} className="text-wedding-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {routes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) => 
                      `text-wedding-charcoal py-2 px-4 rounded-md ${
                        isActive 
                          ? 'font-medium bg-wedding-cream/50' 
                          : 'hover:bg-wedding-cream/30'
                      }`
                    }
                  >
                    {route.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
