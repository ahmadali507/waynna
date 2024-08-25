import { AboutWaynaa } from "./_layout/about_waynaa";
import { Cta } from "./_layout/cta";
import { Discover } from "./_layout/discover";
import { Features } from "./_layout/features";
import { Footer } from "./_layout/footer";
import { GrowYourBusiness } from "./_layout/grow_your_business";
import { Header } from "./_layout/header";
import { Hero } from "./_layout/hero";
import HowItWorks from "./_layout/how_it_works";
import { WhyChoose } from "./_layout/why_choose";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Discover />
      <Features />
      <HowItWorks />
      <WhyChoose />
      <AboutWaynaa />
      <GrowYourBusiness />
      <Cta />
      <Footer />
    </div>
  );
};
export default HomePage;
