import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="container mx-auto px-4 py-6">
        <Navigation />
      </header>
      <main className="flex-grow flex items-center justify-center relative mx-8 overflow-hidden ">
        <div className="absolute w-full m-2 h-[80vh] flex items-center justify-center rounded-lg overflow-hidden bg-slate-50">
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#C19EFA]/30 to-transparent blur-3xl"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FE71EB]/30 to-transparent blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">  
            <Image
              src="/livy-logo.svg"
              alt="Livy Logo"
              width={100}
              height={50}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Crea. Colabora. Conecta
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            más que marketing, crea conexiones, crea un Livy
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg py-3 px-8 rounded-full transition duration-300">
            Crear Livy
          </Button>
        </div>
      </main>
    </div>
  )
}