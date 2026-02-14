import { Cloud, Server, Shield, Database, Headphones, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Microsoft 365 Management",
    description: "Complete administration, security, and optimization of your Microsoft 365 environment.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    icon: Cloud,
    features: ["License management & optimization", "Security & compliance configuration", "User provisioning & support", "Performance monitoring"],
  },
  {
    title: "Azure Cloud Solutions",
    description: "Seamless cloud migration, infrastructure management, and Azure expertise.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    icon: Server,
    features: ["Infrastructure as a Service", "Platform as a Service", "Hybrid cloud solutions", "Cost optimization"],
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Enterprise-grade security, threat protection, and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
    features: ["Threat detection & response", "Data loss prevention", "Identity & access management", "Compliance auditing"],
  },
  {
    title: "Migration Services",
    description: "Risk-free data migration to cloud with zero downtime.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    icon: Database,
    features: ["Email migration", "SharePoint migration", "Data center migration", "Hybrid deployment"],
  },
  {
    title: "IT Support & Helpdesk",
    description: "24/7 monitoring, helpdesk, and proactive IT management.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    icon: Headphones,
    features: ["24/7 helpdesk support", "Proactive monitoring", "Incident management", "SLA-backed response times"],
  },
  {
    title: "Training & Adoption",
    description: "Comprehensive training and change management for technology adoption.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    icon: GraduationCap,
    features: ["End-user training programs", "Admin certification prep", "Change management", "Adoption analytics"],
  },
];

const ServicesPage = () => (
  <div>
    {/* Hero */}
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
          Our Services
        </h1>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          End-to-end Microsoft cloud solutions designed to accelerate your digital transformation
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 lg:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground font-semibold rounded-lg hover:shadow-brand hover:scale-105 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
