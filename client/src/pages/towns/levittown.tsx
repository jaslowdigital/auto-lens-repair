import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Levittown() {
  return (
    <>
      <SEOHead 
        title="Professional Headlight Restoration in Levittown, PA | Auto Lens Repair"
        description="Expert headlight restoration services in Levittown, Bucks County. Mobile and drop-off options available. Serving all Levittown sections and neighborhoods. Call (445) 200-7542."
        canonical="https://workspace--njaslow.replit.app/levittown"
        keywords="headlight restoration Levittown, headlight cleaning Levittown PA, foggy headlight repair Levittown Bucks County, headlight polishing Bristol Township"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Untitled design_20250902_185324_0000_1756853701816.png"
        twitterHandle="@AutoLensRepair"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-auto-blue to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-auto-amber mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold">
                Headlight Restoration in Levittown
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional headlight restoration services for Levittown residents
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Serving all Levittown sections from Bristol Pike to New Falls Road. Mobile service brings crystal-clear headlight restoration directly to your home in America's first planned suburban community.
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
              Headlight Restoration for Historic Levittown
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-auto-gray mb-6">
                  Levittown is America's first planned suburban community, home to over 52,000 residents across its historic sections. With access to I-95, Route 13 (Bristol Pike), and New Falls Road, residents rely on clear headlights for safe commuting and neighborhood travel throughout Bucks County.
                </p>
                <p className="text-lg text-auto-gray mb-6">
                  Whether you're shopping at Oxford Valley Mall, visiting Core Creek Park, or navigating the tree-lined streets of this historic planned community, properly functioning headlights ensure safe travel through Levittown's well-established neighborhoods.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-auto-blue mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Why Choose Our Levittown Service
                  </h3>
                  <ul className="text-auto-gray space-y-2">
                    <li>• Mobile service to all Levittown sections</li>
                    <li>• Familiar with community layout and access</li>
                    <li>• 1-year warranty on all restorations</li>
                    <li>• Same-day service available</li>
                    <li>• Competitive rates for residents</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-auto-amber p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <ul className="space-y-2">
                    <li>• All Levittown sections</li>
                    <li>• Bristol Pike corridor</li>
                    <li>• New Falls Road area</li>
                    <li>• Levittown Shopping Center</li>
                    <li>• Oxford Valley vicinity</li>
                  </ul>
                </div>
                <div className="bg-auto-blue p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Community Benefits</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Historic community expertise</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span>Family-friendly service</span>
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
              Ready to Restore Your Headlights in Levittown?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free quote today and experience the difference professional restoration makes
            </p>
            <Button asChild className="bg-auto-amber text-white hover:bg-yellow-600 hover:text-white transition-all duration-200 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="w-5 w-5 mr-2" />
                Call (445) 200-7542 Now
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}