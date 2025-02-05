
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary" />
      
      <div className="relative container mx-auto px-4 text-center">
        <span className="inline-block animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Discover Your Perfect Shopping Experience
        </span>
        
        <h1 className="animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] text-4xl md:text-6xl font-bold text-accent mb-6">
          Connect with Your
          <br />
          Favorite Malls & Stores
        </h1>
        
        <p className="animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] text-lg text-accent/70 mb-8 max-w-2xl mx-auto">
          Navigate seamlessly through malls, discover exclusive deals, and enjoy a
          personalized shopping experience like never before.
        </p>
        
        <div className="animate-fade-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group">
            Explore Malls
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            View Stores
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
