import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, Users, Building2, Landmark } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';

export function DoylestownPage() {
  const localFeatures = [
    'Bucks County Courthouse',
    'Central Bucks School District',
    'Doylestown Hospital',
    'Mercer Museum & Fonthill Castle',
    'James A. Michener Art Museum',
    'Delaware Valley University',
    'Historic downtown district',
    'Bucks County Community College'
  ];

  const nearbyAreas = [
    'Doylestown Township',
    'New Britain Township',
    'Chalfont Borough', 
    'Warrington Township',
    'Buckingham Township',
    'Plumstead Township'
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Doylestown PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services in Doylestown, Pennsylvania - Bucks County seat. Mobile service to downtown, hospital district, and residential areas. 1-year warranty. Call 445-200-7542"
        keywords="headlight restoration Doylestown PA, auto headlight cleaning Doylestown, mobile headlight repair Bucks County, Doylestown car services"
        canonical="https://workspace--njaslow.replit.app/doylestown"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">Doylestown</span> Headlight Restoration
            </h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-auto-amber mr-2 h-5 w-5" />
              <span className="text-xl">Bucks County Seat • Population 8,297</span>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services in Doylestown, PA. 
              Mobile service available throughout Bucks County's cultural and administrative center.
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
              <div className="text-2xl font-bold text-auto-blue">8,297</div>
              <div className="text-auto-gray">Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Landmark className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">County</div>
              <div className="text-auto-gray">Seat</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Building2 className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">1745</div>
              <div className="text-auto-gray">Founded</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">2.1</div>
              <div className="text-auto-gray">Square Miles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Serving Doylestown's Historic Community</h2>
            <p className="text-lg text-auto-gray">Mobile headlight restoration for residents and visitors of Bucks County's cultural center</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Historic Landmarks & Areas We Serve</h3>
              <div className="grid grid-cols-1 gap-3">
                {localFeatures.map((feature) => (
                  <div key={feature} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <MapPin className="text-auto-amber h-4 w-4 mr-3" />
                      <span className="font-medium text-auto-blue">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Surrounding Areas We Also Serve</h3>
              <div className="grid grid-cols-1 gap-3">
                {nearbyAreas.map((area) => (
                  <div key={area} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <Car className="text-auto-amber h-4 w-4 mr-3" />
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
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Our Doylestown Services</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration with historic town charm</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Historic Downtown Service</h3>
              <p className="text-auto-gray mb-6">Mobile service throughout Doylestown's charming downtown district and residential neighborhoods.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Downtown Service
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Hospital & Medical District</h3>
              <p className="text-auto-gray mb-6">Convenient service for healthcare professionals at Doylestown Hospital and medical facilities.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Medical District
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">College & University Service</h3>
              <p className="text-auto-gray mb-6">Student and faculty parking lots at Delaware Valley University and BCCC campus.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Campus Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-auto-blue mb-8">Why Doylestown Residents Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Historic Community Values</h3>
              <p className="text-auto-gray">Like Doylestown's historic charm, we value quality craftsmanship and building lasting relationships with our customers.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Cultural Center Convenience</h3>
              <p className="text-auto-gray">Perfect for busy professionals, students, and visitors to Doylestown's museums, hospitals, and downtown attractions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Headlights in Doylestown?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Professional headlight restoration with mobile convenience in Bucks County's historic seat. 
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