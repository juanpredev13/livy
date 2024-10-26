"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function EarlyAccessBanner() {
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Save email to Firebase
      await addDoc(collection(db, 'early'), {
        email: email,
        timestamp: new Date()
      })

      setNotification('Gracias por tu interés. Te contactaremos pronto.')
      setEmail('')
    } catch (error) {
      console.error("Error saving email: ", error)
      setNotification('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.')
    }

    setIsLoading(false)
    setTimeout(() => setNotification(''), 5000) // Clear notification after 5 seconds
  }

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#C19EFA]/30 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#FE71EB]/30 to-transparent blur-3xl"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sé parte de la revolución NFT
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Obtén acceso anticipado a nuestra plataforma y descubre cómo los NFTs pueden transformar tu estrategia de fidelización.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow max-w-md bg-white bg-opacity-20 backdrop-blur-md border-gray-300 text-gray-800 placeholder-gray-500"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-[#8103D5] text-white hover:bg-purple-700 transition-colors duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Solicitar Acceso Anticipado'}
              </Button>
            </form>
            {notification && (
              <div className={`mt-4 p-2 rounded-md ${
                notification.includes('error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              }`}>
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}