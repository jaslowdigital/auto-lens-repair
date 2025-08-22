import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Warminster() {
  return (
    <>
      <SEOHead 
        title="Professional Headlight Restoration in Warminster, PA | Auto Lens Repair"
        description="Expert headlight restoration services in Warminster Township, Bucks County. Mobile and drop-off options available. Serving Warminster, Hartsville, and surrounding areas. Call (445) 200-7542."
        canonical="https://autolensrepair.com/towns/warminster"
        keywords="headlight restoration Warminster, headlight cleaning Warminster PA, foggy headlight repair Warminster Township, headlight polishing Bucks County"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-auto-blue to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-auto-amber mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold">
                Headlight Restoration in Warminster
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional headlight restoration services for Warminster Township residents
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Serving Warminster's growing communities from Hartsville to York Road. Mobile service brings crystal-clear headlight restoration directly to your home or business in Bucks County.
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
              Headlight Restoration for Warminster Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-auto-gray mb-6">
                  Warminster Township is a thriving Bucks County community of over 32,000 residents, strategically located between Philadelphia and New York. With access to the Pennsylvania Turnpike, Route 611, and Street Road, residents rely on clear headlights for safe commuting and local travel.
                </p>
                <p className="text-lg text-auto-gray mb-6">
                  Whether you're shopping at Warminster Village Shopping Center, visiting Log College Middle School, or enjoying Community Park, properly functioning headlights are essential for navigating the township's busy roads and residential neighborhoods.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-auto-blue mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Why Choose Our Warminster Service
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li>• Mobile service throughout Warminster Township</li>
                    <li>• Convenient scheduling for commuters</li>
                    <li>• 1-year warranty on all restorations</li>
                    <li>• Same-day service available</li>
                    <li>• Bucks County local expertise</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-auto-amber p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    <li>• Hartsville</li>
                    <li>• York Road corridor</li>
                    <li>• Street Road area</li>
                    <li>• Warminster Village</li>
                    <li>• Community Park vicinity</li>
                  </ul>
                </div>
                <div className="bg-auto-blue p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Benefits</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Enhanced highway visibility</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Improved suburban safety</span>
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
              Ready to Restore Your Headlights in Warminster?
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