import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/seo/seo-head';
import { Phone, MapPin } from 'lucide-react';

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      county: "Montgomery County",
      cities: [
        "Norristown", "King of Prussia", "Plymouth Meeting", "Conshohocken",
        "Blue Bell", "Fort Washington", "Ambler", "Lansdale", "Hatfield",
        "North Wales", "Montgomeryville", "Harleysville", "Collegeville",
        "Trappe", "Schwenksville", "Pottstown", "Royersford", "Spring House"
      ]
    },
    {
      county: "Bucks County", 
      cities: [
        "Doylestown", "Quakertown", "Newtown", "Warrington", "Chalfont", "New Britain",
        "Warminster", "Southampton", "Feasterville", "Trevose", "Levittown",
        "Bristol", "Langhorne", "Yardley", "Morrisville", "Richboro",
        "Ivyland", "Jamison", "Furlong", "Buckingham", "Perkasie"
      ]
    },
    {
      county: "Philadelphia",
      areas: [
        "Center City", "South Philadelphia", "Northeast Philadelphia", 
        "North Philadelphia", "West Philadelphia", "Northwest Philadelphia",
        "Fishtown", "Northern Liberties", "Old City", "Society Hill",
        "Queen Village", "Bella Vista", "Graduate Hospital", "Point Breeze",
        "University City", "Manayunk", "Mount Airy", "Chestnut Hill"
      ]
    }
  ];

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Service Areas - Montgomery County, Bucks County, Philadelphia PA | Auto Lens Repair"
        description="Professional headlight restoration services throughout Montgomery County, Bucks County, and Philadelphia PA. Mobile service available in all areas. Call 445-200-7542"
        keywords="Montgomery County headlight restoration, Bucks County auto service, Philadelphia headlight repair, mobile service Pennsylvania"
        canonical="https://workspace--njaslow.replit.app/service-areas"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png"
        twitterHandle="@AutoLensRepair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Service Areas in Pennsylvania</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Proudly serving Montgomery County, Bucks County, and Philadelphia with professional 
              headlight restoration services. Mobile service available in all areas.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="bg-auto-light shadow-lg h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="bg-auto-blue text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-auto-blue mb-4">{area.county}</h2>
                  
                  <div className="text-left mb-6 flex-grow">
                    <p className="text-auto-gray mb-4">
                      {area.county === "Montgomery County" && "Serving Norristown, King of Prussia, Plymouth Meeting, Conshohocken, Blue Bell, and surrounding areas."}
                      {area.county === "Bucks County" && "Serving Doylestown, Newtown, Warrington, Chalfont, Lansdale, and surrounding communities."}
                      {area.county === "Philadelphia" && "Serving Center City, South Philadelphia, Northeast Philadelphia, and surrounding neighborhoods."}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-1 text-sm text-auto-gray">
                      {(area.cities || area.areas)?.slice(0, 12).map((city, cityIndex) => (
                        <div key={cityIndex} className="text-xs">{city}</div>
                      ))}
                      {(area.cities || area.areas)?.length > 12 && (
                        <div className="text-xs font-semibold text-auto-blue col-span-2">+ Many More</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {area.county === "Montgomery County" && (
                      <>
                        <Link href="/montgomery-county">
                          <Button variant="outline" size="sm" className="w-full text-xs border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                            View {area.county} Details
                          </Button>
                        </Link>
                        <div className="grid grid-cols-2 gap-1">
                          <Link href="/norristown">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              Norristown
                            </Button>
                          </Link>
                          <Link href="/king-of-prussia">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              King of Prussia
                            </Button>
                          </Link>
                          <Link href="/pottstown">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              Pottstown
                            </Button>
                          </Link>
                          <Link href="/harleysville">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              Harleysville
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                    
                    {area.county === "Bucks County" && (
                      <>
                        <Link href="/bucks-county">
                          <Button variant="outline" size="sm" className="w-full text-xs border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                            View {area.county} Details
                          </Button>
                        </Link>
                        <div className="grid grid-cols-2 gap-1">
                          <Link href="/doylestown">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              Doylestown
                            </Button>
                          </Link>
                          <Link href="/bensalem">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              Bensalem
                            </Button>
                          </Link>
                          <Link href="/new-hope">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              New Hope
                            </Button>
                          </Link>
                          <Link href="/quakertown">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              Quakertown
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                    
                    {area.county === "Philadelphia" && (
                      <>
                        <Link href="/philadelphia-county">
                          <Button variant="outline" size="sm" className="w-full text-xs border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                            View {area.county} Details
                          </Button>
                        </Link>
                        <div className="grid grid-cols-1 gap-1">
                          <Link href="/center-city">
                            <Button variant="ghost" size="sm" className="w-full text-xs text-auto-blue hover:bg-auto-blue hover:text-white">
                              Center City
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <Button asChild className="bg-auto-blue text-auto-amber hover:bg-blue-800 hover:text-yellow-300 w-full">
                    <a href="tel:445-200-7542">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Service
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-auto-blue mb-4">Mobile Service Throughout Pennsylvania</h2>
            <p className="text-xl text-auto-gray max-w-3xl mx-auto">
              Our mobile service brings professional headlight restoration directly to your location 
              anywhere in our service areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-auto-blue mb-2">Your Location</h3>
                <p className="text-auto-gray text-sm">We come to your home, office, or anywhere convenient</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-auto-blue mb-2">Easy Scheduling</h3>
                <p className="text-auto-gray text-sm">Call to schedule at your preferred time</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  1hr
                </div>
                <h3 className="font-bold text-lg text-auto-blue mb-2">Quick Service</h3>
                <p className="text-auto-gray text-sm">Most services completed in 1-2 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardContent className="p-6">
                <div className="bg-auto-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  1yr
                </div>
                <h3 className="font-bold text-lg text-auto-blue mb-2">Warranty</h3>
                <p className="text-auto-gray text-sm">All mobile services include 1-year warranty</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Map Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-auto-blue mb-6">Comprehensive Pennsylvania Coverage</h2>
              <p className="text-xl text-auto-gray mb-6">
                Our service area covers the heart of southeastern Pennsylvania, including the major 
                population centers and suburbs where vehicle owners need professional headlight restoration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-auto-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    50+
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Cities & Towns Served</h3>
                    <p className="text-auto-gray">Comprehensive coverage across three major counties</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-auto-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    30mi
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Service Radius</h3>
                    <p className="text-auto-gray">Mobile service within 30 miles of our base</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-auto-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    7
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Days a Week</h3>
                    <p className="text-auto-gray">Monday-Saturday regular hours, Sunday by appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/attached_assets/20250902_181419_0000_1756851362133.png" 
                alt="Professional headlight restoration results - restored Hyundai Santa Fe headlights showing crystal clear visibility" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-auto-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Serving Your Area</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're in Montgomery County, Bucks County, or Philadelphia, 
            we're ready to restore your headlights with professional mobile or drop-off service.
          </p>
          <Button asChild className="bg-auto-amber text-white px-12 py-4 text-xl font-bold hover:bg-yellow-400">
            <a href="tel:445-200-7542">
              <Phone className="mr-3 h-6 w-6" />
              Call Now
            </a>
          </Button>
          <p className="text-blue-100 mt-4">Free estimates • Mobile service available</p>
        </div>
      </section>
    </div>
  );
}
