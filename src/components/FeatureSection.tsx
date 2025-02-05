
import { Card } from "@/components/ui/card";
import { MapPin, ShoppingBag, Calendar, Gift } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Smart Navigation",
    description: "Find your way effortlessly with AR-powered indoor navigation",
  },
  {
    icon: ShoppingBag,
    title: "Store Discovery",
    description: "Explore stores and get personalized recommendations",
  },
  {
    icon: Calendar,
    title: "Event Updates",
    description: "Stay informed about the latest mall events and promotions",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn points and unlock special offers while you shop",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">
            Elevate Your Shopping Experience
          </h2>
          <p className="text-accent/70 max-w-2xl mx-auto">
            Discover powerful features designed to make your mall visits more enjoyable and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-accent/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
