import { Button } from '@/components/ui/button';
import { Phone, MapPin, Car, Shield, Clock, Users, Palette, TreePine } from 'lucide-react';
import SEOHead from '@/components/seo/seo-head';

export function NewHopePage() {
  return (
    <div className="font-inter w-full overflow-x-hidden">
      <SEOHead 
        title="New Hope PA Headlight Restoration | Auto Lens Repair"
        description="Professional headlight restoration services in New Hope, Pennsylvania. Historic arts community on Delaware River. Mobile service available. 1-year warranty. Call 445-200-7542"
        keywords="headlight restoration New Hope PA, auto headlight cleaning New Hope, mobile headlight repair Bucks County"
        canonical="https://autolensrepair.com/new-hope"
      />

      <section className="bg-gradient-to-br from-auto-blue to-blue-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-auto-amber">New Hope</span> Headlight Restoration
            </h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-auto-amber mr-2 h-5 w-5" />
              <span className="text-xl">Historic Arts Community • Population 2,512 • Delaware River</span>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional headlight restoration services in artistic New Hope, Pennsylvania. 
              Mobile service available throughout this charming Delaware River community.
            </p>
            <Button asChild className="bg-auto-amber text-auto-blue px-8 sm:px-12 py-4 text-lg sm:text-xl font-bold hover:bg-yellow-400 hover:text-blue-800 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl">
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
              <div className="text-2xl font-bold text-auto-blue">2,512</div>
              <div className="text-auto-gray">Population</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Palette className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Arts</div>
              <div className="text-auto-gray">Community</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <TreePine className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Delaware</div>
              <div className="text-auto-gray">River Town</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-8 w-8 text-auto-amber mx-auto mb-3" />
              <div className="text-2xl font-bold text-auto-blue">Historic</div>
              <div className="text-auto-gray">Charm</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-auto-blue to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Headlight Restoration in Artistic New Hope</h2>
          <p className="text-xl text-blue-100 mb-8">
            Serving New Hope's residents, artists, and visitors with mobile headlight restoration. 
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