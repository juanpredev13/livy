import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Calendar, FileImage, Gift, ChevronRight, Download } from "lucide-react"

export default function NFTCampaignSection() {
  return (
    <div className=" min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Características esenciales que potencian tus
          </h1>
          <div className="flex justify-center space-x-4">
            {[
              { icon: Mail, text: "Campañas" },
              { icon: Calendar, text: "Eventos" },
              { icon: FileImage, text: "NFTs" },
              { icon: Gift, text: "Recompensas" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </header>

        <Card className="p-6 space-y-6">
          <div className="md:flex md:space-x-6">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold">Gestión fluida de campañas NFT</h2>
              <p className="text-gray-600">
                Crea, lanza y gestiona tus campañas NFT con facilidad. Nuestra plataforma
                proporciona soluciones integrales para crear experiencias digitales únicas que
                recompensen la lealtad del cliente.
              </p>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Saber más</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h3 className="font-semibold mb-4">Campañas Activas</h3>
              {[
                "Lanzamiento Colección de Verano",
                "Programa de Recompensas de Fidelidad",
              ].map((campaign, index) => (
                <div key={index} className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <p className="font-medium">{campaign}</p>
                    <p className="text-sm text-gray-500">
                      Involucra a los clientes con NFTs y recompensas exclusivas.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="md:flex md:space-x-6">
          <Card className="p-6 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Gestiona y distribuye recompensas NFT</h2>
            <p className="text-gray-600 mb-4">
              Crea, gestiona y distribuye fácilmente recompensas NFT a tus clientes fieles.
              Realiza un seguimiento del compromiso y analiza el rendimiento de la campaña
              en tiempo real.
            </p>
            <div className="space-y-3">
              {[
                { name: "Colección de Verano", type: "Serie NFT", size: "1,000" },
                { name: "Niveles de Fidelidad", type: "Sistema de Recompensas", size: "5 niveles" },
                { name: "Distribucion.py", type: "Script", size: "2.5 KB" },
                { name: "Compromiso.xls", type: "Informe", size: "1.8 MB" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FileImage className="w-5 h-5 text-gray-400" />
                    <span>{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{item.type}</span>
                    <span className="text-sm text-gray-500">{item.size}</span>
                    <Download className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Experiencias móviles prioritarias</h2>
            <p className="text-gray-600 mb-4">
              Ofrece experiencias NFT fluidas en movimiento. Nuestra plataforma optimizada
              para móviles asegura que tus clientes puedan participar en tus campañas en
              cualquier momento y lugar.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Mobile App Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}