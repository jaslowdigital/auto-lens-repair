import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';
import { Link } from 'wouter';

export function BucksCountyPage() {
  const majorTowns = [
    { name: 'Bensalem', population: '60,427', description: 'Largest municipality, 17 miles from Center City', link: '/bensalem' },
    { name: 'Levittown', population: '52,983', description: 'Historic planned suburban community', link: '/levittown' },
    { name: 'Doylestown', population: '8,297', description: 'County seat and cultural hub', link: '/doylestown' },
    { name: 'Warminster', population: '32,682', description: 'Strategic Bucks County location', link: '/warminster' },
    { name: 'New Hope', population: '2,512', description: 'Historic arts community on Delaware River', link: '/new-hope' },
    { name: 'Quakertown', population: '8,979', description: 'Upper Bucks County borough', link: '/quakertown' },
    { name: 'Yardley', population: '2,434', description: 'Delaware River community', link: '/yardley' },
    { name: 'Bristol Township', population: '53,293', description: 'Second largest municipality in Bucks County', link: null },
    { name: 'Lower Makefield', population: '32,681', description: 'One of wealthiest communities in US', link: null },
    { name: 'Warrington', population: '23,418', description: 'Gateway to Historic Bucks County', link: null },
    { name: 'Bristol Borough', population: '9,739', description: 'Third oldest borough in PA (est. 1681)', link: null },
    { name: 'Morrisville', population: '10,023', description: 'Most populous borough in Bucks County', link: null }
  ];

  const townships = [
    'Bedminster Township', 'Bensalem Township', 'Bridgeton Township',
    'Buckingham Township', 'Doylestown Township', 'Durham Township',
    'East Rockhill Township', 'Falls Township', 'Haycock Township',
    'Hilltown Township', 'Lower Makefield Township', 'Lower Southampton Township'
  ];

  const boroughs = [
    'Bristol', 'Chalfont', 'Doylestown', 'Dublin', 'Hulmeville',
    'Ivyland', 'Langhorne', 'Morrisville', 'New Britain', 'New Hope',
    'Newtown', 'Penndel', 'Perkasie', 'Quakertown', 'Richlandtown',
    'Riegelsville', 'Sellersville', 'Silverdale', 'Telford', 'Trumbauersville'
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Bucks County PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services throughout Bucks County PA including Bensalem, Bristol, Doylestown, New Hope, Morrisville, and all townships. Mobile service available. Call 445-200-7542"
        keywords="headlight restoration Bucks County, Bensalem headlight repair, Bristol auto service, Doylestown car detailing, New Hope headlight cleaning"
        canonical="https://workspace--njaslow.replit.app/bucks-county"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Untitled design_20250902_185324_0000_1756853701816.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">Bucks County</span> Headlight Restoration
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services throughout Bucks County, Pennsylvania. 
              Serving all 54 municipalities from Bensalem to New Hope and beyond.
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
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Complete Bucks County Coverage</h2>
            <p className="text-lg text-auto-gray">Serving Pennsylvania's fourth most populous county</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">54</div>
              <div className="text-auto-gray">Total Municipalities</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">627K</div>
              <div className="text-auto-gray">Total Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">23</div>
              <div className="text-auto-gray">Boroughs Served</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">31</div>
              <div className="text-auto-gray">Townships Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Towns Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Major Cities & Towns We Serve</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration in Bucks County's largest communities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorTowns.map((town) => (
              <div key={town.name} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                {town.link ? (
                  <Link href={town.link}>
                    <div className="cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-auto-blue hover:text-blue-700">{town.name}</h3>
                        <MapPin className="text-auto-amber h-5 w-5 flex-shrink-0" />
                      </div>
                      <p className="text-auto-gray mb-2">Population: {town.population}</p>
                      <p className="text-sm text-auto-gray mb-4">{town.description}</p>
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
                      <h3 className="text-xl font-bold text-auto-blue">{town.name}</h3>
                      <MapPin className="text-auto-amber h-5 w-5 flex-shrink-0" />
                    </div>
                    <p className="text-auto-gray mb-2">Population: {town.population}</p>
                    <p className="text-sm text-auto-gray mb-4">{town.description}</p>
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

      {/* Borough & Township Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-auto-blue mb-6">Boroughs We Serve</h2>
              <div className="grid grid-cols-1 gap-3">
                {boroughs.map((borough) => (
                  <div key={borough} className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-auto-blue">{borough}</h3>
                    <p className="text-sm text-green-600 mt-1">✓ Service Available</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-auto-blue mb-6">Townships We Serve</h2>
              <div className="grid grid-cols-1 gap-3">
                {townships.map((township) => (
                  <div key={township} className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-auto-blue">{township}</h3>
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
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Our Bucks County Services</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration with mobile convenience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Mobile Service</h3>
              <p className="text-auto-gray mb-6">We come to your location anywhere in Bucks County - home, office, or workplace.</p>
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
              <p className="text-auto-gray mb-6">Fast, professional restoration completed in under 2 hours at your Bucks County location.</p>
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
            Serving all of Bucks County with professional headlight restoration. 
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