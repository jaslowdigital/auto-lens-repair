import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Philadelphia() {
  return (
    <>
      <SEOHead 
        title="Professional Headlight Restoration in Philadelphia, PA | Auto Lens Repair"
        description="Expert headlight restoration services in Philadelphia. Mobile and drop-off options available. Serving Center City, South Philly, Northern Liberties, and all neighborhoods. Call (445) 200-7542."
        canonical="https://workspace--njaslow.replit.app/philadelphia"
        keywords="headlight restoration Philadelphia, headlight cleaning Philadelphia PA, foggy headlight repair Philadelphia, headlight polishing Center City, car headlight restoration South Philadelphia"
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
                Headlight Restoration in Philadelphia
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional headlight restoration services serving all Philadelphia neighborhoods
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              From Center City's bustling streets to South Philadelphia's historic neighborhoods, we bring crystal-clear headlight restoration directly to you. Mobile service available throughout the City of Brotherly Love.
            </p>
            <Button asChild className="bg-auto-amber text-white hover:bg-yellow-600 hover:text-white transition-all duration-200 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call (445) 200-7542 for Quote
              </a>
            </Button>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-auto-blue mb-12">
              Philadelphia Neighborhoods We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-auto-blue mb-4">Center City & Downtown</h3>
                <ul className="text-auto-gray space-y-2">
                  <li>• Rittenhouse Square</li>
                  <li>• Old City</li>
                  <li>• Society Hill</li>
                  <li>• Washington Square West</li>
                  <li>• Chinatown</li>
                  <li>• Northern Liberties</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-auto-blue mb-4">North & Northwest Philadelphia</h3>
                <ul className="text-auto-gray space-y-2">
                  <li>• Germantown</li>
                  <li>• Mount Airy</li>
                  <li>• Chestnut Hill</li>
                  <li>• Nicetown</li>
                  <li>• Hunting Park</li>
                  <li>• Frankford</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-auto-blue mb-4">South & Southwest Philadelphia</h3>
                <ul className="text-auto-gray space-y-2">
                  <li>• South Philadelphia</li>
                  <li>• Graduate Hospital</li>
                  <li>• Point Breeze</li>
                  <li>• Southwest Philadelphia</li>
                  <li>• Kingsessing</li>
                  <li>• Eastwick</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-auto-blue mb-12">
              Professional Headlight Restoration in America's Birthplace
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-auto-gray mb-6">
                  Philadelphia's rich history spans over 300 years, and today the city is home to over 1.5 million residents navigating busy streets from the Delaware River to the Schuylkill River. With major highways like I-95, I-76, and the Vine Street Expressway, clear headlights are essential for safe driving through our historic city.
                </p>
                <p className="text-lg text-auto-gray mb-6">
                  Whether you're driving past Independence Hall, heading to a Phillies game at Citizens Bank Park, or navigating the narrow streets of Old City, properly functioning headlights ensure your safety and the safety of other Philadelphians.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-auto-blue mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Why Choose Our Philadelphia Service
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li>• Mobile service to any Philadelphia neighborhood</li>
                    <li>• Familiar with city parking and access challenges</li>
                    <li>• 1-year warranty on all restorations</li>
                    <li>• Same-day service available</li>
                    <li>• Convenient drop-off locations</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-auto-amber p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Hours</h3>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Monday - Saturday: 8 AM - 6 PM</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Sunday: 10 AM - 4 PM</span>
                  </div>
                </div>
                <div className="bg-auto-blue p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Same-day service available</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Emergency service for fleet vehicles</span>
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
              Ready to Restore Your Headlights in Philadelphia?
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