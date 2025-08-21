import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, DollarSign, Clock, Handshake, Car, Zap, Truck, Building } from 'lucide-react';

export default function CorporatePage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Corporate & Fleet Headlight Restoration Services | Auto Lens Repair"
        description="Professional headlight restoration for car dealerships, fleet managers, and automotive businesses. Volume discounts available. Call 445-200-7542"
        keywords="fleet headlight restoration, dealership services, corporate auto service, volume discounts, car lot services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Corporate & Fleet Services</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Professional headlight restoration services for dealerships, fleet managers, and automotive businesses. 
              Volume discounts and flexible scheduling available.
            </p>
          </div>
        </div>
      </section>

      {/* Why Dealerships Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auto-blue mb-4 sm:mb-6">Why Dealerships Choose Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2">Cost-Effective Solution</h3>
                    <p className="text-sm sm:text-base text-auto-gray">
                      Restore headlights instead of replacing them - save hundreds per vehicle. 
                      Professional restoration at a fraction of replacement cost.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2">Quick Turnaround</h3>
                    <p className="text-sm sm:text-base text-auto-gray">
                      Fast service to keep your inventory moving and lot presentation perfect. 
                      Most vehicles completed same day.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Volume Discounts</h3>
                    <p className="text-auto-gray">
                      Special pricing for multiple vehicles and ongoing partnerships. 
                      The more vehicles, the better the rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Car dealership lot with multiple vehicles" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Corporate Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-auto-blue mb-4">Corporate Clients We Serve</h2>
            <p className="text-xl text-auto-gray max-w-3xl mx-auto">
              From small independent lots to large corporate fleets, we provide professional 
              headlight restoration services tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-3">Auto Dealerships</h3>
                <p className="text-auto-gray">New and used car lots, certified pre-owned programs, luxury dealerships</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-3">Golf Cart Dealers</h3>
                <p className="text-auto-gray">Golf cart dealerships, recreational vehicle dealers, specialty vehicle lots</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-3">Fleet Services</h3>
                <p className="text-auto-gray">Commercial fleets, rental companies, leasing agencies, delivery services</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-3">Other Businesses</h3>
                <p className="text-auto-gray">Auto auctions, body shops, detail centers, fleet maintenance facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-auto-blue mb-4">Corporate Service Benefits</h2>
            <p className="text-xl text-auto-gray max-w-3xl mx-auto">
              Streamlined processes and professional service designed for business efficiency and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-auto-light">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Volume Pricing</h3>
                <p className="text-auto-gray">
                  Competitive rates that scale with your volume. The more vehicles you bring, 
                  the better your per-unit pricing becomes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Flexible Scheduling</h3>
                <p className="text-auto-gray">
                  Work around your business hours. Early morning, evening, or weekend service 
                  available to minimize disruption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Account Management</h3>
                <p className="text-auto-gray">
                  Dedicated account management for ongoing partnerships. Consistent service 
                  and streamlined communication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">On-Site Service</h3>
                <p className="text-auto-gray">
                  We come to your lot or facility. No need to transport vehicles or disrupt 
                  your normal operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1yr
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Full Warranty</h3>
                <p className="text-auto-gray">
                  Same 1-year warranty on all corporate work. Professional results backed 
                  by our guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  24/7
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Priority Support</h3>
                <p className="text-auto-gray">
                  Priority scheduling and support for established corporate accounts. 
                  Your success is our priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-auto-blue mb-4">Return on Investment</h2>
              <p className="text-xl text-auto-gray">
                Professional headlight restoration improves vehicle presentation and moves inventory faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-green-100 text-green-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  75%
                </div>
                <h3 className="font-bold text-lg text-auto-blue mb-2">Cost Savings</h3>
                <p className="text-auto-gray">vs. headlight replacement</p>
              </div>

              <div>
                <div className="bg-blue-100 text-blue-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2hr
                </div>
                <h3 className="font-bold text-lg text-auto-blue mb-2">Quick Service</h3>
                <p className="text-auto-gray">Most vehicles completed same day</p>
              </div>

              <div>
                <div className="bg-yellow-100 text-yellow-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  100%
                </div>
                <h3 className="font-bold text-lg text-auto-blue mb-2">Satisfaction</h3>
                <p className="text-auto-gray">Backed by 1-year warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-auto-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to improve your lot presentation and save money on headlight restoration? 
            Call now to discuss volume pricing and partnership opportunities.
          </p>
          <Button asChild className="bg-auto-amber text-auto-blue px-6 sm:px-12 py-4 text-base sm:text-xl font-bold hover:bg-yellow-400 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
              <span className="text-center">Call for Corporate Pricing: (445) 200-7542</span>
            </a>
          </Button>
          <p className="text-blue-100 mt-4">Ask about our partnership programs and volume discounts</p>
        </div>
      </section>
    </div>
  );
}
