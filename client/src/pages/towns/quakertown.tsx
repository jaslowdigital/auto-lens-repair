import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Car, Shield, Clock, Home } from 'lucide-react';

export default function QuakertownPage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Headlight Restoration Quakertown PA - Auto Lens Repair | Mobile Service Available"
        description="Professional headlight restoration services in Quakertown, PA. Serving upper Bucks County with mobile and drop-off headlight cleaning. Call 445-200-7542 for free quotes."
        keywords="headlight restoration Quakertown PA, Quakertown auto headlight cleaning, Bucks County headlight repair, mobile headlight service"
        canonical="https://autolensrepair.com/towns/quakertown"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-8 w-8 text-auto-amber mr-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Headlight Restoration in <span className="text-auto-amber">Quakertown, PA</span>
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional headlight restoration services in Quakertown, Pennsylvania. 
            Mobile service available throughout upper Bucks County's historic borough.
          </p>
          <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
              Call (445) 200-7542 Now
            </a>
          </Button>
        </div>
      </section>

      {/* Quakertown Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-auto-blue mb-6">Professional Service in Historic Quakertown</h2>
              <p className="text-lg text-auto-gray mb-6">
                Quakertown, founded in 1803, is a charming borough in upper Bucks County with a population of approximately 8,900 residents. 
                Known for its historic downtown district and annual Quakertown Farmer's Market, this community values quality craftsmanship and reliable service.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-auto-light p-6 rounded-lg">
                  <h3 className="font-semibold text-auto-blue mb-2">Service Coverage</h3>
                  <p className="text-auto-gray">Downtown historic district, residential neighborhoods, Route 309 corridor, and surrounding communities</p>
                </div>
                <div className="bg-auto-light p-6 rounded-lg">
                  <h3 className="font-semibold text-auto-blue mb-2">Local Landmarks</h3>
                  <p className="text-auto-gray">Quakertown Community Park, Liberty Bell Museum, Memorial Park, Quakertown Swamp</p>
                </div>
              </div>
            </div>
            <div className="bg-auto-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-auto-blue mb-6">Quakertown Service Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">Population:</span>
                  <span className="font-semibold text-auto-blue">~8,900</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">Zip Code:</span>
                  <span className="font-semibold text-auto-blue">18951</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-auto-gray">County:</span>
                  <span className="font-semibold text-auto-blue">Bucks County</span>
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

      {/* Service Areas in Quakertown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-auto-blue text-center mb-12">Areas We Serve in Quakertown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-auto-amber mb-4" />
                <h3 className="text-xl font-bold text-auto-blue mb-3">Historic Downtown</h3>
                <p className="text-auto-gray mb-4">Main Street, Broad Street, and the historic commercial district with shops and restaurants.</p>
                <ul className="text-sm text-auto-gray space-y-1">
                  <li>• Main Street corridor</li>
                  <li>• Historic commercial buildings</li>
                  <li>• Local business district</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Home className="h-8 w-8 text-auto-amber mb-4" />
                <h3 className="text-xl font-bold text-auto-blue mb-3">Residential Areas</h3>
                <p className="text-auto-gray mb-4">Established neighborhoods throughout Quakertown borough and surrounding developments.</p>
                <ul className="text-sm text-auto-gray space-y-1">
                  <li>• Old Bethlehem Pike area</li>
                  <li>• Park Avenue neighborhood</li>
                  <li>• Residential side streets</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Car className="h-8 w-8 text-auto-amber mb-4" />
                <h3 className="text-xl font-bold text-auto-blue mb-3">Route 309 Corridor</h3>
                <p className="text-auto-gray mb-4">Commercial and business areas along the major Route 309 thoroughfare.</p>
                <ul className="text-sm text-auto-gray space-y-1">
                  <li>• Route 309 businesses</li>
                  <li>• Shopping centers</li>
                  <li>• Commercial properties</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-auto-blue text-center mb-12">Why Choose Us in Quakertown</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Car className="h-12 w-12 text-auto-amber mx-auto mb-4" />
              <h3 className="text-xl font-bold text-auto-blue mb-3">Mobile Service</h3>
              <p className="text-auto-gray mb-6">We come directly to your Quakertown location - home, office, or anywhere convenient.</p>
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
              <p className="text-auto-gray mb-6">Fast, professional restoration completed in under 2 hours at your Quakertown location.</p>
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
            Serving all of Quakertown with professional headlight restoration. 
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