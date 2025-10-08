import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Car, Shield, Clock, Home } from 'lucide-react';

export default function HarleysvillePage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Headlight Restoration Harleysville PA - Auto Lens Repair | Mobile Service Available"
        description="Professional headlight restoration services in Harleysville, PA. Serving Montgomery County with mobile and drop-off headlight cleaning. Call 445-200-7542 for free quotes."
        keywords="headlight restoration Harleysville PA, Harleysville auto headlight cleaning, Montgomery County headlight repair, mobile headlight service"
        canonical="https://workspace--njaslow.replit.app/harleysville"
        ogImage="https://workspace--njaslow.replit.app/og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-8 w-8 text-auto-amber mr-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Headlight Restoration in <span className="text-auto-amber">Harleysville, PA</span>
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional headlight restoration services in Harleysville, Pennsylvania. 
            Mobile service available throughout this growing Montgomery County community.
          </p>
          <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
              Call (445) 200-7542 Now
            </a>
          </Button>
        </div>
      </section>

      {/* Harleysville Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-auto-blue mb-6">Professional Service in Harleysville</h2>
              <p className="text-lg text-auto-gray mb-6">
                Harleysville is a thriving unincorporated community in Lower Salford Township, Montgomery County, with a population of approximately 9,300 residents. 
                Known for its excellent schools, family-friendly neighborhoods, and proximity to both Philadelphia and Allentown, Harleysville residents value quality service and reliability.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-auto-light p-6 rounded-lg">
                  <h3 className="font-semibold text-auto-blue mb-2">Service Coverage</h3>
                  <p className="text-auto-gray">Harleysville Pike, residential developments, Salford Station area, and surrounding neighborhoods</p>
                </div>
                <div className="bg-auto-light p-6 rounded-lg">
                  <h3 className="font-semibold text-auto-blue mb-2">Local Landmarks</h3>
                  <p className="text-auto-gray">Harleysville National Bank, Mennonite Heritage Center, Indian Creek Country Club, local shopping centers</p>
                </div>
              </div>
            </div>
            <div className="bg-auto-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Harleysville Service Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">Population:</span>
                  <span className="font-semibold text-auto-blue">~9,300</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">Zip Code:</span>
                  <span className="font-semibold text-auto-blue">19438</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">County:</span>
                  <span className="font-semibold text-auto-blue">Montgomery County</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">Service Time:</span>
                  <span className="font-semibold text-auto-blue">Under 2 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">Mobile Service:</span>
                  <span className="font-semibold text-auto-blue">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Harleysville */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-auto-blue text-center mb-12">Areas We Serve in Harleysville</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-auto-amber mb-4" />
                <h3 className="text-xl font-bold text-auto-blue mb-3">Harleysville Pike</h3>
                <p className="text-auto-gray mb-4">Main commercial corridor with businesses, shopping centers, and professional offices.</p>
                <ul className="text-sm text-auto-gray space-y-1">
                  <li>• Commercial businesses</li>
                  <li>• Professional offices</li>
                  <li>• Shopping plazas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Home className="h-8 w-8 text-auto-amber mb-4" />
                <h3 className="text-xl font-bold text-auto-blue mb-3">Residential Communities</h3>
                <p className="text-auto-gray mb-4">Family-friendly neighborhoods and developments throughout the Harleysville area.</p>
                <ul className="text-sm text-auto-gray space-y-1">
                  <li>• Established neighborhoods</li>
                  <li>• New developments</li>
                  <li>• Family communities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Car className="h-8 w-8 text-auto-amber mb-4" />
                <h3 className="text-xl font-bold text-auto-blue mb-3">Salford Station Area</h3>
                <p className="text-auto-gray mb-4">Growing area near Salford Station with new businesses and residential growth.</p>
                <ul className="text-sm text-auto-gray space-y-1">
                  <li>• Transit-accessible</li>
                  <li>• Mixed-use development</li>
                  <li>• Growing commercial area</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-auto-blue text-center mb-12">Why Choose Us in Harleysville</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Mobile Service</h3>
              <p className="text-auto-gray mb-6">We come directly to your Harleysville location - home, office, or anywhere convenient.</p>
              <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                <a href="tel:445-200-7542" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Mobile Visit
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
              <h3 className="text-xl font-bold text-auto-blue mb-3">Same-Day Service</h3>
              <p className="text-auto-gray mb-6">Fast, professional restoration completed in under 2 hours at your Harleysville location.</p>
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
            Serving all of Harleysville with professional headlight restoration. 
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