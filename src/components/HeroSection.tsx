import { Award, CheckCircle, Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        alt="Professional team collaborating in modern office"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 gradient-hero" />
    </div>

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-3 bg-primary-foreground/15 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-primary-foreground/25">
          <Award className="w-4 h-4 text-primary-foreground" />
          <span className="text-primary-foreground font-semibold text-sm tracking-wide">
            Microsoft Gold Partner Since 2006
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
          Enterprise Cloud
          <br />
          <span className="text-primary-foreground/90">Solutions That Scale</span>
        </h1>

        <p className="text-lg lg:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl">
          Trusted by 9,450+ companies across 50 countries to transform IT
          infrastructure with Microsoft 365, Azure, and cloud excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="/contact"
            className="px-8 py-4 bg-primary-foreground text-primary font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl text-center"
          >
            Start Free Consultation
          </a>
          <button className="px-8 py-4 border-2 border-primary-foreground/60 text-primary-foreground font-bold rounded-xl hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        <div className="flex flex-wrap gap-6 text-primary-foreground/80">
          {["No credit card required", "14-day free trial", "Cancel anytime"].map(
            (text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
