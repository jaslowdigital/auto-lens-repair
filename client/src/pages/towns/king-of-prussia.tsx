import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, Users, Building2, ShoppingBag } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';

export function KingOfPrussiaPage() {
  const localFeatures = [
    'King of Prussia Mall (largest in PA)',
    'Valley Forge National Historical Park',
    'Corporate headquarters district',
    'Lockheed Martin facility',
    'GlaxoSmithKline headquarters',
    'Arkema corporate campus',
    'CSL Behring facility',
    'Upper Merion Township government'
  ];

  const businessAreas = [
    'King of Prussia Business Center',
    'Valley Forge Corporate Center', 
    'Henderson Corporate Center',
    'Crow Creek Corporate Center',
    'Town Center at King of Prussia',
    'Mall Boulevard corridor'
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="King of Prussia PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services in King of Prussia, Pennsylvania. Mobile service to corporate offices, shopping centers, and residential areas. 1-year warranty. Call 445-200-7542"
        keywords="headlight restoration King of Prussia PA, auto headlight cleaning KOP, mobile headlight repair Upper Merion, King of Prussia Mall car services"
        canonical="https://workspace--njaslow.replit.app/king-of-prussia"
        ogImage="https://workspace--njaslow.replit.app/og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">King of Prussia</span> Headlight Restoration
            </h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-auto-amber mr-2 h-5 w-5" />
              <span className="text-xl">Upper Merion Township • Population 22,028</span>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services in King of Prussia, PA. 
              Mobile service available to corporate offices, shopping centers, and residential communities.
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
              <div className="text-2xl font-bold text-auto-blue">22,028</div>
              <div className="text-auto-gray">Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <ShoppingBag className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">#1</div>
              <div className="text-auto-gray">Shopping Destination</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Building2 className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Fortune</div>
              <div className="text-auto-gray">500 Companies</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">15</div>
              <div className="text-auto-gray">Miles to Philly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Serving King of Prussia's Business Community</h2>
            <p className="text-lg text-auto-gray">Mobile headlight restoration for Pennsylvania's premier commercial and shopping destination</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Major Locations & Landmarks We Serve</h3>
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
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Corporate & Business Centers</h3>
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
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Our King of Prussia Services</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration for corporate and residential clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Corporate Mobile Service</h3>
              <p className="text-auto-gray mb-6">We come to your office parking lot or workplace in King of Prussia's business district.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Corporate Service
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">1-Year Warranty</h3>
              <p className="text-auto-gray mb-6">All headlight restoration work comes with our comprehensive 1-year warranty guarantee.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Warranty Info
                </a>
              </Button>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Shopping Center Service</h3>
              <p className="text-auto-gray mb-6">Service while you shop at King of Prussia Mall or Town Center. Perfect timing.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Mall Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-auto-blue mb-8">Why King of Prussia Professionals Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Business-Friendly Service</h3>
              <p className="text-auto-gray">We understand your busy schedule. Corporate parking lot service available during business hours without disrupting your day.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">Premium Results</h3>
              <p className="text-auto-gray">Professional appearance matters in King of Prussia's corporate environment. We deliver showroom-quality headlight restoration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Headlights in King of Prussia?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Professional headlight restoration with mobile convenience for King of Prussia's business community. 
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