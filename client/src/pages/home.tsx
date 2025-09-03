import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, Shield, MapPin, ArrowRight, Home, Building, Store } from 'lucide-react';
import { Link } from 'wouter';

export default function HomePage() {
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
        title="Auto Lens Repair - Professional Headlight Restoration | Montgomery County, Bucks County, Philadelphia PA"
        description="Professional headlight restoration services in Montgomery County, Bucks County, and Philadelphia PA. Transform foggy, yellow headlights to crystal clear. Mobile service available. Call 445-200-7542"
        keywords="headlight restoration, Montgomery County, Bucks County, Philadelphia, auto headlight cleaning, mobile service"
        canonical="https://workspace--njaslow.replit.app/"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/auto-lens-repair-og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center w-full">
            <div className="w-full">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Transform Your <span className="text-auto-amber">Foggy Headlights</span> to Crystal Clear
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">
                Professional headlight restoration services in Montgomery County, Bucks County, and Philadelphia PA. 
                Mobile service available - we come to you or convenient drop-off options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto sm:max-w-none">
                <Button asChild className="bg-auto-amber text-white px-6 py-4 text-base sm:text-lg font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl flex-1">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5" />
                    <span className="whitespace-nowrap">Call (445) 200-7542</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-auto-amber text-auto-amber px-6 py-4 text-base sm:text-lg font-semibold hover:bg-auto-amber hover:text-white transition-all duration-200 rounded-lg flex-1">
                  <Link href="/gallery" className="flex items-center justify-center">
                    <span className="flex items-center">
                      View Results <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Link>
                </Button>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full">
                <div className="flex items-center min-w-0">
                  <Shield className="text-auto-amber text-lg sm:text-2xl mr-2 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">1 Year Warranty</span>
                </div>
                <div className="flex items-center min-w-0">
                  <MapPin className="text-auto-amber text-lg sm:text-2xl mr-2 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Mobile Service</span>
                </div>
              </div>
            </div>
            <div className="relative w-full mt-8 lg:mt-0">
              <img 
                src="https://pixabay.com/get/g69008b70156dbb078a51c276038f61d0322a422cf8856ed6c6ce77db0f370b7cc780c51e9dad95e366691527a9d67b47f63f07353e7726a707bb43f4defde696_1280.jpg" 
                alt="Professional automotive technician restoring headlights" 
                className="rounded-xl shadow-2xl w-full h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auto-blue mb-3 sm:mb-4">Our Professional Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-auto-gray max-w-3xl mx-auto">
              Restore your vehicle's headlights to like-new condition with our professional restoration process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-auto-blue mb-3 sm:mb-4">Mobile Service</h3>
                <p className="text-sm sm:text-base text-auto-gray mb-4 sm:mb-6">
                  We come to your location - home, office, or anywhere convenient for you. 
                  No need to leave your vehicle anywhere.
                </p>
                <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Mobile Service
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="h-8 w-8" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-auto-blue mb-3 sm:mb-4">Drop-Off Service</h3>
                <p className="text-sm sm:text-base text-auto-gray mb-4 sm:mb-6">
                  Prefer to drop off your vehicle? Our convenient location provides 
                  professional service while you wait or leave your car.
                </p>
                <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Location
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-auto-blue mb-3 sm:mb-4">Corporate Services</h3>
                <p className="text-sm sm:text-base text-auto-gray mb-4 sm:mb-6">
                  Fleet services for car dealerships, golf cart dealers, 
                  and any business with vehicle inventory.
                </p>
                <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 transition-all duration-200 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg w-full">
                  <a href="tel:445-200-7542" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Corporate Pricing
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-auto-blue mb-3 sm:mb-4">Dramatic Before & After Results</h2>
            <p className="text-base sm:text-lg lg:text-xl text-auto-gray max-w-3xl mx-auto">
              See the incredible transformation from foggy, yellowed headlights to crystal clear, diamond-bright clarity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="grid gap-4">
                <Card className="bg-white shadow-lg overflow-hidden">
                  <div className="relative">
                    <img src={item.before} alt={`Before: ${item.beforeTitle}`} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-auto-blue mb-2">{item.beforeTitle}</h3>
                    <p className="text-auto-gray">{item.beforeDesc}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg overflow-hidden">
                  <div className="relative">
                    <img src={item.after} alt={`After: ${item.afterTitle}`} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AFTER
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-auto-blue mb-2">{item.afterTitle}</h3>
                    <p className="text-auto-gray">{item.afterDesc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-auto-amber text-white px-8 py-4 text-lg font-bold hover:bg-yellow-400 hover:text-white">
              <a href="tel:445-200-7542">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Auto Lens Repair",
          "description": "Professional headlight restoration services in Montgomery County, Bucks County, and Philadelphia PA",
          "telephone": "445-200-7542",
          "areaServed": [
            "Montgomery County, PA",
            "Bucks County, PA", 
            "Philadelphia, PA"
          ],
          "serviceType": "Automotive headlight restoration",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Headlight Restoration Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile Headlight Restoration"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Drop-off Headlight Restoration"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Corporate Fleet Services"
                }
              }
            ]
          }
        })
      }} />
    </div>
  );
}
