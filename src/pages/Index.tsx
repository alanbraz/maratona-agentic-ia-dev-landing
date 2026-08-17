import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Tools } from "@/components/Tools";
import { Schedule } from "@/components/Schedule";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { Instructors } from "@/components/Instructors";
import { CommunityDiscount } from "@/components/CommunityDiscount";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Benefits />
      <Tools />
      <Schedule />
      <WhoIsItFor />
      <Instructors />
      <CommunityDiscount />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
