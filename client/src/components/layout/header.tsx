import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from '@assets/Auto Lens Repair _1755827734654.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Before & After', href: '/gallery' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/' && location === '/') return true;
    if (href !== '/' && location === href) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full overflow-x-hidden">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center py-4 w-full">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img src={logoImage} alt="Auto Lens Repair Logo" className="h-14 w-auto mr-3" />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-auto-blue">Auto Lens Repair</span>
            </div>
          </Link>
          
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className={`transition-colors cursor-pointer ${
                  isActiveLink(item.href)
                    ? 'text-auto-blue font-semibold'
                    : 'text-auto-gray hover:text-auto-blue'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 text-base px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Layout - Logo Left, Hamburger Right */}
        <div className="flex md:hidden items-center justify-between py-4 w-full">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img src={logoImage} alt="Auto Lens Repair Logo" className="h-12 w-auto mr-2" />
                <span className="text-lg font-bold text-auto-blue">Auto Lens Repair</span>
              </div>
            </Link>
          </div>

          {/* Hamburger Menu - Right Side */}
          <div className="flex-shrink-0">
            <Button
              variant="ghost"
              className="text-auto-gray hover:text-auto-blue hover:bg-gray-100 transition-all duration-200 p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span 
                  className={`block transition-colors cursor-pointer ${
                    isActiveLink(item.href)
                      ? 'text-auto-blue font-semibold'
                      : 'text-auto-gray hover:text-auto-blue'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            
            {/* Call Button in Mobile Menu */}
            <div className="pt-4 border-t border-gray-200">
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 text-sm px-4 py-3 rounded-lg font-semibold shadow-md w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call (445) 200-7542
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
