import { Award, Users, Globe, Target, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt="Team working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
          About IT Partner
        </h1>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          A Gold Microsoft Partner since 2006, delivering enterprise cloud solutions across 50 countries
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Story</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              25 Years of Microsoft Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2000, IT Partner has grown from a small consultancy to one of the world's
              leading Microsoft Gold Partners. We've helped over 9,450 organizations across 50
              countries modernize their IT infrastructure and unlock the full potential of Microsoft
              cloud technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our team of 200+ certified professionals brings deep expertise in Microsoft 365,
              Azure, and enterprise security to every engagement.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: "9,450+ Clients" },
                { icon: Globe, label: "50 Countries" },
                { icon: Target, label: "1,140 Projects" },
                { icon: Award, label: "Gold Partner" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">The principles that drive everything we do</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Client First", description: "Every decision we make starts with how it benefits our clients. Your success is our success." },
            { title: "Innovation", description: "We stay ahead of technology trends so you don't have to. Continuous learning is in our DNA." },
            { title: "Integrity", description: "Transparent communication, honest advice, and doing what's right — even when it's not easy." },
          ].map((v, i) => (
            <motion.div
              key={i}
              className="bg-card p-8 rounded-2xl shadow-card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
