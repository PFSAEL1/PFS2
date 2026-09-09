import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Redirect, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCTABar from "./components/MobileCTABar";
import ReplacementFiltersCTA from "./components/ReplacementFiltersCTA";
import GlobalAnimations from "./GlobalAnimations";

// Pages
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Products
const ProductsHub = lazy(() => import("./pages/products/ProductsHub"));
const PaintBoothsHub = lazy(() => import("./pages/products/PaintBoothsHub"));
const OutdoorBoothPage = lazy(() => import("./pages/products/OutdoorBoothPage"));
const ContainerBoothPage = lazy(() => import("./pages/products/ContainerBoothPage"));
const EnclosedBoothsPage = lazy(() => import("./pages/products/EnclosedBoothsPage"));
const SprinterVanBoothPage = lazy(() => import("./pages/products/SprinterVanBoothPage"));
const PowderBoothsHub = lazy(() => import("./pages/products/PowderBoothsHub"));
const OvensHub = lazy(() => import("./pages/products/OvensHub"));
const PrepSupportHub = lazy(() => import("./pages/products/PrepSupportHub"));
const PaintWallsPage = lazy(() => import("./pages/products/PaintWallsPage"));
const BlastSystemsHub = lazy(() => import("./pages/products/BlastSystemsHub"));
const AirMakeUpUnitsHub = lazy(() => import("./pages/products/AirMakeUpUnitsHub"));
const HeatedAMUPage = lazy(() => import("./pages/products/HeatedAMUPage"));
const EnvironmentalRoomsHub = lazy(() => import("./pages/products/EnvironmentalRoomsHub"));
const TemperatureControlledRoomsPage = lazy(() => import("./pages/products/TemperatureControlledRoomsPage"));
const PartsFiltersHub = lazy(() => import("./pages/products/PartsFiltersHub"));
const ProductSubPage = lazy(() => import("./pages/products/ProductSubPage"));
const SprayToWastePage = lazy(() => import("./pages/products/SprayToWastePage"));
const PowderReclaimPage = lazy(() => import("./pages/products/PowderReclaimPage"));
const AircraftBoothPage = lazy(() => import("./pages/products/AircraftBoothPage"));
const CrossFlowBoothPage = lazy(() => import("./pages/products/CrossFlowBoothPage"));
const OpenFaceBoothPage = lazy(() => import("./pages/products/OpenFaceBoothPage"));
const CrossFlowAllPage = lazy(() => import("./pages/products/CrossFlowAllPage"));
const SemiDowndraftBoothPage = lazy(() => import("./pages/products/SemiDowndraftBoothPage"));
const FullDowndraftBoothPage = lazy(() => import("./pages/products/FullDowndraftBoothPage"));
const DowndraftRaisedBasementPage = lazy(() => import("./pages/products/DowndraftRaisedBasementPage"));
const SideDowndraftBoothPage = lazy(() => import("@/pages/products/SideDowndraftBoothPage"));
const HeatedBoothPage = lazy(() => import("@/pages/products/HeatedBoothPage"));
const DoubleWallBoothPage = lazy(() => import("@/pages/products/DoubleWallBoothPage"));
const InspectionBoothPage = lazy(() => import("@/pages/products/InspectionBoothPage"));
const TruckBoothsPage = lazy(() => import("@/pages/products/TruckBoothsPage"));
const PrepHub = lazy(() => import("./pages/products/PrepHub"));
const PrepStationsPage = lazy(() => import("./pages/products/PrepStationsPage"));
const BatchOvenPage = lazy(() => import("./pages/products/BatchOvenPage"));
const WalkInOvenPage = lazy(() => import("./pages/products/WalkInOvenPage"));
const MixingRoomPage = lazy(() => import("./pages/products/MixingRoomPage"));
const BlastingBoothsPage = lazy(() => import("./pages/products/BlastingBoothPage").then(m => ({ default: m.BlastingBoothsPage })));
const ReclaimBlastingBoothsPage = lazy(() => import("./pages/products/BlastingBoothPage").then(m => ({ default: m.ReclaimBlastingBoothsPage })));
const WashBoothPage = lazy(() => import("./pages/products/WashBoothPage"));
const HydrogenBusPage = lazy(() => import("./pages/products/HydrogenBusPage"));

// Industries
const IndustriesHub = lazy(() => import("./pages/industries/IndustriesHub"));
const IndustryPage = lazy(() => import("./pages/industries/IndustryPage"));
const EducationPage = lazy(() => import("./pages/industries/EducationPage"));
const WoodworkingPage = lazy(() => import("./pages/industries/WoodworkingPage"));
const IndustrialManufacturingPage = lazy(() => import("./pages/industries/IndustrialManufacturingPage"));
const AerospacePage = lazy(() => import("./pages/industries/AerospacePage"));
const TruckBusFleetPage = lazy(() => import("./pages/industries/TruckBusFleetPage"));
const CollisionRepairPage = lazy(() => import("./pages/industries/CollisionRepairPage"));
const GovernmentMilitaryPage = lazy(() => import("./pages/industries/GovernmentMilitaryPage"));
const MarinePage = lazy(() => import("./pages/industries/MarinePage"));
const RailTransitPage = lazy(() => import("./pages/industries/RailTransitPage"));
const AutomotiveManufacturingPage = lazy(() => import("./pages/industries/AutomotiveManufacturingPage"));
const HeavyEquipmentPage = lazy(() => import("@/pages/industries/HeavyEquipmentPage"));
const EnergyUtilitiesPage = lazy(() => import("@/pages/industries/EnergyUtilitiesPage"));

// Integration & Automation
const IntegrationHub = lazy(() => import("./pages/integration/IntegrationHub"));
const IntegrationSubPage = lazy(() => import("./pages/integration/IntegrationSubPage"));

// Service
const ServiceHub = lazy(() => import("./pages/service/ServiceHub"));
const ServiceSubPage = lazy(() => import("./pages/service/ServiceSubPage"));
const HazLocServicesPage = lazy(() => import("./pages/service/HazLocServicesPage"));
const SprayToWasteServicePage = lazy(() => import("./pages/service/SprayToWasteServicePage"));
const PowderReclaimServicePage = lazy(() => import("./pages/service/PowderReclaimServicePage"));

// Company
const CompanyHub = lazy(() => import("./pages/company/CompanyHub"));
const CompanySubPage = lazy(() => import("./pages/company/CompanySubPage"));
const CareersPage = lazy(() => import("./pages/company/CareersPage"));
const MeetTheTeamPage = lazy(() => import("./pages/company/MeetTheTeamPage"));
const CertificationsPage = lazy(() => import("./pages/company/CertificationsPage"));
const ManufacturingPage = lazy(() => import("./pages/company/ManufacturingPage"));
const NewsPage = lazy(() => import("./pages/company/NewsPage"));

// Resources
const ResourcesHub = lazy(() => import("./pages/resources/ResourcesHub"));
const ResourcesSubPage = lazy(() => import("./pages/resources/ResourcesSubPage"));
const ResourcesFAQsPage = lazy(() => import("./pages/resources/ResourcesFAQsPage"));

// Blog
const BlogHubPage = lazy(() => import("./pages/blog/BlogHubPage"));
const BlogPricingGuidePage = lazy(() => import("./pages/blog/BlogPricingGuidePage"));
const BlogCrossflowVsDowndraftPage = lazy(() => import("./pages/blog/BlogCrossflowVsDowndraftPage"));
const BlogUL508AControlPanelPage = lazy(() => import("./pages/blog/BlogUL508AControlPanelPage"));
const BlogMaintenanceChecklistPage = lazy(() => import("./pages/blog/BlogMaintenanceChecklistPage"));
const BlogReplacementPaintBoothFiltersPage = lazy(() => import("./pages/blog/BlogReplacementPaintBoothFiltersPage"));

// Contact
const ContactHub = lazy(() => import("./pages/contact/ContactHub"));
const ContactSubPage = lazy(() => import("./pages/contact/ContactSubPage"));

// Parts
const PartsHubPage = lazy(() => import("./pages/parts/PartsHubPage"));

// AEL Bridge
const EnclosuresStorage = lazy(() => import("./pages/EnclosuresStorage"));
// Landing Pages
const IndustrialLandingPage = lazy(() => import("./pages/landing/IndustrialLandingPage"));
// Support
const SupportPage = lazy(() => import("./pages/SupportPage"));
const BecomeADistributorPage = lazy(() => import("./pages/BecomeADistributorPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const FiltersPage = lazy(() => import("./pages/FiltersPage"));
const NeshapFiltersPage = lazy(() => import("./pages/filters/NeshapFiltersPage"));
const CaliforniaFiltersPage = lazy(() => import("./pages/filters/CaliforniaFiltersPage"));
const PaintBoothFiltersPage = lazy(() => import("./pages/filters/PaintBoothFiltersPage"));
const CaliforniaServicePage = lazy(() => import("./pages/CaliforniaServicePage"));
const LosAngelesServicePage = lazy(() => import("@/pages/LosAngelesServicePage"));
const BayAreaServicePage = lazy(() => import("@/pages/BayAreaServicePage"));

function LegacyAutomotiveRefinishRedirect() {
  return <Redirect to="/products/paint-booths" replace />;
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function PageLoader() {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center bg-[#f8f9fb] py-20">
      <div className="w-10 h-10 border-3 border-[#1B3A6B]/20 border-t-[#1B3A6B] rounded-full animate-spin mb-3" />
      <span className="text-xs font-semibold uppercase tracking-widest text-[#1B3A6B]/70 font-mono">
        Loading...
      </span>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const pathname = location.split(/[?#]/)[0];
  const showReplacementFiltersCTA =
    pathname === "/products/paint-booths" ||
    pathname.startsWith("/products/paint-booths/") ||
    pathname.startsWith("/products/container-booths") ||
    pathname === "/products/outdoor-booths";

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
        {showReplacementFiltersCTA && <ReplacementFiltersCTA />}
      </main>
      <Footer />
      {/* Sticky mobile CTA bar — only visible on mobile (<768px) */}
      <MobileCTABar />
    </div>
  );
}

function Router() {
  const [location] = useLocation();
  return (
    <Switch key={location}>
      <Route path="/" component={Home} />

      {/* Legacy automotive-refinish fallback: protects visitors who receive a cached SPA shell instead of the edge redirect. */}
      <Route path="/automotive-refinish" component={LegacyAutomotiveRefinishRedirect} />
      <Route path="/automotive-refinish/" component={LegacyAutomotiveRefinishRedirect} />

      {/* Products */}
      <Route path="/industrial-paint-booths" component={IndustrialLandingPage} />
      <Route path="/products" component={ProductsHub} />
      <Route path="/products/custom-solutions/hydrogen-bus-finishing-system" component={HydrogenBusPage} />
      <Route path="/products/paint-booths" component={PaintBoothsHub} />
      <Route path="/products/paint-booths/enclosed" component={EnclosedBoothsPage} />
      <Route path="/products/paint-booths/sprinter-van" component={SprinterVanBoothPage} />
      <Route path="/products/paint-booths/enclosed/:sub" component={ProductSubPage} />
      <Route path="/products/paint-booths/aircraft" component={AircraftBoothPage} />
      <Route path="/products/paint-booths/crossflow" component={CrossFlowBoothPage} />
      <Route path="/products/paint-booths/open-face" component={OpenFaceBoothPage} />
      <Route path="/products/paint-booths/crossflow-all" component={CrossFlowAllPage} />
      <Route path="/products/paint-booths/semi-downdraft" component={SemiDowndraftBoothPage} />
      <Route path="/products/paint-booths/full-downdraft" component={FullDowndraftBoothPage} />
      <Route path="/products/paint-booths/downdraft-raised-basement" component={DowndraftRaisedBasementPage} />
      <Route path="/products/paint-booths/side-downdraft" component={SideDowndraftBoothPage} />
      <Route path="/products/paint-booths/heated" component={HeatedBoothPage} />
      <Route path="/products/paint-booths/double-wall" component={DoubleWallBoothPage} />
      <Route path="/products/paint-booths/inspection" component={InspectionBoothPage} />
      <Route path="/products/paint-booths/truck-buses-fleet" component={TruckBoothsPage} />
      <Route path="/products/paint-booths/truck-booths" component={TruckBoothsPage} />
      <Route path="/products/paint-booths/wash-booth" component={WashBoothPage} />
      <Route path="/products/custom-solutions/hydrogen-bus-finishing-system" component={HydrogenBusPage} />
      <Route path="/products/paint-booths/:sub" component={ProductSubPage} />
      <Route path="/products/outdoor-booths" component={OutdoorBoothPage} />
      <Route path="/products/container-booths" component={ContainerBoothPage} />
      <Route path="/products/container-booths/:sub" component={ProductSubPage} />
      <Route path="/products/powder-booths" component={PowderBoothsHub} />
      <Route path="/products/powder-booths/spray-to-waste" component={SprayToWastePage} />
      <Route path="/products/powder-booths/powder-reclaim" component={PowderReclaimPage} />
      <Route path="/products/powder-booths/:sub" component={ProductSubPage} />
      <Route path="/products/ovens" component={OvensHub} />
      <Route path="/products/ovens/batch" component={BatchOvenPage} />
      <Route path="/products/ovens/walk-in" component={WalkInOvenPage} />
      <Route path="/products/ovens/:sub" component={ProductSubPage} />
      {/* Redirect legacy /products/prep-stations to correct path */}
      <Route path="/products/prep-stations">{() => { window.location.replace("/products/prep-support/prep-stations"); return null; }}</Route>
      <Route path="/products/prep-support" component={PrepSupportHub} />
      <Route path="/products/prep-support/paint-walls" component={PaintWallsPage} />
      <Route path="/products/prep-support/paint-mix-rooms">{() => { window.location.replace("/products/mixing-rooms"); return null; }}</Route>
      <Route path="/products/prep-support/prep-stations" component={PrepStationsPage} />
      <Route path="/products/prep-support/:sub" component={ProductSubPage} />
      <Route path="/products/prep" component={PrepHub} />
      <Route path="/products/prep/:sub" component={ProductSubPage} />
      <Route path="/products/blast-systems" component={BlastSystemsHub} />
      <Route path="/products/mixing-rooms" component={MixingRoomPage} />
      <Route path="/products/blast-systems/blasting-booths" component={BlastingBoothsPage} />
      <Route path="/products/blast-systems/reclaim-blasting-booths" component={ReclaimBlastingBoothsPage} />
      <Route path="/products/blast-systems/:sub" component={ProductSubPage} />
      <Route path="/products/air-make-up-units" component={AirMakeUpUnitsHub} />
      <Route path="/products/air-make-up-units/heated" component={HeatedAMUPage} />
      <Route path="/products/air-make-up-units/:sub" component={ProductSubPage} />
      <Route path="/products/environmental-rooms" component={EnvironmentalRoomsHub} />
      <Route path="/products/environmental-rooms/temperature-controlled" component={TemperatureControlledRoomsPage} />
      <Route path="/products/environmental-rooms/:sub" component={ProductSubPage} />
      <Route path="/products/parts-filters" component={PartsFiltersHub} />
      <Route path="/products/parts-filters/:sub" component={ProductSubPage} />

      {/* OEM Parts Store */}
      <Route path="/parts" component={PartsHubPage} />
      <Route path="/parts/:sub" component={PartsHubPage} />

      {/* Industries */}
      <Route path="/industries" component={IndustriesHub} />
      <Route path="/industries/education" component={EducationPage} />
      <Route path="/industries/woodworking" component={WoodworkingPage} />
      <Route path="/industries/industrial-manufacturing" component={IndustrialManufacturingPage} />
      <Route path="/industries/aerospace-defense" component={AerospacePage} />
      <Route path="/industries/truck-bus-fleet" component={TruckBusFleetPage} />
      <Route path="/industries/collision-repair" component={CollisionRepairPage} />
      <Route path="/industries/government-military" component={GovernmentMilitaryPage} />
      <Route path="/industries/marine" component={MarinePage} />
      <Route path="/industries/rail-transit" component={RailTransitPage} />
      <Route path="/industries/automotive-manufacturing" component={AutomotiveManufacturingPage} />
      <Route path="/industries/heavy-equipment" component={HeavyEquipmentPage} />
          <Route path="/industries/energy-utilities" component={EnergyUtilitiesPage} />
      <Route path="/industries/:industry" component={IndustryPage} />

      {/* Integration & Automation */}
      <Route path="/integration-automation" component={IntegrationHub} />
      <Route path="/integration-automation/:sub" component={IntegrationSubPage} />

      {/* Service */}
      <Route path="/service" component={ServiceHub} />
      <Route path="/service/hazardous-location" component={HazLocServicesPage} />
      <Route path="/service/spray-to-waste" component={SprayToWasteServicePage} />
      <Route path="/service/powder-reclaim" component={PowderReclaimServicePage} />
      <Route path="/service/california" component={CaliforniaServicePage} />
      <Route path="/service/los-angeles" component={LosAngelesServicePage} />
      <Route path="/service/bay-area" component={BayAreaServicePage} />
      <Route path="/service/:sub" component={ServiceSubPage} />

      {/* Dedicated support request page */}
      <Route path="/support" component={SupportPage} />

      {/* Company */}
      <Route path="/company" component={CompanyHub} />
      <Route path="/company/team" component={MeetTheTeamPage} />
      <Route path="/company/certifications" component={CertificationsPage} />
      <Route path="/company/manufacturing" component={ManufacturingPage} />
      <Route path="/company/careers" component={CareersPage} />
      <Route path="/company/news" component={NewsPage} />
      <Route path="/company/:sub" component={CompanySubPage} />

      {/* Resources */}
      <Route path="/resources" component={ResourcesHub} />
      <Route path="/resources/faqs" component={ResourcesFAQsPage} />
      <Route path="/resources/:sub" component={ResourcesSubPage} />

      {/* Blog */}
      <Route path="/blog" component={BlogHubPage} />
      <Route path="/blog/how-much-does-industrial-spray-booth-cost" component={BlogPricingGuidePage} />
      <Route path="/blog/crossflow-vs-downdraft-spray-booth" component={BlogCrossflowVsDowndraftPage} />
      <Route path="/blog/ul508a-certified-control-panel-spray-booth" component={BlogUL508AControlPanelPage} />
      <Route path="/blog/spray-booth-maintenance-filter-checklist" component={BlogMaintenanceChecklistPage} />
      <Route path="/blog/replacement-paint-booth-filters" component={BlogReplacementPaintBoothFiltersPage} />

      {/* Contact */}
      <Route path="/contact" component={ContactHub} />
      <Route path="/contact/:sub" component={ContactSubPage} />

      {/* AEL Bridge */}
      <Route path="/enclosures-storage" component={EnclosuresStorage} />

      <Route path="/become-a-distributor" component={BecomeADistributorPage} />
      <Route path="/legal" component={LegalPage} />
      <Route path="/filters" component={FiltersPage} />
      <Route path="/parts/filters/neshap-aerospace-compliance" component={NeshapFiltersPage} />
      <Route path="/parts/filters/california-west-coast-paint-booth-filters" component={CaliforniaFiltersPage} />
      <Route path="/parts/filters/paint-booth-filters" component={PaintBoothFiltersPage} />
      {/* Legacy redirects — keep old URLs alive for SEO */}
      <Route path="/spray-booth-service-california">{() => { window.location.replace("/service/california"); return null; }}</Route>
      <Route path="/spray-booth-service-los-angeles">{() => { window.location.replace("/service/los-angeles"); return null; }}</Route>
      <Route path="/spray-booth-service-bay-area">{() => { window.location.replace("/service/bay-area"); return null; }}</Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// function App() {
//   return (
//     <ErrorBoundary>
//       <ThemeProvider defaultTheme="light">
//         <TooltipProvider>
//           <Toaster />
//           <Layout>
//             <Router />
//           </Layout>
//         </TooltipProvider>
//       </ThemeProvider>
//     </ErrorBoundary>
//   );
// }

function App() {
  return (
    <>
      <GlobalAnimations  />
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Layout>
              <Router />
            </Layout>
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
