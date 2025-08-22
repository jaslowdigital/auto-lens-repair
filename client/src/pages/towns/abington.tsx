import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Abington() {
  return (
    <>
      <SEOHead 
        title="Professional Headlight Restoration in Abington, PA | Auto Lens Repair"
        description="Expert headlight restoration services in Abington Township, Montgomery County. Mobile and drop-off options available. Serving Abington, Roslyn, and surrounding areas. Call (445) 200-7542."
        canonical="https://autolensrepair.com/towns/abington"
        keywords="headlight restoration Abington, headlight cleaning Abington PA, foggy headlight repair Abington Township, headlight polishing Montgomery County"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-auto-blue to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-auto-amber mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold">
                Headlight Restoration in Abington
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional headlight restoration services for Abington Township residents
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Serving Abington's established neighborhoods from Roslyn to Noble Station. Mobile service brings crystal-clear headlight restoration directly to your home or business in Montgomery County.
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
              Headlight Restoration for Abington Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-auto-gray mb-6">
                  Abington Township is Montgomery County's second-largest municipality, home to over 55,000 residents in well-established neighborhoods like Roslyn, Noble, and Abington. With easy access to the Pennsylvania Turnpike and Routes 611 and 73, residents depend on clear headlights for safe travel.
                </p>
                <p className="text-lg text-auto-gray mb-6">
                  Whether you're shopping at The Shops at Liberty Place, visiting Abington Hospital, or enjoying the trails at Rubicam Park, properly functioning headlights ensure safe navigation throughout the township's tree-lined streets and major corridors.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-auto-blue mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Why Choose Our Abington Service
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li>• Mobile service throughout Abington Township</li>
                    <li>• Convenient scheduling for busy professionals</li>
                    <li>• 1-year warranty on all restorations</li>
                    <li>• Same-day service available</li>
                    <li>• Familiar with local parking regulations</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-auto-amber p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    <li>• Roslyn</li>
                    <li>• Noble Station</li>
                    <li>• Abington center</li>
                    <li>• Jenkintown Road area</li>
                    <li>• Edge Hill</li>
                  </ul>
                </div>
                <div className="bg-auto-blue p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Local Advantages</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Quick response times</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Montgomery County expertise</span>
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
              Ready to Restore Your Headlights in Abington?
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