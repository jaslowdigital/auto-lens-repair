import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, Clock, Shield, Home, Store, Building } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="font-inter">
      <SEOHead 
        title="Contact Auto Lens Repair - Call 445-200-7542 | Headlight Restoration"
        description="Contact Auto Lens Repair for professional headlight restoration. Call 445-200-7542 for mobile or drop-off service in Montgomery County, Bucks County, Philadelphia PA."
        keywords="contact auto lens repair, headlight restoration contact, 445-200-7542, mobile service contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Restore Your Headlights?</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Contact us today for a free estimate. Mobile service available throughout Montgomery County, 
              Bucks County, and Philadelphia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auto-blue mb-6 sm:mb-8">Get Your Free Estimate</h2>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="bg-auto-amber text-auto-blue w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-auto-blue">Call Now</h3>
                    <a href="tel:445-200-7542" className="text-auto-amber text-xl sm:text-2xl lg:text-3xl font-bold hover:text-yellow-500 transition-colors">
                      (445) 200-7542
                    </a>
                    <p className="text-sm sm:text-base text-auto-gray mt-1">Free estimates • No obligation quotes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-auto-amber text-auto-blue w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl text-auto-blue">Business Hours</h3>
                    <div className="text-auto-gray space-y-1">
                      <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: By Appointment</p>
                      <p className="text-sm text-auto-blue font-semibold">Emergency service available</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-auto-amber text-auto-blue w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-auto-blue">1-Year Warranty</h3>
                    <p className="text-auto-gray">All services backed by our comprehensive warranty</p>
                    <p className="text-sm text-green-600 font-semibold">Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-auto-light rounded-lg">
                <h3 className="font-bold text-xl text-auto-blue mb-4">What to Expect When You Call:</h3>
                <ul className="space-y-2 text-auto-gray">
                  <li>• Free phone consultation about your headlight condition</li>
                  <li>• Scheduling that works with your availability</li>
                  <li>• Transparent pricing discussion upfront</li>
                  <li>• Choice of mobile service or drop-off location</li>
                  <li>• Professional service backed by 1-year warranty</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-auto-blue mb-8">Service Options</h2>
              <div className="space-y-6">
                <Card className="bg-blue-50 border-l-4 border-auto-blue">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-auto-blue flex items-center">
                      <Home className="mr-3 h-6 w-6 text-auto-amber" />
                      Mobile Service
                    </h3>
                    <p className="text-auto-gray mb-3">
                      We come to your location - home, office, or anywhere convenient. 
                      Our mobile unit brings professional equipment to you.
                    </p>
                    <div className="text-sm text-auto-blue">
                      <p>✓ Available throughout our service areas</p>
                      <p>✓ Professional mobile equipment</p>
                      <p>✓ No travel required for you</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-auto-blue flex items-center">
                      <Store className="mr-3 h-6 w-6 text-auto-amber" />
                      Drop-Off Service
                    </h3>
                    <p className="text-auto-gray mb-3">
                      Convenient location for drop-off service. Perfect if you're running 
                      errands or prefer the traditional service approach.
                    </p>
                    <div className="text-sm text-auto-blue">
                      <p>✓ Professional shop environment</p>
                      <p>✓ Wait or leave your vehicle</p>
                      <p>✓ Call for location details</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50 border-l-4 border-auto-amber">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-auto-blue flex items-center">
                      <Building className="mr-3 h-6 w-6 text-auto-amber" />
                      Corporate/Fleet
                    </h3>
                    <p className="text-auto-gray mb-3">
                      Special rates for dealerships and fleet services. Volume discounts 
                      and flexible scheduling for business accounts.
                    </p>
                    <div className="text-sm text-auto-blue">
                      <p>✓ Volume pricing available</p>
                      <p>✓ Flexible business scheduling</p>
                      <p>✓ Account management services</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Quick Reference */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-auto-blue mb-4">We Serve All of Southeastern Pennsylvania</h2>
            <p className="text-xl text-auto-gray">Mobile and drop-off service available throughout our coverage area</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-auto-blue mb-3">Montgomery County</h3>
                <p className="text-auto-gray text-sm">
                  Norristown, King of Prussia, Plymouth Meeting, Conshohocken, Blue Bell, 
                  Fort Washington, Ambler, Lansdale, and surrounding areas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-auto-blue mb-3">Bucks County</h3>
                <p className="text-auto-gray text-sm">
                  Doylestown, Newtown, Warrington, Chalfont, Warminster, Southampton, 
                  Levittown, Bristol, Langhorne, and surrounding communities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-auto-blue mb-3">Philadelphia</h3>
                <p className="text-auto-gray text-sm">
                  Center City, South Philadelphia, Northeast Philadelphia, North Philadelphia, 
                  West Philadelphia, Manayunk, and all neighborhoods
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-auto-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Wait - Call Today!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Foggy, yellowed headlights are a safety hazard and hurt your vehicle's appearance. 
            Professional restoration is just a phone call away.
          </p>
          <Button asChild className="bg-auto-amber text-auto-blue px-12 py-4 text-xl font-bold hover:bg-yellow-400">
            <a href="tel:445-200-7542">
              <Phone className="mr-3 h-6 w-6" />
              Call (445) 200-7542 Now
            </a>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
            <span className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              1-Year Warranty
            </span>
            <span className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Free Estimates
            </span>
            <span className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Mobile Service
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
