import { Award, Clock, Target, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  {
    icon: Award,
    title: "Microsoft Gold Partner",
    description: "One of the select few Microsoft Gold Partners with 25+ years of proven expertise and certifications.",
  },
  {
    icon: Clock,
    title: "24/7 Expert Support",
    description: "Round-the-clock monitoring and support from our team of certified Microsoft professionals.",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Custom IT strategies designed specifically for your business needs and growth objectives.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance management to protect your critical data.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Average 40% cost reduction and 3x productivity increase within the first year.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Your own account manager and technical team who understand your business inside-out.",
  },
];

const DifferentiatorsSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
          How Are We Different
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We don't just provide IT services — we become your strategic technology partner
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentiators.map((item, i) => (
          <motion.div
            key={i}
            className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentiatorsSection;
