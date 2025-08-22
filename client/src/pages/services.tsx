import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, Shield, Clock, CheckCircle, Home, Store, Building } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Professional Headlight Restoration Services | Auto Lens Repair"
        description="Mobile and drop-off headlight restoration services. Professional grade materials, 1-year warranty. Serving Montgomery County, Bucks County, Philadelphia PA."
        keywords="mobile headlight restoration, drop-off service, corporate fleet services, automotive headlight cleaning"
        canonical="https://workspace--njaslow.replit.app/services"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Professional Services</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive headlight restoration services designed to meet your needs. 
              From mobile service to corporate fleet solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-10 w-10" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-auto-blue mb-3 sm:mb-4">Mobile Service</h2>
                <p className="text-sm sm:text-base text-auto-gray mb-4 sm:mb-6">
                  Our most popular service! We bring the shop to you. Perfect for busy professionals 
                  and families who can't spare the time to drop off their vehicle.
                </p>
                
                <div className="text-left mb-6">
                  <h3 className="font-bold text-lg mb-3 text-auto-blue">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Service at your location</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Professional grade equipment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>1-year warranty</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>No travel required</span>
                    </li>
                  </ul>
                </div>

                <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Mobile Service
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Store className="h-10 w-10" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-auto-blue mb-3 sm:mb-4">Drop-Off Service</h2>
                <p className="text-sm sm:text-base text-auto-gray mb-4 sm:mb-6">
                  Convenient drop-off location with professional service. Perfect if you're 
                  already running errands or prefer the traditional service approach.
                </p>
                
                <div className="text-left mb-4 sm:mb-6">
                  <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-auto-blue">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Convenient location</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Professional shop environment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>1-year warranty</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Wait or leave your car</span>
                    </li>
                  </ul>
                </div>

                <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Location
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-10 w-10" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-auto-blue mb-3 sm:mb-4">Corporate Services</h2>
                <p className="text-sm sm:text-base text-auto-gray mb-4 sm:mb-6">
                  Volume services for dealerships, fleet managers, and businesses with 
                  multiple vehicles. Special pricing and scheduling available.
                </p>
                
                <div className="text-left mb-4 sm:mb-6">
                  <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-auto-blue">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Volume discounts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>1-year warranty</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      <span>Account management</span>
                    </li>
                  </ul>
                </div>

                <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Corporate Pricing
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-auto-blue mb-4">Our Professional Process</h2>
            <p className="text-xl text-auto-gray max-w-3xl mx-auto">
              Every headlight restoration follows our proven 5-step process for consistent, 
              professional results that last.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: 1, title: "Inspection", desc: "Thorough assessment of headlight condition" },
              { step: 2, title: "Preparation", desc: "Cleaning and masking surrounding areas" },
              { step: 3, title: "Sanding", desc: "Progressive sanding to remove oxidation" },
              { step: 4, title: "Polishing", desc: "Professional grade polishing compounds" },
              { step: 5, title: "Protection", desc: "UV protective coating application" }
            ].map((item) => (
              <Card key={item.step} className="bg-white text-center">
                <CardContent className="p-6">
                  <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-auto-blue mb-2">{item.title}</h3>
                  <p className="text-auto-gray text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-auto-light p-8 md:p-12 rounded-xl text-center">
            <Shield className="text-auto-amber w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-auto-blue mb-4">1-Year Warranty Guarantee</h2>
            <p className="text-xl text-auto-gray mb-6 max-w-3xl mx-auto">
              Every headlight restoration is backed by our comprehensive 1-year warranty. 
              If you experience any issues with clarity or UV protection, we'll fix it at no charge.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <Clock className="text-auto-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Full Year Coverage</h3>
                  <p className="text-auto-gray">12 months of warranty protection from service date</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-auto-gray">If you're not satisfied, we'll make it right</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-auto-amber mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Professional Standards</h3>
                  <p className="text-auto-gray">All work meets industry professional standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-auto-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Restore Your Headlights?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Choose the service option that works best for you. All services include our 
            professional restoration process and 1-year warranty.
          </p>
          <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
              Call (445) 200-7542 Now
            </a>
          </Button>
          <p className="text-blue-100 mt-4">Free estimates available • No obligation quotes</p>
        </div>
      </section>
    </div>
  );
}
