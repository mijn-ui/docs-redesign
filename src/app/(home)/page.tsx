import TopBackgroundGradient from "@/components/decorations/background-gradient";
import TopGridGradient from "@/components/decorations/grid-gradient";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ComponentSection from "./sections/component-section";
import ContributorSection from "./sections/contributor-section";
import LandingSection from "./sections/landing-section";
import TemplateSection from "./sections/template-section";

export const Metadata = {
  title: "MijnUI",
  description:
    "MijnUI offers flexible, ready-to-use components for building marketing sites, dashboards, and e-commerce platforms.",
};

const Homepage = () => (
  <>
    <TopBackgroundGradient />
    <TopGridGradient className="stroke-fg-default/10" />

    <Navbar />

    <main>
      <div
        className="flex w-full justify-center px-5 pt-32 sm:px-8 sm:pt-44 md:px-10 md:pt-60"
        id="hero"
      >
        <LandingSection />
      </div>

      <div className="mt-[clamp(120px,15vw,240px)]" id="get-started">
        <ComponentSection />
      </div>

      <div
        className="flex w-full items-center justify-center px-8"
        id="templates"
      >
        <TemplateSection />
      </div>

      <div
        className="relative flex w-full flex-col items-center justify-center gap-12 py-20"
        id="contributors"
      >
        <ContributorSection />
      </div>
    </main>

    <Footer className="relative justify-center" />
  </>
);

export default Homepage;
