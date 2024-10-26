import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-100 to-blue-100 border-t border-purple-200">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/livy-logo-1.png"
              alt="Livy Logo"
              width={100}
              height={50}
              className="mx-auto md:mx-0"
            />
            <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
              Revolucionando la fidelización de clientes con NFTs y experiencias digitales únicas.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <Linkedin size={24} />
              </a>
            </div>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Suscríbete a nuestro newsletter"
                className="flex-grow"
              />
              <Button type="submit" variant="secondary">
                Suscribir
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-purple-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 Livy, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}