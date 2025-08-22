import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';
import { Link } from 'wouter';

export function MontgomeryCountyPage() {
  const majorTowns = [
    { name: 'Norristown', population: '34,324', description: 'County seat and largest city', link: '/norristown' },
    { name: 'Pottstown', population: '22,711', description: 'Historic borough founded in 1752', link: '/pottstown' },
    { name: 'King of Prussia', population: '22,028', description: 'Major commercial and shopping center', link: '/king-of-prussia' },
    { name: 'Lansdale', population: '18,773', description: 'Safe, family-friendly community', link: '/lansdale' },
    { name: 'Abington', population: '55,310', description: 'Large suburban township', link: '/abington' },
    { name: 'Plymouth Meeting', population: '6,177', description: 'Major business and shopping hub', link: '/plymouth-meeting' },
    { name: 'Cheltenham', population: '36,793', description: 'Diverse community near Philadelphia', link: '/cheltenham' },
    { name: 'Willow Grove', population: '15,726', description: 'Shopping destination with mall', link: '/willow-grove' },
    { name: 'Harleysville', population: '9,286', description: 'Historic Pennsylvania German community', link: '/harleysville' },
    { name: 'Conshohocken', population: '8,039', description: 'Business hub along the Schuylkill River', link: null },
    { name: 'Ardmore', population: '13,307', description: 'Main Street of the Main Line', link: null },
    { name: 'Ambler', population: '6,417', description: 'Charming suburban borough', link: null }
  ];

  const townships = [
    'Abington Township', 'Cheltenham Township', 'Lower Merion Township',
    'Montgomery Township', 'Upper Merion Township', 'Whitemarsh Township',
    'Plymouth Township', 'East Norriton Township', 'West Norriton Township',
    'Upper Gwynedd Township', 'Lower Gwynedd Township', 'Skippack Township'
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Montgomery County PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services throughout Montgomery County PA including Norristown, Pottstown, Lansdale, King of Prussia, Conshohocken, and all townships. Mobile service available. Call 445-200-7542"
        keywords="headlight restoration Montgomery County, Norristown headlight repair, Pottstown auto service, Lansdale car detailing, King of Prussia headlight cleaning"
        canonical="https://workspace--njaslow.replit.app/montgomery-county"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">Montgomery County</span> Headlight Restoration
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services throughout Montgomery County, Pennsylvania. 
              Serving all 92 municipalities from Norristown to Pottstown and beyond.
            </p>
            <Button asChild className="bg-auto-amber text-auto-blue px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-blue-800 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                Call (445) 200-7542 Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Area Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Complete Montgomery County Coverage</h2>
            <p className="text-lg text-auto-gray">Serving Pennsylvania's third most populous county</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">92</div>
              <div className="text-auto-gray">Total Municipalities</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">856K</div>
              <div className="text-auto-gray">Total Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">487</div>
              <div className="text-auto-gray">Square Miles</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-auto-blue">23</div>
              <div className="text-auto-gray">Boroughs Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Towns Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Major Cities & Towns We Serve</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration in Montgomery County's largest communities</p>
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

      {/* Township Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Township Coverage</h2>
            <p className="text-lg text-auto-gray">We serve all major townships throughout Montgomery County</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {townships.map((township) => (
              <div key={township} className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100">
                <h3 className="font-semibold text-auto-blue">{township}</h3>
                <p className="text-sm text-green-600 mt-2">✓ Service Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-auto-blue mb-4">Our Montgomery County Services</h2>
            <p className="text-lg text-auto-gray">Professional headlight restoration with mobile convenience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Mobile Service</h3>
              <p className="text-auto-gray mb-6">We come to your location anywhere in Montgomery County - home, office, or workplace.</p>
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
              <p className="text-auto-gray mb-6">Fast, professional restoration completed in under 2 hours at your Montgomery County location.</p>
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
            Serving all of Montgomery County with professional headlight restoration. 
            Call now for your free quote and same-day service.
          </p>
          <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
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