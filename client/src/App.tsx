import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Gallery from "@/pages/gallery";
import ServiceAreas from "@/pages/service-areas";
import Pricing from "@/pages/pricing";
import Corporate from "@/pages/corporate";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// County Pages
import { MontgomeryCountyPage } from "@/pages/montgomery-county";
import { BucksCountyPage } from "@/pages/bucks-county";
import { PhiladelphiaCountyPage } from "@/pages/philadelphia-county";

// Town Pages
import { NorristownPage } from "@/pages/towns/norristown";
import { KingOfPrussiaPage } from "@/pages/towns/king-of-prussia";
import { DoylestownPage } from "@/pages/towns/doylestown";
import { CenterCityPage } from "@/pages/towns/center-city";
import { BensalemPage } from "@/pages/towns/bensalem";
import { PottstownPage } from "@/pages/towns/pottstown";
import { NewHopePage } from "@/pages/towns/new-hope";
import QuakertownPage from "@/pages/towns/quakertown";
import HarleysvillePage from "@/pages/towns/harleysville";
import PhiladelphiaPage from "@/pages/towns/philadelphia";
import UpperDarbyPage from "@/pages/towns/upper-darby";
import AbingtonPage from "@/pages/towns/abington";
import WarminsterPage from "@/pages/towns/warminster";
import LansdalePage from "@/pages/towns/lansdale";
import LevittownPage from "@/pages/towns/levittown";
import PlymouthMeetingPage from "@/pages/towns/plymouth-meeting";
import CheltenhamPage from "@/pages/towns/cheltenham";
import WillowGrovePage from "@/pages/towns/willow-grove";
import YardleyPage from "@/pages/towns/yardley";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/corporate" component={Corporate} />
      <Route path="/contact" component={Contact} />
      
      {/* County Pages */}
      <Route path="/montgomery-county" component={MontgomeryCountyPage} />
      <Route path="/bucks-county" component={BucksCountyPage} />
      <Route path="/philadelphia-county" component={PhiladelphiaCountyPage} />
      
      {/* Town Pages */}
      <Route path="/norristown" component={NorristownPage} />
      <Route path="/king-of-prussia" component={KingOfPrussiaPage} />
      <Route path="/doylestown" component={DoylestownPage} />
      <Route path="/center-city" component={CenterCityPage} />
      <Route path="/bensalem" component={BensalemPage} />
      <Route path="/pottstown" component={PottstownPage} />
      <Route path="/new-hope" component={NewHopePage} />
      <Route path="/quakertown" component={QuakertownPage} />
      <Route path="/harleysville" component={HarleysvillePage} />
      <Route path="/philadelphia" component={PhiladelphiaPage} />
      <Route path="/upper-darby" component={UpperDarbyPage} />
      <Route path="/abington" component={AbingtonPage} />
      <Route path="/warminster" component={WarminsterPage} />
      <Route path="/lansdale" component={LansdalePage} />
      <Route path="/levittown" component={LevittownPage} />
      <Route path="/plymouth-meeting" component={PlymouthMeetingPage} />
      <Route path="/cheltenham" component={CheltenhamPage} />
      <Route path="/willow-grove" component={WillowGrovePage} />
      <Route path="/yardley" component={YardleyPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <Header />
          <main className="flex-1 w-full overflow-x-hidden">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
