import { Car, Phone, Clock, MapPin, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-auto-gray text-white py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="text-auto-amber text-2xl mr-3" />
              <span className="text-xl font-bold">Auto Lens Repair</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional headlight restoration services in Montgomery County, Bucks County, and Philadelphia PA.
            </p>
            <div className="flex items-center">
              <Shield className="text-auto-amber mr-2" />
              <span className="font-semibold">1-Year Warranty on All Services</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Mobile Headlight Restoration</li>
              <li>Drop-off Service</li>
              <li>Corporate Fleet Services</li>
              <li>Dealership Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Montgomery County PA</li>
              <li>Bucks County PA</li>
              <li>Philadelphia PA</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="text-auto-amber mr-2" />
                <a href="tel:445-200-7542" className="text-auto-amber font-bold">(445) 200-7542</a>
              </div>
              <div className="flex items-center">
                <Clock className="text-auto-amber mr-2" />
                <span>Mon-Sat: 8AM-6PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-auto-amber mr-2" />
                <span>Mobile Service Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Auto Lens Repair. All rights reserved. | Professional headlight restoration services in Pennsylvania</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
