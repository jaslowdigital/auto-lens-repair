import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, Users, Building2, Star } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';

export function CenterCityPage() {
  const businessDistricts = [
    'Rittenhouse Square',
    'Old City Historic District',
    'Society Hill',
    'Washington Square West',
    'Chinatown',
    'Market Street corridor',
    'Benjamin Franklin Parkway',
    'City Hall area'
  ];

  const landmarks = [
    'Independence Hall',
    'Liberty Bell',
    'Philadelphia City Hall', 
    'Rittenhouse Square Park',
    'Reading Terminal Market',
    'Pennsylvania Convention Center',
    'Kimmel Center',
    'Academy of Music'
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Center City Philadelphia PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services in Center City Philadelphia. Mobile service to downtown offices, residential buildings, and parking garages. 1-year warranty. Call 445-200-7542"
        keywords="headlight restoration Center City Philadelphia, downtown Philadelphia auto service, mobile headlight repair Philly, Center City car detailing"
        canonical="https://workspace--njaslow.replit.app/center-city"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">Center City</span> Headlight Restoration
            </h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-auto-amber mr-2 h-5 w-5" />
              <span className="text-xl">Downtown Philadelphia • Population 183,240</span>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services in Center City Philadelphia. 
              Mobile service available to downtown offices, residential buildings, and business districts.
            </p>
            <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                Call (445) 200-7542 Now
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
              <div className="text-2xl font-bold text-auto-blue">183K</div>
              <div className="text-auto-gray">Residents</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Building2 className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">300K</div>
              <div className="text-auto-gray">Daily Workers</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Star className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Historic</div>
              <div className="text-auto-gray">Birthplace of America</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Dense</div>
              <div className="text-auto-gray">Urban Core</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Districts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Serving Center City's Business Community</h2>
            <p className="text-lg text-auto-gray">Mobile headlight restoration for Philadelphia's downtown professionals and residents</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Business Districts We Serve</h3>
              <div className="grid grid-cols-1 gap-3">
                {businessDistricts.map((district) => (
                  <div key={district} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <Building2 className="text-auto-amber h-4 w-4 mr-3" />
                      <span className="font-medium text-auto-blue">{district}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Historic Landmarks & Areas</h3>
              <div className="grid grid-cols-1 gap-3">
                {landmarks.map((landmark) => (
                  <div key={landmark} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <MapPin className="text-auto-amber h-4 w-4 mr-3" />
                      <span className="font-medium text-auto-blue">{landmark}</span>
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
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Our Center City Services</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration designed for urban professionals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Office Building Service</h3>
              <p className="text-auto-gray mb-6">Mobile service to your office building garage or street parking in Center City.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Office Service
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Building2 className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Residential Buildings</h3>
              <p className="text-auto-gray mb-6">Service for apartment and condo residents in Center City's residential towers.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Residential Service
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Lunch Hour Service</h3>
              <p className="text-auto-gray mb-6">Quick service during your lunch break or after work hours. Perfect for busy schedules.</p>
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
          <h2 className="text-3xl font-bold text-auto-blue mb-8">Why Center City Professionals Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Urban Convenience</h3>
              <p className="text-auto-gray">We understand city life. Mobile service means no need to find time to drive somewhere - we come to you.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Professional Image</h3>
              <p className="text-auto-gray">Clear, bright headlights matter for your professional image. We deliver showroom-quality results with our 1-year warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Headlights in Center City?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Professional headlight restoration with urban convenience in downtown Philadelphia. 
            Call now for your free quote and same-day service.
          </p>
          <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-blue-800 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
              Call (445) 200-7542 Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}