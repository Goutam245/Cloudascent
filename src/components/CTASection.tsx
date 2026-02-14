import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Modern office"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 py-20 px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join 9,450+ companies that trust IT Partner for their cloud infrastructure.
            Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-primary-foreground/60 text-primary-foreground font-bold rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
