"use client"

import { useState, useEffect } from 'react'
import { Mail, Calendar, Folder, FileCheck } from 'lucide-react'

export default function GlassmorphismHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Mail, label: 'Campañas' },
    { icon: Calendar, label: 'Eventos' },
    { icon: Folder, label: 'NFTs' },
    { icon: FileCheck, label: 'Recompensas' },
  ]

  return (
    <header className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl p-8 transition-all duration-1000 ease-out">
          <h1 
            className={`text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
            }`}
          >
            Características esenciales que potencian tus
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.label}
                className={`flex flex-col items-center transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 backdrop-blur-md shadow-lg flex items-center justify-center mb-3 transform transition-all duration-300 hover:scale-110 hover:bg-opacity-30">
                  <feature.icon className="w-10 h-10 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}