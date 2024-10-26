import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Calendar, Folder, FileText, ChevronRight } from "lucide-react"

export default function FeatureSection() {
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
  const collaborators = [
    { name: "Restaurante 12/0", status: "activo" },
    { name: "Bacano Escalante", status: "activo" },
    { name: "Isolina", status: "en proceso" }
  ]

  return (
    <section className="relative w-full py-12 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#C19EFA]/30 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#FE71EB]/30 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Características esenciales que potencian tus
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
          {[
            { icon: Mail, text: "Campañas" },
            { icon: Calendar, text: "Eventos" },
            { icon: Folder, text: "NFTs" },
            { icon: FileText, text: "Recompensas" }
          ].map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center gap-1">
              <Icon className="w-5 h-5" />
              <span className="text-sm">{text}</span>
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
          <Card className="relative overflow-hidden bg-[#F8FAFC]">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-4">Experiencias móviles prioritarias</h2>
              <p className="mb-4 text-gray-600">
                Ofrece experiencias NFT fluidas en movimiento. Nuestra plataforma optimizada para móviles asegura
                que tus clientes puedan participar en tus campañas en cualquier momento y lugar.
              </p>
              <div className="mt-6 bg-gray-100 rounded-lg p-4">
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
            </CardContent>
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
    </section>
  )
}