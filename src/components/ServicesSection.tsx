import { Link } from "react-router-dom";
import { Cloud, Server, Shield, Database, Headphones, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Microsoft 365 Management",
    description: "Complete administration, security, and optimization of your Microsoft 365 environment with 24/7 monitoring.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    icon: Cloud,
  },
  {
    title: "Azure Cloud Solutions",
    description: "Seamless cloud migration, infrastructure management, and Azure expertise for scalable growth.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    icon: Server,
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Enterprise-grade security, threat protection, and regulatory compliance management.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
  },
  {
    title: "Migration Services",
    description: "Risk-free data migration to cloud with zero downtime and complete data integrity.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    icon: Database,
  },
  {
    title: "IT Support & Helpdesk",
    description: "24/7 monitoring, helpdesk, and proactive IT infrastructure management services.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    icon: Headphones,
  },
  {
    title: "Training & Adoption",
    description: "Comprehensive user training and change management for successful technology adoption.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    icon: GraduationCap,
  },
];

const ServicesSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
          IT Services — What We Do
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive enterprise solutions powered by Microsoft technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to="/services"
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 block"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-xl">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
