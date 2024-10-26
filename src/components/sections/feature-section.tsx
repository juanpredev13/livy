"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import GassTitle from "@/components/glass-header"

export default function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const activeNFTCampaigns = [
    {
      title: "Campaña de Referidos",
      description: "Involucra a los clientes con NFTs y recompensas exclusivas.",
      icon: "/sello-1.png"
    },
    {
      title: "Desafío Comunitario NFT",
      description: "Involucra a los clientes con NFTs y recompensas exclusivas.",
      icon: "/sello-2.png"
    },
    {
      title: "Lanzamiento Colección de Verano",
      description: "Involucra a los clientes con NFTs y recompensas exclusivas.",
      icon: "/sello-3.png"
    }
  ]

  const features = ['Campañas', 'Eventos', 'NFTs', 'Recompensas']

  const collaborators = [
    { name: "Restaurante 12/0", status: "activo" },
    { name: "Bacano Escalante", status: "activo" },
    { name: "Isolina", status: "en proceso" }
  ]

  return (
    <section className="relative min-h-screen h-[100vh w-full py-12 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#C19EFA]/30 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#FE71EB]/30 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2
            className={`text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
            }`}
          >
            Características esenciales que potencian tus
          </h2>
          <div 
            ref={featuresRef}
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16"
          >
            {features.map((feature, index) => (
              <div
                key={feature}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="text-lg font-medium text-gray-800 bg-white bg-opacity-20 backdrop-blur-md shadow-lg px-6 py-3 rounded-full transition-all duration-300 hover:bg-opacity-30 hover:scale-105">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg">
            <Card className="col-span-full bg-[#F8FAFC]">
              <CardContent className="p-8 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Gestión fluida de campañas NFT</h2>
                  <p className="mb-6 text-gray-600">
                    Crea, lanza y gestiona tus campañas NFT con facilidad. Nuestra plataforma proporciona
                    soluciones integrales para crear experiencias digitales únicas que recompensen la lealtad del
                    cliente.
                  </p>
                  <Button variant="secondary" className="bg-[#8103D5] text-white hover:bg-gray-800">
                    Acceso Aticipado <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <Card className="lg:w-1/2">
                  <CardHeader>
                    <CardTitle>Campañas Activas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activeNFTCampaigns.map((campaign, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                            <Image
                              src={campaign.icon}
                              alt={`Icono de ${campaign.title}`}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{campaign.title}</h3>
                            <p className="text-sm text-gray-600">{campaign.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden bg-[#F8FAFC] flex flex-col">
              <CardContent className="flex-grow">
                <h2 className="text-xl font-bold mb-4">Experiencias móviles prioritarias</h2>
                <p className="mb-4 text-gray-600">
                  Ofrece experiencias NFT fluidas en movimiento. Nuestra plataforma optimizada para móviles asegura
                  que tus clientes puedan participar en tus campañas en cualquier momento y lugar.
                </p>
              </CardContent>
              <div className="mt-8 mr-8 ml-8 bg-gray-100 p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold mb-2">Estado de los colaboradores</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2 pr-4">Nombre de la marca</th>
                        <th className="pb-2">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {collaborators.map((collaborator, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="py-2 pr-4">{collaborator.name}</td>
                          <td className="py-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              collaborator.status === 'activo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              <span className={`w-2 h-2 mr-1 rounded-full ${
                                collaborator.status === 'activo' ? 'bg-green-400' : 'bg-yellow-400'
                              }`}></span>
                              {collaborator.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
            <Card className="relative overflow-hidden bg-[#F8FAFC]">
              <CardContent className="p-8 pb-64">
                <h2 className="text-xl font-bold mb-4">Analiza mapas de consumo y perfiles únicos</h2>
                <p className="mb-4 text-gray-600">
                  Obtén insights valiosos sobre el comportamiento de tus clientes. Visualiza patrones de consumo y
                  crea perfiles detallados para personalizar tus estrategias de fidelización.
                </p>
                <div className="absolute bottom-0 right-0 w-[475px] ">
                  <Image
                    src="/map.png"
                    alt="Mapa de consumo"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}