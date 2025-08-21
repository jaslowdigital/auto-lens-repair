import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Car, Phone } from 'lucide-react';

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Car className="text-auto-blue text-2xl mr-3" />
              <span className="text-2xl font-bold text-auto-blue">AutoLensRepair.com</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className={`transition-colors ${
                  isActiveLink(item.href)
                    ? 'text-auto-blue font-semibold'
                    : 'text-auto-gray hover:text-auto-blue'
                }`}>
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild className="bg-auto-blue text-white hover:bg-blue-800">
              <a href="tel:445-200-7542">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              variant="ghost"
              className="md:hidden text-auto-gray"
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
                <a 
                  className={`block transition-colors ${
                    isActiveLink(item.href)
                      ? 'text-auto-blue font-semibold'
                      : 'text-auto-gray hover:text-auto-blue'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
