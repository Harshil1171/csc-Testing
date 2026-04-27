"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-[#0c2340] py-12 text-white sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-white/90"
          >
            Community Science Center - Lok Vigyan Kendra Palanpur
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <AnimatedSection>
          <h2 className="text-xl font-bold text-[#0c2340] sm:text-2xl">
            Our History & Role
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            The Community Science Center (CSC) Lok Vigyan Kendra at Palanpur is
            a science outreach centre committed to spreading scientific
            awareness and energy conservation in the region. Established under
            the <strong>Banas Gram Vikas Samiti</strong>, the centre has been
            instrumental in bringing science to the doorstep of the community
            through interactive exhibits, workshops, and public campaigns.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Our work aligns with the vision of making science accessible and
            relevant to everyday life, with a special focus on sustainable
            energy use and environmental responsibility.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-xl font-bold text-[#0c2340] sm:text-2xl">
            Energy Conservation Missions
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Energy conservation has been at the core of our missions. We
            conduct awareness programmes, school visits, and community drives to
            promote efficient use of electricity and renewable energy. Our
            initiatives include demonstrations on solar energy, energy-saving
            practices at home and in institutions, and partnerships with local
            bodies to advocate for sustainable policies.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-xl font-bold text-[#0c2340] sm:text-2xl">
            Urja Rakshaks Initiatives
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            The <strong>Urja Rakshaks</strong> initiative is one of our flagship
            programmes. It trains and empowers volunteers—Urja Rakshaks—to
            become ambassadors of energy conservation in their neighbourhoods.
            These volunteers help spread awareness about saving energy, using
            efficient appliances, and adopting renewable energy solutions. The
            programme has helped build a network of informed citizens who
            actively promote sustainable practices in Palanpur and surrounding
            areas.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-xl font-bold text-[#0c2340] sm:text-2xl">
            Under Banas Gram Vikas Samiti
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            CSC Lok Vigyan Kendra operates under the umbrella of the{" "}
            <strong>Banas Gram Vikas Samiti</strong>, an organisation dedicated
            to rural and community development. This association enables us to
            reach villages and gram panchayats, integrate science communication
            with development goals, and work alongside other Samiti programmes
            for a holistic impact. Together, we strive to create a
            scientifically literate and energy-conscious society in the region.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
