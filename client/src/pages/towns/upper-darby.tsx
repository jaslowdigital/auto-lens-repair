import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UpperDarby() {
  return (
    <>
      <SEOHead 
        title="Professional Headlight Restoration in Upper Darby, PA | Auto Lens Repair"
        description="Expert headlight restoration services in Upper Darby Township. Mobile and drop-off options available. Serving all of Upper Darby and surrounding areas. Call (445) 200-7542."
        canonical="https://autolensrepair.com/towns/upper-darby"
        keywords="headlight restoration Upper Darby, headlight cleaning Upper Darby PA, foggy headlight repair Upper Darby Township, headlight polishing Delaware County"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-auto-blue to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-auto-amber mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold">
                Headlight Restoration in Upper Darby
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional headlight restoration services for Upper Darby Township residents
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Serving Upper Darby's diverse neighborhoods from Drexel Hill to Lansdowne Avenue. Mobile service brings crystal-clear headlight restoration directly to your home or business.
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
              Headlight Restoration for Upper Darby Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-auto-gray mb-6">
                  Upper Darby Township is Delaware County's largest municipality, home to over 82,000 residents across neighborhoods like Drexel Hill, Stonehurst, and Bywood. With easy access to I-476 (Blue Route) and proximity to Philadelphia, residents rely on clear headlights for safe commuting and local travel.
                </p>
                <p className="text-lg text-auto-gray mb-6">
                  Whether you're shopping at the Upper Darby Farmer's Market, visiting Highland Park, or commuting to Center City via SEPTA, properly functioning headlights are essential for navigating Upper Darby's busy streets and highways.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-auto-blue mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Why Choose Our Upper Darby Service
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li>• Mobile service throughout Upper Darby Township</li>
                    <li>• Convenient scheduling around your commute</li>
                    <li>• 1-year warranty on all restorations</li>
                    <li>• Same-day service available</li>
                    <li>• Competitive pricing for local residents</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-auto-amber p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    <li>• Drexel Hill</li>
                    <li>• Stonehurst</li>
                    <li>• Bywood</li>
                    <li>• Highland Park area</li>
                    <li>• Lansdowne Avenue corridor</li>
                  </ul>
                </div>
                <div className="bg-auto-blue p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Benefits</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Improved night visibility</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Enhanced vehicle appearance</span>
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
              Ready to Restore Your Headlights in Upper Darby?
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