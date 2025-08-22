import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Yardley() {
  return (
    <>
      <SEOHead 
        title="Professional Headlight Restoration in Yardley, PA | Auto Lens Repair"
        description="Expert headlight restoration services in Yardley Borough, Bucks County. Mobile and drop-off options available. Serving historic Yardley and surrounding areas. Call (445) 200-7542."
        canonical="https://autolensrepair.com/towns/yardley"
        keywords="headlight restoration Yardley, headlight cleaning Yardley PA, foggy headlight repair Yardley Borough, headlight polishing Bucks County"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-auto-blue to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-auto-amber mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold">
                Headlight Restoration in Yardley
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional headlight restoration services for historic Yardley Borough
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Serving Yardley's charming historic district and neighborhoods from Main Street to the Delaware River. Mobile service brings crystal-clear headlight restoration to this picturesque Bucks County community.
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
              Headlight Restoration for Historic Yardley
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-auto-gray mb-6">
                  Yardley Borough is a charming historic community along the Delaware River in Bucks County, home to over 2,400 residents. With its quaint Main Street, proximity to I-95, and scenic riverside location, residents depend on clear headlights for safe navigation through the borough's historic streets and major thoroughfares.
                </p>
                <p className="text-lg text-auto-gray mb-6">
                  Whether you're exploring historic Main Street, visiting Lake Afton, or accessing the Delaware Canal towpath, properly functioning headlights ensure safe travel through Yardley's tree-lined streets and connection points to major highways.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-auto-blue mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Why Choose Our Yardley Service
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li>• Mobile service throughout Yardley Borough</li>
                    <li>• Historic district friendly approach</li>
                    <li>• 1-year warranty on all restorations</li>
                    <li>• Same-day service available</li>
                    <li>• Riverside community expertise</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-auto-amber p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    <li>• Historic Main Street</li>
                    <li>• Lake Afton area</li>
                    <li>• Delaware Canal vicinity</li>
                    <li>• Yardley Commons</li>
                    <li>• Riverside neighborhoods</li>
                  </ul>
                </div>
                <div className="bg-auto-blue p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Historic Benefits</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Historic preservation aware</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Small community focus</span>
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
              Ready to Restore Your Headlights in Yardley?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free quote today and experience the difference professional restoration makes
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