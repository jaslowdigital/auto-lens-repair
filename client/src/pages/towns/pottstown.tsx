import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, Users, Calendar, Factory } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';

export function PottstownPage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="Pottstown PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services in Pottstown, Pennsylvania. Historic borough founded in 1752. Mobile service available. 1-year warranty. Call 445-200-7542"
        keywords="headlight restoration Pottstown PA, auto headlight cleaning Pottstown, mobile headlight repair Montgomery County"
        canonical="https://workspace--njaslow.replit.app/pottstown"
        ogImage="https://workspace--njaslow.replit.app/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png"
        twitterHandle="@AutoLensRepair"
      />

      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">Pottstown</span> Headlight Restoration
            </h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-auto-amber mr-2 h-5 w-5" />
              <span className="text-xl">Historic Borough • Population 22,711 • Founded 1752</span>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services in historic Pottstown, Pennsylvania. 
              Mobile service available throughout Montgomery County's industrial heritage community.
            </p>
            <Button asChild className="bg-auto-amber text-white px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
              <a href="tel:445-200-7542" className="flex items-center justify-center">
                <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                Call (445) 200-7542 Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">22,711</div>
              <div className="text-auto-gray">Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Calendar className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">1752</div>
              <div className="text-auto-gray">Founded</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Factory className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Historic</div>
              <div className="text-auto-gray">Industrial Heritage</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">5.1</div>
              <div className="text-auto-gray">Square Miles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Headlight Restoration in Historic Pottstown</h2>
          <p className="text-xl text-blue-100 mb-8">
            Serving Pottstown's residents and businesses with mobile headlight restoration. 
            Call now for your free quote and same-day service.
          </p>
          <Button asChild className="bg-auto-amber text-auto-blue px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-blue-800 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
            <a href="tel:445-200-7542" className="flex items-center justify-center">
              <Phone className="mr-3 h-5 sm:h-6 w-5 sm:w-6" />
              Call (445) 200-7542 Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}