import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Schedule } from "@/components/Schedule";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Instructors } from "@/components/Instructors";
import { CommunityDiscount } from "@/components/CommunityDiscount";
import { Pricing } from "@/components/Pricing";
import { Discussion } from "@/components/Discussion";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Benefits />
      <Schedule />
      <WhoIsItFor />
      <Instructors />
      <CommunityDiscount />
      <Pricing />
      <Discussion />
      <Footer />
    </div>
  );
};

export default Index;
