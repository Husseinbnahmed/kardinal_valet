"use client"

import * as React from "react"
import Image from "next/image"
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Users,
  Car,
  Building2,
  Home,
  Building,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, useScroll, useTransform } from "framer-motion"
import { ConsultationForm } from "@/components/consultation-form"

export default function Page() {
  const [showConsultationForm, setShowConsultationForm] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen bg-cream">
      <ConsultationForm open={showConsultationForm} onOpenChange={setShowConsultationForm} />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="/"
              className="text-4xl font-playfair font-bold tracking-tight text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kardinal
            </motion.a>
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Services", href: "#services" },
                { label: "Industries", href: "#industries" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" className="rounded-full" onClick={() => setShowConsultationForm(true)}>
                  Get Started
                </Button>
              </motion.div>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.header>

      <section className="relative pt-20">
        <motion.div className="relative h-[80vh] w-full" style={{ opacity, scale }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_um8flhum8flhum8f-9xkwTj8N1ZXteCoQ3It2vmuJVs6FIH.jpeg"
            alt="Luxury valet service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
            <div className="container mx-auto px-4 h-full">
              <div className="flex flex-col justify-center h-full max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white font-bold leading-tight mb-6"
                >
                  Elevating the Art of Valet Service
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base md:text-xl text-white/90 mb-8"
                >
                  Premium valet solutions for luxury properties, high-end establishments, and distinguished events.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8"
                >
                  {["24/7 Executive Management Support", "Direct access to ownership"].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2 text-sm md:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    >
                      <div className="h-px w-6 bg-white/60"></div>
                      <p className="text-white/90">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="default"
                      className="rounded-full bg-white text-black hover:bg-white/90"
                      onClick={() => setShowConsultationForm(true)}
                    >
                      Schedule Consultation
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <main id="services" className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair mb-8 text-primary text-center md:text-left"
        >
          Premium Valet Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Expert site evaluation", category: "CONSULTATION" },
            { title: "Tailored valet strategy", category: "PLANNING" },
            { title: "Professional team deployment", category: "EXECUTION" },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <Image
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_${["e2wxsge2wxsge2wx", "wzujq8wzujq8wzuj", "yfiekuyfiekuyfie"][index]}-${["zHSpkiPm4TIX41VOovbtm6LA3bb4v4", "uW5O5wPP3uJgWZY8meIjl7uNnankVU", "gddBYF0MfWXPJAyC7VFzjjggeCSDNT"][index]}.jpeg`}
                alt={item.title}
                width={400}
                height={500}
                className="w-full aspect-[3/4] object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xs text-white mb-2 block"
                >
                  {item.category}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl text-white font-playfair"
                >
                  {item.title}
                </motion.h2>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="secondary" className="rounded-full">
            Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </main>

      <section id="industries" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair mb-16 text-center text-[#005c2e]"
          >
            Industries We Serve
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: Car,
                title: "Automotive Dealerships",
                description: "Elevating the customer experience at premium car dealerships.",
              },
              {
                icon: Building2,
                title: "Hospitals",
                description: "Ensuring smooth operations for healthcare facilities.",
              },
              {
                icon: Home,
                title: "Multifamily Buildings",
                description: "Enhancing resident satisfaction in luxury apartment complexes.",
              },
              {
                icon: Building,
                title: "Commercial Buildings",
                description: "Streamlining parking for busy office complexes and shopping centers.",
              },
              {
                icon: GraduationCap,
                title: "Universities",
                description: "Managing campus parking with efficiency and care.",
              },
              {
                icon: Users,
                title: "Corporate Events",
                description: "Providing seamless valet services for high-profile corporate gatherings.",
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <industry.icon className="h-6 w-6 text-[#005c2e] shrink-0" />
                  <h3 className="text-xl font-playfair font-medium">{industry.title}</h3>
                </div>
                <p className="text-muted-foreground ml-10">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-playfair mb-4 text-primary">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              Providing premium valet services to the most distinguished names in luxury real estate and hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 items-center justify-items-center bg-cream">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwKeP6TmQd1KbLP0sNoYbS6Ozd8iip.png",
                alt: "Bozzuto",
                width: 200,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hs0PCIB7CFK7hgzHvcFsbXZvypnv8B.png",
                alt: "Veris Residential",
                width: 220,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xTzaNnI9kufHkgM6qHEdLufqk1LVIf.png",
                alt: "Greystar",
                width: 220,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bJVsZGt1oyA83XaThp6fwwCo60022C.png",
                alt: "NestSeekers International",
                width: 200,
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-77tRqakLDdZ61DqPdMDRanDlAJ94hj.png",
                alt: "Rose Associates",
                width: 220,
              },
            ].map((logo, index) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full flex items-center justify-center p-4 bg-cream"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={80}
                  className="max-w-[180px] lg:max-w-[220px] h-auto opacity-80 hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="container mx-auto px-4 py-16 mt-20 bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <motion.a
              href="/"
              className="text-3xl md:text-4xl font-playfair font-bold tracking-tight text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kardinal
            </motion.a>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-playfair mb-2 text-primary">Partner with us</h2>
              <p className="text-xl md:text-2xl font-playfair text-primary">Elevate your parking experience.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your business email"
                className="rounded-full bg-transparent border-gray-400"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="rounded-full">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-primary">COMPANY</h3>
            <ul className="space-y-2">
              {["About us", "Careers", "Press", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="hover:underline text-muted-foreground">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-primary">SOLUTIONS</h3>
            <ul className="space-y-2">
              {["Automotive Dealerships", "Hospitals", "Multifamily Buildings", "Commercial Buildings"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="hover:underline text-muted-foreground">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:text-right"
          >
            <h3 className="text-sm font-medium text-primary">CONNECT</h3>
            <div className="flex gap-4 md:justify-end">
              {[Facebook, Instagram, Linkedin].map((Icon, iconIndex) => (
                <motion.a
                  key={iconIndex}
                  href="#"
                  className="p-2 rounded-full bg-secondary text-white hover:bg-secondary/90"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 text-sm"
        >
          <p className="text-muted-foreground">© 2024 Kardinal Valet Services. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <motion.a key={item} href="#" className="hover:underline text-muted-foreground" whileHover={{ y: -2 }}>
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </footer>
    </div>
  )
}

