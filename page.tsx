import Image from "next/image"
import { ArrowRight, Facebook, Instagram, Linkedin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fdf8f4]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f4]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="text-4xl font-playfair font-bold tracking-tight">
              Kardinal
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm hover:text-primary">
                Services
              </a>
              <a href="#" className="text-sm hover:text-primary">
                Solutions
              </a>
              <a href="#" className="text-sm hover:text-primary">
                About
              </a>
              <a href="#" className="text-sm hover:text-primary">
                Contact
              </a>
              <Button variant="secondary" className="rounded-full bg-[#1c1c1c] text-white hover:bg-[#2c2c2c]">
                Get Started
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative pt-20">
        <div className="relative h-[80vh] w-full">
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-white font-bold leading-tight mb-6">
                  Elevating the Art of Valet Service
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  Premium valet solutions for luxury properties, high-end establishments, and distinguished events.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                    Schedule Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white text-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl mb-8 font-serif">Premium Valet Solutions</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Step 1 Card */}
          <article className="relative rounded-3xl overflow-hidden group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_e2wxsge2wxsge2wx-zHSpkiPm4TIX41VOovbtm6LA3bb4v4.jpeg"
              alt="Professional valet service at luxury estate"
              width={400}
              height={500}
              className="w-full aspect-[3/4] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <span className="text-xs text-white mb-2 block">CONSULTATION</span>
              <h2 className="text-2xl text-white font-serif">Expert site evaluation</h2>
            </div>
          </article>

          {/* Step 2 Card */}
          <article className="relative rounded-3xl overflow-hidden group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_wzujq8wzujq8wzuj-uW5O5wPP3uJgWZY8meIjl7uNnankVU.jpeg"
              alt="Professional consultation for valet services"
              width={400}
              height={500}
              className="w-full aspect-[3/4] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <span className="text-xs text-white mb-2 block">PLANNING</span>
              <h2 className="text-2xl text-white font-serif">Tailored valet strategy</h2>
            </div>
          </article>

          {/* Step 3 Card */}
          <article className="relative rounded-3xl overflow-hidden group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_yfiekuyfiekuyfie-gddBYF0MfWXPJAyC7VFzjjggeCSDNT.jpeg"
              alt="Professional valet team in uniform"
              width={400}
              height={500}
              className="w-full aspect-[3/4] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <span className="text-xs text-white mb-2 block">EXECUTION</span>
              <h2 className="text-2xl text-white font-serif">Professional team deployment</h2>
            </div>
          </article>
        </div>

        <Button variant="secondary" className="rounded-full bg-[#1c1c1c] text-white hover:bg-[#2c2c2c]">
          Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </main>

      <footer className="container mx-auto px-4 py-16 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <svg className="w-32 h-32 text-[#005c2e]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20 20h60v60h-60z" />
            </svg>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-2">Partner with us</h2>
              <p className="text-2xl font-serif">Elevate your parking experience.</p>
            </div>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your business email"
                className="rounded-full bg-transparent border-gray-400"
              />
              <Button className="rounded-full bg-[#1c1c1c] hover:bg-[#2c2c2c]">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Hotels
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="text-sm font-medium mb-4">CONNECT</h3>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="p-2 rounded-full bg-[#1c1c1c] text-white hover:bg-[#2c2c2c]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#1c1c1c] text-white hover:bg-[#2c2c2c]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#1c1c1c] text-white hover:bg-[#2c2c2c]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 text-sm">
          <p>© 2024 Elite Valet Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

