import { Calendar, Globe, Building2, Handshake, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { value: "25", label: "Years", icon: Calendar },
  { value: "50", label: "Countries", icon: Globe },
  { value: "5", label: "Offices", icon: Building2 },
  { value: "28", label: "Partners", icon: Handshake },
  { value: "9,450", label: "Clients", icon: Users },
  { value: "1,140", label: "Projects", icon: Target },
];

const MetricsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
          Our Proven Track Record
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Numbers that speak for themselves — delivering excellence since 2006
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            className="text-center p-6 bg-card rounded-2xl border-2 border-border hover:border-primary hover:shadow-card-hover transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-14 h-14 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <m.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-extrabold text-foreground mb-1">
              {m.value}
            </div>
            <div className="text-xs font-semibold text-primary uppercase tracking-wider">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
