import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';
import { Link } from 'wouter';

export function PhiladelphiaCountyPage() {
  const majorNeighborhoods = [
    { name: 'Philadelphia (All Areas)', population: '1,567,258', description: 'Complete city coverage - all neighborhoods', link: '/philadelphia' },
    { name: 'Center City', population: '183,240', description: 'Downtown business & cultural core', link: '/center-city' },
    { name: 'Upper Darby', population: '82,795', description: 'Delaware County suburban community', link: '/upper-darby' },
    { name: 'South Philadelphia', population: '173,810', description: 'Historic Italian & multicultural area', link: null },
    { name: 'West Philadelphia', population: '301,830', description: 'University corridor (Drexel, Penn)', link: null },
    { name: 'North Philadelphia', population: '274,620', description: 'Diverse residential communities', link: null },
    { name: 'Northeast Philadelphia', population: '423,140', description: 'Suburban-style neighborhoods', link: null },
    { name: 'Northwest Philadelphia', population: '208,180', description: 'Historic Germantown & Chestnut Hill', link: null },
    { name: 'Fishtown', population: '18,500', description: 'Hip arts & music scene', link: null },
    { name: 'Northern Liberties', population: '12,300', description: 'Nightlife & dining district', link: null },
    { name: 'Rittenhouse Square', population: '10,500', description: 'Upscale park district', link: null },
    { name: 'University City', population: '47,500', description: 'Drexel/Penn campus area', link: null }
  ];

  const planningDistricts = [
    'Center City', 'South Philadelphia', 'Southwest Philadelphia',
    'West Philadelphia', 'Lower North Philadelphia', 'Upper North Philadelphia',
    'Bridesburg-Kensington-Port Richmond', 'Roxborough-Manayunk',
    'Germantown-Chestnut Hill', 'Olney-Oak Lane',
    'Near Northeast Philadelphia', 'Far Northeast Philadelphia'
  ];

  const historicNeighborhoods = [
    'Old City', 'Society Hill', 'Queen Village', 'Northern Liberties',
    'Fishtown', 'Kensington', 'Germantown', 'Chestnut Hill',
    'Mount Airy', 'Manayunk', 'Roxborough', 'Fairmount'
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Philadelphia PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services throughout Philadelphia PA including Center City, South Philly, West Philadelphia, Fishtown, and all neighborhoods. Mobile service available. Call 445-200-7542"
        keywords="headlight restoration Philadelphia, Center City headlight repair, South Philadelphia auto service, West Philadelphia car detailing, Fishtown headlight cleaning"
        canonical="https://workspace--njaslow.replit.app/philadelphia-county"
        ogImage="https://workspace--njaslow.replit.app/og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">Philadelphia</span> Headlight Restoration
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services throughout Philadelphia, Pennsylvania. 
              Serving all neighborhoods from Center City to the Northeast and everywhere in between.
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

      {/* Coverage Area Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Complete Philadelphia Coverage</h2>
            <p className="text-lg text-auto-gray">Serving America's birthplace and the City of Brotherly Love</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">150+</div>
              <div className="text-auto-gray">Neighborhoods</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">1.6M</div>
              <div className="text-auto-gray">Total Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">12</div>
              <div className="text-auto-gray">Planning Districts</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">142</div>
              <div className="text-auto-gray">Square Miles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Neighborhoods Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Major Neighborhoods We Serve</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration in Philadelphia's most popular areas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorNeighborhoods.map((neighborhood) => (
              <div key={neighborhood.name} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                {neighborhood.link ? (
                  <Link href={neighborhood.link}>
                    <div className="cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-auto-blue hover:text-blue-700">{neighborhood.name}</h3>
                        <MapPin className="text-auto-amber h-5 w-5 flex-shrink-0" />
                      </div>
                      <p className="text-auto-gray mb-2">Population: {neighborhood.population}</p>
                      <p className="text-sm text-auto-gray mb-4">{neighborhood.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mobile Service Available
                        </div>
                        <span className="text-sm text-auto-blue font-medium">Learn More →</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-auto-blue">{neighborhood.name}</h3>
                      <MapPin className="text-auto-amber h-5 w-5 flex-shrink-0" />
                    </div>
                    <p className="text-auto-gray mb-2">Population: {neighborhood.population}</p>
                    <p className="text-sm text-auto-gray mb-4">{neighborhood.description}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mobile Service Available
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Districts & Historic Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-auto-blue mb-6">Planning Districts We Serve</h2>
              <div className="grid grid-cols-1 gap-3">
                {planningDistricts.map((district) => (
                  <div key={district} className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-auto-blue">{district}</h3>
                    <p className="text-sm text-green-600 mt-1">✓ Service Available</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-auto-blue mb-6">Historic Neighborhoods</h2>
              <div className="grid grid-cols-1 gap-3">
                {historicNeighborhoods.map((neighborhood) => (
                  <div key={neighborhood} className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-auto-blue">{neighborhood}</h3>
                    <p className="text-sm text-green-600 mt-1">✓ Service Available</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Our Philadelphia Services</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration with mobile convenience throughout the city</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Mobile Service</h3>
              <p className="text-auto-gray mb-6">We come to your location anywhere in Philadelphia - home, office, or workplace. Perfect for busy city life.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Mobile Visit
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <Shield className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">1-Year Warranty</h3>
              <p className="text-auto-gray mb-6">All headlight restoration work comes with our comprehensive 1-year warranty guarantee.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Learn About Warranty
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <Clock className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Same-Day Service</h3>
              <p className="text-auto-gray mb-6">Fast, professional restoration completed in under 2 hours at your Philadelphia location.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Same Day Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Headlights?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Serving all of Philadelphia with professional headlight restoration. 
            Call now for your free quote and same-day service.
          </p>
          <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
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