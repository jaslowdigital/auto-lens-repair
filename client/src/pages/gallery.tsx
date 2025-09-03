import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/seo/seo-head';
import { Phone } from 'lucide-react';

export default function GalleryPage() {
  const beforeAfterImages = [
    {
      before: "/attached_assets/20250902_181357_0000_1756851362110.png",
      after: "/attached_assets/20250902_181419_0000_1756851362133.png",
      beforeTitle: "Severely Oxidized",
      afterTitle: "Crystal Clear",
      beforeDesc: "Years of UV damage and oxidation causing dangerous visibility reduction",
      afterDesc: "Professional restoration to factory-level clarity and brightness"
    }
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Before & After Gallery - Headlight Restoration Results | Auto Lens Repair"
        description="See dramatic before and after results of our professional headlight restoration service. Transform foggy, yellow headlights to crystal clear diamond clarity."
        keywords="before after headlights, headlight restoration results, foggy headlight repair, yellow headlight cleaning"
        canonical="https://workspace--njaslow.replit.app/gallery"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/auto-lens-repair-og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Dramatic Before & After Results</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              See the incredible transformation from foggy, yellowed headlights to crystal clear, 
              diamond-bright clarity. Real results from real customers.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="space-y-4">
                {/* Before Image */}
                <Card className="bg-white shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.before} 
                      alt={`Before: ${item.beforeTitle}`} 
                      className="w-full h-48 object-cover"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-auto-blue mb-2">{item.beforeTitle}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-auto-gray">{item.beforeDesc}</p>
                  </CardContent>
                </Card>

                {/* After Image */}
                <Card className="bg-white shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.after} 
                      alt={`After: ${item.afterTitle}`} 
                      className="w-full h-48 object-cover"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AFTER
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-auto-blue mb-2">{item.afterTitle}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-auto-gray">{item.afterDesc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-auto-amber text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Get Your Quote: (445) 200-7542
              </a>
            </Button>
            <p className="text-auto-gray mt-4">Transform your headlights today - call now for pricing!</p>
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auto-blue mb-3 sm:mb-4">Why Our Results Last</h2>
            <p className="text-base sm:text-lg lg:text-xl text-auto-gray max-w-3xl mx-auto">
              Our professional-grade process ensures lasting results that maintain clarity and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-auto-light text-center">
              <CardContent className="p-8">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-auto-blue mb-3 sm:mb-4">Professional Materials</h3>
                <p className="text-auto-gray">
                  We use only professional-grade compounds and equipment, not consumer products 
                  that provide temporary results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light text-center">
              <CardContent className="p-8">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">Multi-Step Process</h3>
                <p className="text-auto-gray">
                  Our proven 5-step restoration process removes all oxidation and applies 
                  long-lasting UV protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-auto-light text-center">
              <CardContent className="p-8">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-auto-blue mb-4">1-Year Warranty</h3>
                <p className="text-auto-gray">
                  Every restoration is backed by our comprehensive 1-year warranty for 
                  your peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-auto-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get These Results for Your Vehicle</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let foggy, yellowed headlights compromise your vehicle's appearance and safety. 
            Call now for a free estimate on professional headlight restoration.
          </p>
          <Button asChild className="bg-auto-amber text-white px-12 py-4 text-xl font-bold hover:bg-yellow-400 hover:text-white">
            <a href="tel:445-200-7542">
              <Phone className="mr-3 h-6 w-6" />
              Call Now
            </a>
          </Button>
          <p className="text-blue-100 mt-4">Mobile service available throughout Pennsylvania</p>
        </div>
      </section>
    </div>
  );
}
