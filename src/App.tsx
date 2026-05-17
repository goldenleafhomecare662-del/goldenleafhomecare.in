import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Leaf, 
  Heart, 
  UserRound, 
  Activity, 
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

// --- Types ---
interface NursingRowProps {
  id?: string;
  image: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}

// --- Icons ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Clinical Nursing', id: 'clinical' },
    { name: 'Geriatric Care', id: 'geriatric' },
    { name: 'Companion Care', id: 'companion' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center group-hover:bg-gold-primary transition-colors duration-500">
            <Leaf className="w-5 h-5 text-gold-primary group-hover:text-white transition-colors duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold tracking-widest text-lg text-gold-dark">GOLDEN LEAF</span>
            <span className="font-cinzel text-[8px] tracking-[0.4em] text-gold-primary uppercase font-bold -mt-1">Home Care</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-montserrat text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-gold-primary transition-colors duration-300">About</a>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center space-x-1 font-montserrat text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-gold-primary transition-colors duration-300">
              <span>Services</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl shadow-2xl border border-gold-primary/10 overflow-hidden py-2"
                >
                  {services.map((service) => (
                    <a 
                      key={service.id} 
                      href={`#${service.id}`}
                      className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-neutral-600 hover:bg-bg-cream hover:text-gold-primary transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#contact" className="font-montserrat text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-gold-primary transition-colors duration-300">Contact</a>
          
          <a 
            href="https://wa.me/919003914662"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-2 hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const NursingRow = ({ id, image, title, description, features, reverse }: NursingRowProps) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 mb-24 lg:mb-32`}
  >
    <div className="w-full lg:w-1/2 relative">
      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-light">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
      </div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-primary/10 rounded-full blur-2xl -z-10" />
    </div>
    
    <div className="w-full lg:w-1/2 space-y-6">
      <div className="inline-block px-4 py-1 bg-gold-light text-gold-dark rounded-full text-[10px] font-bold uppercase tracking-wider">
        Specialized Care
      </div>
      <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-gold-dark">{title}</h3>
      <p className="text-neutral-600 leading-relaxed font-montserrat">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-white transition-colors">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-neutral-700 font-montserrat">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const SocialLinks = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    <a 
      href="https://wa.me/919003914662" 
      target="_blank" 
      className="p-3 bg-white border border-gold-primary/20 rounded-full text-gold-dark hover:bg-whatsapp hover:text-white hover:border-whatsapp transition-all duration-300"
    >
      <WhatsAppIcon className="w-5 h-5" />
    </a>
    <a 
      href="https://www.instagram.com/golden_leaf_home_care?igsh=MWQ2ejNpY29vcHdtaw==" 
      target="_blank" 
      className="p-3 bg-white border border-gold-primary/20 rounded-full text-gold-dark hover:bg-gold-primary hover:text-white transition-all duration-300"
    >
      <Instagram className="w-5 h-5" />
    </a>
    <a 
      href="https://www.facebook.com/share/1CcUvgmdQt/" 
      target="_blank" 
      className="p-3 bg-white border border-gold-primary/20 rounded-full text-gold-dark hover:bg-gold-primary hover:text-white transition-all duration-300"
    >
      <Facebook className="w-5 h-5" />
    </a>
    <a 
      href="https://www.linkedin.com/in/golden-leaf-home-care-b49303407?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
      target="_blank" 
      className="p-3 bg-white border border-gold-primary/20 rounded-full text-gold-dark hover:bg-gold-primary hover:text-white transition-all duration-300"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  </div>
);

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-gold-primary/30 selection:text-gold-dark font-montserrat bg-bg-cream">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Nursing Care Overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-bg-cream" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-gold-dark leading-tight tracking-wider mb-6">
              GOLDEN LEAF <br /> HOME CARE
            </h1>
            <p className="font-cinzel text-xl md:text-2xl text-neutral-800 tracking-[0.4em] uppercase mb-10 font-semibold">
              Expertise in Every Home
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#contact" 
                className="bg-gold-primary text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-gold-dark transition-all duration-500 shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="https://wa.me/919003914662" 
                target="_blank"
                className="bg-whatsapp text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-green-600 transition-all duration-500 shadow-xl flex items-center space-x-3"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-dark mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-gold-primary mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-neutral-600 font-montserrat leading-relaxed text-lg italic">
            "At Golden Leaf Home Care, we bridge the gap between hospital-grade clinical precision and the personal comfort of your own home. Our highly structured home nursing solutions bring skilled healthcare professionals directly to your family, ensuring absolute safety, emotional stability, and comprehensive clinical attention."
          </p>
        </div>
      </section>

      {/* Home Nursing Details Section */}
      <section id="nursing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-dark mb-6">Structured Home Nursing</h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-[1px] bg-gold-primary/30" />
              <span className="text-gold-primary">🌿</span>
              <div className="w-12 h-[1px] bg-gold-primary/30" />
            </div>
          </div>

          <div className="nursing-showcase">
            <NursingRow 
              id="clinical"
              image="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
              title="Skilled Clinical Home Nursing"
              description="Our registered medical staff provide structured, hospital-grade care directly to patients recovering from complex medical situations or surgeries. This ensures full lifestyle recovery with minimized hospital re-admission risks."
              features={[
                "Post-surgical wound management & dressing",
                "Vitals tracking, IV therapy & injections",
                "Critical medication setup and daily scheduling"
              ]}
            />
            
            <NursingRow 
              id="geriatric"
              reverse
              image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
              title="Geriatric & Assisted Living Support"
              description="Designed explicitly to assist senior citizens with changing physical needs. We focus heavily on maximizing personal independence while maintaining a safety net for daily living tasks and mobility."
              features={[
                "Physiotherapy assistance & mobility support",
                "Preventing fall injuries & bathroom safety guidance",
                "Cognitive engagement for dementia and Alzheimer care"
              ]}
            />

            <NursingRow 
              id="companion"
              image="https://images.unsplash.com/photo-1576765608622-46748db282e0?auto=format&fit=crop&w=800&q=80"
              title="Compassionate Companionship"
              description="Mental and emotional health are fundamental pillars of overall healing. Our companion nursing profile provides emotional stability, interactive communication, and daily routine handling to eliminate isolation."
              features={[
                "Nutritional meal planning and cooking",
                "Escorting to doctor consultations & exterior walks",
                "24/7 dedicated bedside mental wellness tracking"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="py-24 bg-gold-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Heart className="w-16 h-16 mx-auto mb-10 opacity-30 animate-pulse" />
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-8 italic">
            Expertise meets compassion. Let us take care of what matters most to you.
          </h2>
          <a 
            href="tel:+919003914662"
            className="inline-flex items-center space-x-4 bg-white text-gold-dark px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Call Our Helpline</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-gold-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="font-cinzel text-4xl font-bold text-gold-dark mb-4 italic">Connect With Us</h2>
                <p className="text-neutral-500 font-montserrat">We are available 24/7 to discuss your family's care needs.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-bg-cream rounded-xl flex items-center justify-center text-gold-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-[10px] font-bold uppercase tracking-widest text-gold-primary mb-1">Registered Office</h4>
                    <p className="text-neutral-700 font-montserrat font-medium">89/1 Sagaya Nager Street,<br />Aumbulikonam - 629851</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-bg-cream rounded-xl flex items-center justify-center text-gold-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-[10px] font-bold uppercase tracking-widest text-gold-primary mb-1">Email Enquiries</h4>
                    <a href="mailto:goldenleafhomecare662@gmail.com" className="text-neutral-700 font-montserrat font-medium hover:text-gold-primary transition-colors">
                      goldenleafhomecare662@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-bg-cream rounded-xl flex items-center justify-center text-gold-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-[10px] font-bold uppercase tracking-widest text-gold-primary mb-1">Call Helpline</h4>
                    <a href="tel:+919003914662" className="text-neutral-700 font-montserrat font-bold text-xl hover:text-gold-primary transition-colors">
                      +91 90039 14662
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-cream p-12 rounded-[40px] border border-gold-primary/10 shadow-xl text-center">
              <div className="text-4xl mb-6">🌟</div>
              <h3 className="font-cinzel text-2xl font-bold text-gold-dark mb-4">Follow Our Journey</h3>
              <p className="text-neutral-600 mb-10 font-montserrat">Stay connected for home health tips, community updates, and real care stories.</p>
              <SocialLinks className="justify-center" />
              
              <div className="mt-12 p-6 bg-white rounded-3xl border border-gold-primary/5">
                <p className="text-[10px] font-bold text-gold-primary uppercase tracking-[0.2em] mb-4">Instant Assistance</p>
                <a 
                  href="https://wa.me/919003914662" 
                  target="_blank"
                  className="w-full bg-whatsapp text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-3 hover:bg-green-600 transition-all shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-8 h-[1px] bg-white/20" />
            <Leaf className="w-6 h-6 text-gold-primary" />
            <div className="w-8 h-[1px] bg-white/20" />
          </div>
          <p className="font-cinzel text-lg font-bold tracking-widest mb-2 italic">GOLDEN LEAF HOME CARE</p>
          <p className="text-white/40 text-[10px] tracking-[0.3em] font-bold uppercase mb-8">Expertise in Every Home</p>
          
          <SocialLinks className="justify-center mb-10 opacity-60" />
          
          <div className="w-full h-[1px] bg-white/5 mb-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] font-cinzel tracking-widest uppercase gap-4">
            <p>&copy; {new Date().getFullYear()} Golden Leaf Home Care. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
