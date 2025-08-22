import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WillowGrove() {
  return (
    <>
      <SEOHead 
        title="Professional Headlight Restoration in Willow Grove, PA | Auto Lens Repair"
        description="Expert headlight restoration services in Willow Grove, Montgomery County. Mobile and drop-off options available. Serving Willow Grove and surrounding areas. Call (445) 200-7542."
        canonical="https://workspace--njaslow.replit.app/willow-grove"
        keywords="headlight restoration Willow Grove, headlight cleaning Willow Grove PA, foggy headlight repair Montgomery County, headlight polishing Upper Moreland"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png"
        twitterHandle="@AutoLensRepair"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-auto-blue to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-auto-amber mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold">
                Headlight Restoration in Willow Grove
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional headlight restoration services for Willow Grove area residents
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Serving Willow Grove's shopping district and neighborhoods from York Road to Easton Road. Mobile service brings crystal-clear headlight restoration directly to your location in Montgomery County.
            </p>
            <Button asChild className="bg-auto-amber text-white hover:bg-yellow-600 hover:text-white transition-all duration-200 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call (445) 200-7542 for Quote
              </a>
            </Button>
          </div>
        </section>

        {/* Local Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-auto-blue mb-12">
              Headlight Restoration for Willow Grove Shopping District
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-auto-gray mb-6">
                  Willow Grove is a major shopping and commercial destination in Montgomery County, home to Willow Grove Park Mall and numerous businesses along York Road. With heavy traffic from shoppers and commuters accessing major highways, residents depend on clear headlights for safe navigation.
                </p>
                <p className="text-lg text-auto-gray mb-6">
                  Whether you're shopping at Willow Grove Park Mall, dining along York Road, or visiting the nearby Willow Grove Naval Air Station Joint Reserve Base, properly functioning headlights ensure safe travel through this busy commercial corridor and surrounding residential areas.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-auto-blue mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Why Choose Our Willow Grove Service
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li>• Mobile service to shopping centers and homes</li>
                    <li>• Convenient mall parking lot service</li>
                    <li>• 1-year warranty on all restorations</li>
                    <li>• Same-day service available</li>
                    <li>• Expertise with high-traffic areas</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-auto-amber p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    <li>• Willow Grove Park Mall</li>
                    <li>• York Road corridor</li>
                    <li>• Easton Road area</li>
                    <li>• Moreland Road vicinity</li>
                    <li>• Surrounding neighborhoods</li>
                  </ul>
                </div>
                <div className="bg-auto-blue p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Shopping Benefits</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2" />
                    <span>While-you-shop service</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span>High-traffic area expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-auto-blue to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Headlights in Willow Grove?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free quote today and see the dramatic difference professional restoration makes
            </p>
            <Button asChild className="bg-auto-amber text-white hover:bg-yellow-600 hover:text-white transition-all duration-200 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call (445) 200-7542 Now
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}