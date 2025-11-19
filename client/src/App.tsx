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

// Montgomery County Towns
import { AbingtonPage as MCAbingtonPage } from "@/pages/montgomery-county-towns/abington";
import { AmblerPage } from "@/pages/montgomery-county-towns/ambler";
import { ArdmorePage } from "@/pages/montgomery-county-towns/ardmore";
import { AudubonPage } from "@/pages/montgomery-county-towns/audubon";
import { BalaCynwydPage } from "@/pages/montgomery-county-towns/bala-cynwyd";
import { BlueBellPage } from "@/pages/montgomery-county-towns/blue-bell";
import { BridgeportPage } from "@/pages/montgomery-county-towns/bridgeport";
import { BrynAthynPage } from "@/pages/montgomery-county-towns/bryn-athyn";
import { CedarsPage } from "@/pages/montgomery-county-towns/cedars";
import { CheltenhamPage as MCCheltenhamPage } from "@/pages/montgomery-county-towns/cheltenham";
import { CollegevillePage } from "@/pages/montgomery-county-towns/collegeville";
import { ColmarPage } from "@/pages/montgomery-county-towns/colmar";
import { ConshohockenPage } from "@/pages/montgomery-county-towns/conshohocken";
import { CreameryPage } from "@/pages/montgomery-county-towns/creamery";
import { DresherPage } from "@/pages/montgomery-county-towns/dresher";
import { EaglevillePage } from "@/pages/montgomery-county-towns/eagleville";
import { EastGreenvillePage } from "@/pages/montgomery-county-towns/east-greenville";
import { ElkinsParkPage } from "@/pages/montgomery-county-towns/elkins-park";
import { FairviewVillagePage } from "@/pages/montgomery-county-towns/fairview-village";
import { FlourtownPage } from "@/pages/montgomery-county-towns/flourtown";
import { FortWashingtonPage } from "@/pages/montgomery-county-towns/fort-washington";
import { FranconiaPage } from "@/pages/montgomery-county-towns/franconia";
import { FrederickPage } from "@/pages/montgomery-county-towns/frederick";
import { GilbertsvillePage } from "@/pages/montgomery-county-towns/gilbertsville";
import { GladwynePage } from "@/pages/montgomery-county-towns/gladwyne";
import { GlensidePage } from "@/pages/montgomery-county-towns/glenside";
import { GreenLanePage } from "@/pages/montgomery-county-towns/green-lane";
import { GwyneddPage } from "@/pages/montgomery-county-towns/gwynedd";
import { GwyneddValleyPage } from "@/pages/montgomery-county-towns/gwynedd-valley";
import { HarleysvillePage as MCHarleysvillePage } from "@/pages/montgomery-county-towns/harleysville";
import { HatboroPage } from "@/pages/montgomery-county-towns/hatboro";
import { HatfieldPage } from "@/pages/montgomery-county-towns/hatfield";
import { HaverfordPage } from "@/pages/montgomery-county-towns/haverford";
import { HorshamPage } from "@/pages/montgomery-county-towns/horsham";
import { HuntingdonValleyPage } from "@/pages/montgomery-county-towns/huntingdon-valley";
import { JenkintownPage } from "@/pages/montgomery-county-towns/jenkintown";
import { KingOfPrussiaPage as MCKingOfPrussiaPage } from "@/pages/montgomery-county-towns/king-of-prussia";
import { KulpsvillePage } from "@/pages/montgomery-county-towns/kulpsville";
import { LafayetteHillPage } from "@/pages/montgomery-county-towns/lafayette-hill";
import { LansdalePage as MCLansdalePage } from "@/pages/montgomery-county-towns/lansdale";
import { LederachPage } from "@/pages/montgomery-county-towns/lederach";
import { MainlandPage } from "@/pages/montgomery-county-towns/mainland";
import { MerionStationPage } from "@/pages/montgomery-county-towns/merion-station";
import { MontClarePage } from "@/pages/montgomery-county-towns/mont-clare";
import { MontgomeryvillePage } from "@/pages/montgomery-county-towns/montgomeryville";
import { NarberthPage } from "@/pages/montgomery-county-towns/narberth";
import { NorristownPage as MCNorristownPage } from "@/pages/montgomery-county-towns/norristown";
import { NorthWalesPage } from "@/pages/montgomery-county-towns/north-wales";
import { OaksPage } from "@/pages/montgomery-county-towns/oaks";
import { OrelandPage } from "@/pages/montgomery-county-towns/oreland";
import { PalmPage } from "@/pages/montgomery-county-towns/palm";
import { PennsburgPage } from "@/pages/montgomery-county-towns/pennsburg";
import { PerkiomenvillePage } from "@/pages/montgomery-county-towns/perkiomenville";
import { PlymouthMeetingPage as MCPlymouthMeetingPage } from "@/pages/montgomery-county-towns/plymouth-meeting";
import { PottstownPage as MCPottstownPage } from "@/pages/montgomery-county-towns/pottstown";
import { RedHillPage } from "@/pages/montgomery-county-towns/red-hill";
import { RoyersfordPage } from "@/pages/montgomery-county-towns/royersford";
import { SalfordPage } from "@/pages/montgomery-county-towns/salford";
import { SalfordvillePage } from "@/pages/montgomery-county-towns/salfordville";
import { SassamansvillePage } from "@/pages/montgomery-county-towns/sassamansville";
import { SchwenksvillePage } from "@/pages/montgomery-county-towns/schwenksville";
import { SkippackPage } from "@/pages/montgomery-county-towns/skippack";
import { SoudertonPage } from "@/pages/montgomery-county-towns/souderton";
import { SpringHousePage } from "@/pages/montgomery-county-towns/spring-house";
import { SpringMountPage } from "@/pages/montgomery-county-towns/spring-mount";
import { SumneytownPage } from "@/pages/montgomery-county-towns/sumneytown";
import { TelfordPage } from "@/pages/montgomery-county-towns/telford";
import { TylersportPage } from "@/pages/montgomery-county-towns/tylersport";
import { WestPointPage } from "@/pages/montgomery-county-towns/west-point";
import { WillowGrovePage as MCWillowGrovePage } from "@/pages/montgomery-county-towns/willow-grove";
import { WorcesterPage } from "@/pages/montgomery-county-towns/worcester";
import { WoxallPage } from "@/pages/montgomery-county-towns/woxall";
import { WyncotePage } from "@/pages/montgomery-county-towns/wyncote";
import { WynnewoodPage } from "@/pages/montgomery-county-towns/wynnewood";
import { ZieglervillePage } from "@/pages/montgomery-county-towns/zieglerville";

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
      
      {/* Montgomery County Town Pages */}
      <Route path="/abington-auto-lens-repair" component={MCAbingtonPage} />
      <Route path="/ambler-auto-lens-repair" component={AmblerPage} />
      <Route path="/ardmore-auto-lens-repair" component={ArdmorePage} />
      <Route path="/audubon-auto-lens-repair" component={AudubonPage} />
      <Route path="/bala-cynwyd-auto-lens-repair" component={BalaCynwydPage} />
      <Route path="/blue-bell-auto-lens-repair" component={BlueBellPage} />
      <Route path="/bridgeport-auto-lens-repair" component={BridgeportPage} />
      <Route path="/bryn-athyn-auto-lens-repair" component={BrynAthynPage} />
      <Route path="/cedars-auto-lens-repair" component={CedarsPage} />
      <Route path="/cheltenham-auto-lens-repair" component={MCCheltenhamPage} />
      <Route path="/collegeville-auto-lens-repair" component={CollegevillePage} />
      <Route path="/colmar-auto-lens-repair" component={ColmarPage} />
      <Route path="/conshohocken-auto-lens-repair" component={ConshohockenPage} />
      <Route path="/creamery-auto-lens-repair" component={CreameryPage} />
      <Route path="/dresher-auto-lens-repair" component={DresherPage} />
      <Route path="/eagleville-auto-lens-repair" component={EaglevillePage} />
      <Route path="/east-greenville-auto-lens-repair" component={EastGreenvillePage} />
      <Route path="/elkins-park-auto-lens-repair" component={ElkinsParkPage} />
      <Route path="/fairview-village-auto-lens-repair" component={FairviewVillagePage} />
      <Route path="/flourtown-auto-lens-repair" component={FlourtownPage} />
      <Route path="/fort-washington-auto-lens-repair" component={FortWashingtonPage} />
      <Route path="/franconia-auto-lens-repair" component={FranconiaPage} />
      <Route path="/frederick-auto-lens-repair" component={FrederickPage} />
      <Route path="/gilbertsville-auto-lens-repair" component={GilbertsvillePage} />
      <Route path="/gladwyne-auto-lens-repair" component={GladwynePage} />
      <Route path="/glenside-auto-lens-repair" component={GlensidePage} />
      <Route path="/green-lane-auto-lens-repair" component={GreenLanePage} />
      <Route path="/gwynedd-auto-lens-repair" component={GwyneddPage} />
      <Route path="/gwynedd-valley-auto-lens-repair" component={GwyneddValleyPage} />
      <Route path="/harleysville-auto-lens-repair" component={MCHarleysvillePage} />
      <Route path="/hatboro-auto-lens-repair" component={HatboroPage} />
      <Route path="/hatfield-auto-lens-repair" component={HatfieldPage} />
      <Route path="/haverford-auto-lens-repair" component={HaverfordPage} />
      <Route path="/horsham-auto-lens-repair" component={HorshamPage} />
      <Route path="/huntingdon-valley-auto-lens-repair" component={HuntingdonValleyPage} />
      <Route path="/jenkintown-auto-lens-repair" component={JenkintownPage} />
      <Route path="/king-of-prussia-auto-lens-repair" component={MCKingOfPrussiaPage} />
      <Route path="/kulpsville-auto-lens-repair" component={KulpsvillePage} />
      <Route path="/lafayette-hill-auto-lens-repair" component={LafayetteHillPage} />
      <Route path="/lansdale-auto-lens-repair" component={MCLansdalePage} />
      <Route path="/lederach-auto-lens-repair" component={LederachPage} />
      <Route path="/mainland-auto-lens-repair" component={MainlandPage} />
      <Route path="/merion-station-auto-lens-repair" component={MerionStationPage} />
      <Route path="/mont-clare-auto-lens-repair" component={MontClarePage} />
      <Route path="/montgomeryville-auto-lens-repair" component={MontgomeryvillePage} />
      <Route path="/narberth-auto-lens-repair" component={NarberthPage} />
      <Route path="/norristown-auto-lens-repair" component={MCNorristownPage} />
      <Route path="/north-wales-auto-lens-repair" component={NorthWalesPage} />
      <Route path="/oaks-auto-lens-repair" component={OaksPage} />
      <Route path="/oreland-auto-lens-repair" component={OrelandPage} />
      <Route path="/palm-auto-lens-repair" component={PalmPage} />
      <Route path="/pennsburg-auto-lens-repair" component={PennsburgPage} />
      <Route path="/perkiomenville-auto-lens-repair" component={PerkiomenvillePage} />
      <Route path="/plymouth-meeting-auto-lens-repair" component={MCPlymouthMeetingPage} />
      <Route path="/pottstown-auto-lens-repair" component={MCPottstownPage} />
      <Route path="/red-hill-auto-lens-repair" component={RedHillPage} />
      <Route path="/royersford-auto-lens-repair" component={RoyersfordPage} />
      <Route path="/salford-auto-lens-repair" component={SalfordPage} />
      <Route path="/salfordville-auto-lens-repair" component={SalfordvillePage} />
      <Route path="/sassamansville-auto-lens-repair" component={SassamansvillePage} />
      <Route path="/schwenksville-auto-lens-repair" component={SchwenksvillePage} />
      <Route path="/skippack-auto-lens-repair" component={SkippackPage} />
      <Route path="/souderton-auto-lens-repair" component={SoudertonPage} />
      <Route path="/spring-house-auto-lens-repair" component={SpringHousePage} />
      <Route path="/spring-mount-auto-lens-repair" component={SpringMountPage} />
      <Route path="/sumneytown-auto-lens-repair" component={SumneytownPage} />
      <Route path="/telford-auto-lens-repair" component={TelfordPage} />
      <Route path="/tylersport-auto-lens-repair" component={TylersportPage} />
      <Route path="/west-point-auto-lens-repair" component={WestPointPage} />
      <Route path="/willow-grove-auto-lens-repair" component={MCWillowGrovePage} />
      <Route path="/worcester-auto-lens-repair" component={WorcesterPage} />
      <Route path="/woxall-auto-lens-repair" component={WoxallPage} />
      <Route path="/wyncote-auto-lens-repair" component={WyncotePage} />
      <Route path="/wynnewood-auto-lens-repair" component={WynnewoodPage} />
      <Route path="/zieglerville-auto-lens-repair" component={ZieglervillePage} />
      
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
