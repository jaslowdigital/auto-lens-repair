import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, Shield, CheckCircle, Clock, DollarSign, Wrench } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Headlight Restoration Pricing - Call for Quote | Auto Lens Repair"
        description="Custom headlight restoration pricing for every vehicle. Call 445-200-7542 for transparent, upfront pricing. 1-year warranty included on all services."
        keywords="headlight restoration pricing, call for quote, Montgomery County auto service, transparent pricing"
        canonical="https://workspace--njaslow.replit.app/pricing"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Untitled design_20250902_185324_0000_1756853701816.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Pricing Information</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Every vehicle is different. Call now for a personalized quote based on your specific needs 
              and headlight condition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-auto-blue mb-3 sm:mb-4">Custom Pricing for Every Vehicle</h2>
                <p className="text-base sm:text-lg text-auto-gray">
                  Pricing varies based on vehicle type, headlight condition, and service location. 
                  We provide transparent, upfront pricing with no hidden fees.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-auto-light p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-auto-blue mb-2 sm:mb-3 flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    Factors Affecting Price:
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      Headlight condition severity
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      Vehicle make and model
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      Service location (mobile vs drop-off)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2 h-4 w-4" />
                      Additional services needed
                    </li>
                  </ul>
                </div>

                <div className="bg-auto-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-auto-blue mb-3 flex items-center">
                    <Wrench className="mr-2 h-6 w-6" />
                    What's Included:
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li className="flex items-center">
                      <Shield className="text-auto-amber mr-2 h-4 w-4" />
                      1-Year Service Warranty
                    </li>
                    <li className="flex items-center">
                      <Wrench className="text-auto-amber mr-2 h-4 w-4" />
                      Professional grade materials
                    </li>
                    <li className="flex items-center">
                      <Clock className="text-auto-amber mr-2 h-4 w-4" />
                      Quick turnaround time
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-auto-amber mr-2 h-4 w-4" />
                      Satisfaction guarantee
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button asChild className="bg-auto-amber text-white px-6 sm:px-12 py-4 text-base sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                    <span className="text-center">Call Now for Pricing: (445) 200-7542</span>
                  </a>
                </Button>
                <p className="text-auto-gray mt-4">Free estimates available • No obligation quotes</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-auto-blue mb-4">Why We Provide Custom Quotes</h2>
            <p className="text-xl text-auto-gray max-w-3xl mx-auto">
              Every headlight restoration is unique. We evaluate your specific needs to provide 
              accurate, fair pricing without surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-auto-light text-center">
              <CardContent className="p-8">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Accurate Assessment</h3>
                <p className="text-auto-gray">
                  We evaluate the exact condition of your headlights to determine the appropriate 
                  restoration process and materials needed.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light text-center">
              <CardContent className="p-8">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Fair Pricing</h3>
                <p className="text-auto-gray">
                  You only pay for what you need. Simple restoration gets simple pricing, 
                  complex jobs get appropriate pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light text-center">
              <CardContent className="p-8">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">No Surprises</h3>
                <p className="text-auto-gray">
                  Transparent pricing discussed upfront. No hidden fees, no surprise charges, 
                  no pressure to buy extras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Value */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-auto-blue mb-6">Value That Lasts</h2>
              <p className="text-xl text-auto-gray mb-6">
                Professional headlight restoration is an investment in your vehicle's safety, 
                appearance, and value. Compare the cost of restoration vs. replacement.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-lg text-green-700 mb-2">Headlight Restoration</h3>
                  <p className="text-auto-gray">Professional restoration with 1-year warranty</p>
                  <p className="text-sm text-green-600 font-semibold">Call for custom pricing</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-lg text-red-700 mb-2">Headlight Replacement</h3>
                  <p className="text-auto-gray">New OEM headlight assemblies (parts + labor)</p>
                  <p className="text-sm text-red-600 font-semibold">$400 - $1,200+ per vehicle</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-auto-light rounded-lg">
                <h3 className="font-bold text-lg text-auto-blue mb-3">Additional Benefits:</h3>
                <ul className="space-y-2 text-auto-gray">
                  <li>• Maintains original equipment</li>
                  <li>• Environmentally friendly option</li>
                  <li>• Quick turnaround time</li>
                  <li>• Mobile service convenience</li>
                </ul>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional headlight restoration value comparison" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-auto-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Your Custom Quote Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let pricing uncertainty keep you from restoring your headlights. 
            Call now for a free, no-obligation quote tailored to your vehicle.
          </p>
          <Button asChild className="bg-auto-amber text-white px-12 py-4 text-xl font-bold hover:bg-yellow-400">
            <a href="tel:445-200-7542">
              <Phone className="mr-3 h-6 w-6" />
              Call Now
            </a>
          </Button>
          <p className="text-blue-100 mt-4">Free estimates • Transparent pricing • No hidden fees</p>
        </div>
      </section>
    </div>
  );
}
