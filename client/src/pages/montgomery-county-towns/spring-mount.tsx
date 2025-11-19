import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Car, Shield, Clock, CheckCircle, Star, Wrench } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';

export function SpringMountPage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Spring Mount Auto Lens Repair | Professional Headlight Restoration Montgomery County PA"
        description="Expert headlight restoration services in Spring Mount, Pennsylvania. Mobile auto lens repair serving Montgomery County. Crystal-clear results, 1-year warranty. Call 445-200-7542 for same-day service."
        keywords="Spring Mount auto lens repair, headlight restoration Spring Mount PA, Montgomery County headlight repair, Spring Mount car headlight cleaning, foggy headlight repair Spring Mount, mobile headlight restoration Spring Mount Pennsylvania"
        canonical="https://workspace--njaslow.replit.app/spring-mount-auto-lens-repair"
        ogImage="https://workspace--njaslow.replit.app/og-image.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-gradient-to-br from-auto-blue to-blue-900 text-white py-20 sm:py-32 bg-cover bg-center"
        style={{backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 58, 138, 0.85)), url(/spring-mount-auto-lens-repair.jpg)'}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-auto-amber">Spring Mount</span> Auto Lens Repair
            </h1>
            <div className="flex items-center justify-center mb-6">
              <MapPin className="text-auto-amber mr-2 h-6 w-6" />
              <span className="text-xl sm:text-2xl">Professional Headlight Restoration in Spring Mount, Montgomery County PA</span>
            </div>
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your vehicle's foggy, yellowed headlights to crystal-clear brilliance. Mobile service available throughout Spring Mount and surrounding communities.
            </p>
            <Button asChild className="bg-auto-amber text-white px-12 py-6 text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-2xl hover:shadow-3xl">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="mr-3 h-7 w-7" />
                Call (445) 200-7542 Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-auto-blue mb-6">
              Why Choose Our Spring Mount Headlight Restoration Service
            </h2>
            <p className="text-xl text-auto-gray max-w-3xl mx-auto">
              Professional auto lens repair delivering exceptional results for Spring Mount residents
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <Shield className="h-16 w-16 text-auto-amber mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-auto-blue mb-3">1-Year Warranty</h3>
                <h4 className="text-lg font-semibold text-auto-gray mb-2">Guaranteed Protection</h4>
                <h5 className="text-base text-auto-gray mb-2">Quality Assurance</h5>
                <h6 className="text-sm text-auto-gray">Every restoration backed by our comprehensive warranty</h6>
              </CardContent>
            </Card>

            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <Car className="h-16 w-16 text-auto-amber mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-auto-blue mb-3">Mobile Service</h3>
                <h4 className="text-lg font-semibold text-auto-gray mb-2">We Come to You</h4>
                <h5 className="text-base text-auto-gray mb-2">Convenient Scheduling</h5>
                <h6 className="text-sm text-auto-gray">Service at your home, office, or anywhere in Spring Mount</h6>
              </CardContent>
            </Card>

            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <Clock className="h-16 w-16 text-auto-amber mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-auto-blue mb-3">Fast Service</h3>
                <h4 className="text-lg font-semibold text-auto-gray mb-2">Same-Day Available</h4>
                <h5 className="text-base text-auto-gray mb-2">Quick Turnaround</h5>
                <h6 className="text-sm text-auto-gray">Most restorations completed in under 60 minutes</h6>
              </CardContent>
            </Card>

            <Card className="bg-auto-light shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <Star className="h-16 w-16 text-auto-amber mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-auto-blue mb-3">Expert Results</h3>
                <h4 className="text-lg font-semibold text-auto-gray mb-2">Professional Grade</h4>
                <h5 className="text-base text-auto-gray mb-2">Certified Technicians</h5>
                <h6 className="text-sm text-auto-gray">Factory-level clarity and brightness restoration</h6>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-auto-blue mb-6">
              Our Professional Headlight Restoration Process
            </h2>
            <p className="text-xl text-auto-gray max-w-3xl mx-auto">
              Advanced multi-step restoration for long-lasting clarity in Spring Mount, PA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-auto-blue mb-4 text-center">Deep Cleaning</h3>
              <h4 className="text-lg font-semibold text-auto-gray mb-3 text-center">Surface Preparation</h4>
              <p className="text-auto-gray text-center">
                Thorough cleaning removes all dirt, debris, and oxidation from the headlight surface.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-auto-blue mb-4 text-center">Sanding & Polishing</h3>
              <h4 className="text-lg font-semibold text-auto-gray mb-3 text-center">Multi-Stage Restoration</h4>
              <p className="text-auto-gray text-center">
                Progressive sanding and professional-grade polishing compounds restore clarity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-auto-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-auto-blue mb-4 text-center">UV Protection</h3>
              <h4 className="text-lg font-semibold text-auto-gray mb-3 text-center">Long-Term Sealing</h4>
              <p className="text-auto-gray text-center">
                Premium UV-resistant coating protects against future yellowing and oxidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-auto-blue mb-12 text-center">
            Serving All of Spring Mount, Pennsylvania
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-auto-blue mb-6">
                Spring Mount Areas We Serve
              </h3>
              <h4 className="text-xl font-semibold text-auto-gray mb-4">Neighborhoods & Communities</h4>
              <div className="grid gap-3">
                {['Spring Mount Center', 'Schwenksville Area', 'Collegeville Vicinity', 'Skippack Creek', 'Perkiomen Township', 'Royersford Area'].map((area) => (
                  <div key={area} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <CheckCircle className="text-auto-amber h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="font-medium text-auto-blue">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-auto-blue mb-6">
                Nearby Montgomery County Towns
              </h3>
              <h4 className="text-xl font-semibold text-auto-gray mb-4">Extended Service Coverage</h4>
              <div className="grid gap-3">
                {['Schwenksville', 'Collegeville', 'Skippack', 'Royersford', 'Pottstown', 'Trappe'].map((town) => (
                  <div key={town} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <MapPin className="text-auto-amber h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="font-medium text-auto-blue">{town}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-auto-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="h-20 w-20 text-auto-amber mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Restore Your Headlights in Spring Mount?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Professional mobile headlight restoration service. Same-day appointments available throughout Spring Mount and Montgomery County.
          </p>
          <Button asChild className="bg-auto-amber text-white px-12 py-6 text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-2xl">
            <a href="tel:445-200-7542" className="flex items-center justify-center mx-auto w-fit">
              <Phone className="mr-3 h-7 w-7" />
              Call (445) 200-7542 Now
            </a>
          </Button>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "name": "Auto Lens Repair - Spring Mount",
          "image": "https://workspace--njaslow.replit.app/spring-mount-auto-lens-repair.jpg",
          "description": "Professional headlight restoration and auto lens repair services in Spring Mount, Pennsylvania. Mobile service available throughout Montgomery County.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Spring Mount",
            "addressRegion": "PA",
            "addressCountry": "US",
            "postalCode": "19478"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.2687",
            "longitude": "-75.4596"
          },
          "url": "https://workspace--njaslow.replit.app/spring-mount-auto-lens-repair",
          "telephone": "445-200-7542",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "areaServed": {
            "@type": "City",
            "name": "Spring Mount",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Pennsylvania"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Headlight Restoration Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile Headlight Restoration Spring Mount PA",
                  "description": "Professional mobile headlight restoration service in Spring Mount, Pennsylvania with same-day availability"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Auto Lens Repair Spring Mount",
                  "description": "Complete auto lens repair and headlight cleaning services for Spring Mount vehicles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Headlight UV Protection Coating",
                  "description": "Premium UV-resistant coating application to prevent future oxidation and yellowing"
                }
              }
            ]
          }
        })
      }} />
    </div>
  );
}

export default SpringMountPage;
