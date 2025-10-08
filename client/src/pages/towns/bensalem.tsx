import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, Users, Building2, Home } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';

export function BensalemPage() {
  const neighborhoods = [
    'Andalusia',
    'Cornwells Heights',
    'Eddington',
    'Feasterville',
    'Hulmeville',
    'Oakford',
    'Street Road corridor',
    'Bristol Pike area'
  ];

  const businessAreas = [
    'Bensalem Business Campus',
    'Parx Casino & Racing',
    'Street Road shopping centers',
    'Bristol Pike commercial corridor', 
    'Neshaminy Mall area',
    'Industrial Boulevard',
    'Knights Road businesses',
    'Lincoln Highway corridor'
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Bensalem PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services in Bensalem Township, Pennsylvania. Mobile service to residential neighborhoods and business areas. 1-year warranty. Call 445-200-7542"
        keywords="headlight restoration Bensalem PA, auto headlight cleaning Bensalem Township, mobile headlight repair Bucks County, Feasterville car services"
        canonical="https://workspace--njaslow.replit.app/bensalem"
        ogImage="https://workspace--njaslow.replit.app/og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">Bensalem</span> Headlight Restoration
            </h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-auto-amber mr-2 h-5 w-5" />
              <span className="text-xl">Largest Municipality in Bucks County • Population 60,427</span>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services in Bensalem Township, PA. 
              Mobile service available throughout all neighborhoods and business districts.
            </p>
            <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">60,427</div>
              <div className="text-auto-gray">Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Home className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Largest</div>
              <div className="text-auto-gray">Bucks Municipality</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">17</div>
              <div className="text-auto-gray">Miles from Center City</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Building2 className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">20</div>
              <div className="text-auto-gray">Square Miles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods & Business Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Serving All of Bensalem Township</h2>
            <p className="text-lg text-auto-gray">Mobile headlight restoration throughout Bucks County's largest municipality</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Neighborhoods We Serve</h3>
              <div className="grid grid-cols-1 gap-3">
                {neighborhoods.map((neighborhood) => (
                  <div key={neighborhood} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <Home className="text-auto-amber h-4 w-4 mr-3" />
                      <span className="font-medium text-auto-blue">{neighborhood}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Business & Commercial Areas</h3>
              <div className="grid grid-cols-1 gap-3">
                {businessAreas.map((area) => (
                  <div key={area} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <Building2 className="text-auto-amber h-4 w-4 mr-3" />
                      <span className="font-medium text-auto-blue">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Our Bensalem Services</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration for residents and businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Residential Mobile Service</h3>
              <p className="text-auto-gray mb-6">Mobile service to your home driveway throughout all Bensalem neighborhoods.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Home Service
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Building2 className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Commercial Service</h3>
              <p className="text-auto-gray mb-6">Business parking lots along Street Road, Bristol Pike, and commercial corridors.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Business Service
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Same-Day Service</h3>
              <p className="text-auto-gray mb-6">Fast, professional restoration completed in under 2 hours at your Bensalem location.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Quick Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-auto-blue mb-8">Why Bensalem Residents Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Local Community Focus</h3>
              <p className="text-auto-gray">As Bucks County's largest municipality, Bensalem deserves top-quality service. We're proud to serve this diverse community.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Convenient Scheduling</h3>
              <p className="text-auto-gray">From Feasterville to Andalusia, we make it easy with flexible scheduling that works around your busy life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Headlights in Bensalem?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Professional headlight restoration with mobile convenience throughout Bensalem Township. 
            Call now for your free quote and same-day service.
          </p>
          <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-blue-800 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
              Call Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}