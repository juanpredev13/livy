import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, Folder, FileText, ChevronRight, Download, FileCode, FileSpreadsheet } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="bg-white text-black p-6">
      <h2 className="text-5xl font-bold mb-4 text-center">
        Características esenciales que potencian tus sd
      </h2>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <Mail className="w-6 h-6" />
        <span>Campañas,</span>
        <Calendar className="w-6 h-6" />
        <span>Eventos,</span>
        <Folder className="w-6 h-6" />
        <span>NFTs,</span>
        <FileText className="w-6 h-6" />
        <span>Recompensas</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 text-black col-span-2 shadow-md overflow-hidden">
          <CardContent className="p-6 flex flex-col lg:flex-row relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-blue-100/50 to-purple-100/50 opacity-50"></div>
            <div className="lg:w-1/2 mb-6 lg:mb-0 relative z-10">
              <h3 className="text-2xl font-bold mb-4">Gestión fluida de campañas NFT</h3>
              <p className="mb-4">
                Crea, lanza y gestiona tus campañas NFT con facilidad. Nuestra plataforma proporciona soluciones integrales para crear experiencias digitales únicas que recompensen la lealtad del cliente.
              </p>
              <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">
                Saber más
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="lg:w-1/2 lg:ml-6 relative z-10">
              <Card className="bg-white text-black shadow-sm">
                <CardHeader>
                  <CardTitle className="text-sm font-normal">Campañas Activas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Lanzamiento Colección de Verano', 'Programa de Recompensas de Fidelidad'].map((name, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-300 via-blue-300 to-purple-300" />
                        <div>
                          <p className="font-semibold">{name}</p>
                          <p className="text-sm text-gray-600">Involucra a los clientes con NFTs y recompensas exclusivas.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 text-black shadow-md overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-indigo-100/50 to-blue-100/50 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Gestiona y distribuye recompensas NFT</h3>
              <p className="mb-4">
                Crea, gestiona y distribuye fácilmente recompensas NFT a tus clientes fieles. Realiza un seguimiento del compromiso y analiza el rendimiento de la campaña en tiempo real.
              </p>
              <div className="space-y-2">
                {[
                  { name: 'Colección de Verano', type: 'Serie NFT', count: '1,000', icon: <Folder className="text-black" /> },
                  { name: 'Niveles de Fidelidad', type: 'Sistema de Recompensas', count: '5 niveles', icon: <FileText className="text-black" /> },
                  { name: 'Distribucion.py', type: 'Script', size: '2.5 KB', icon: <FileCode className="text-black" /> },
                  { name: 'Compromiso.xls', type: 'Informe', size: '1.8 MB', icon: <FileSpreadsheet className="text-black" /> },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white bg-opacity-60 rounded-lg">
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">{item.type}</span>
                      <span className="text-sm">{item.count || item.size}</span>
                      <Download className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-black shadow-md overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/50 to-purple-100/50 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Experiencias móviles prioritarias</h3>
              <p className="mb-4">
                Ofrece experiencias NFT fluidas en movimiento. Nuestra plataforma optimizada para móviles asegura que tus clientes puedan participar en tus campañas en cualquier momento y lugar.
              </p>
              <div className="relative w-full max-w-[280px] mx-auto">
                <Image
                  src="/livy-iphone-mockup.png"
                  alt="Interfaz de aplicación móvil"
                  width={280}
                  height={500}
                  className="rounded-[2rem] shadow-xl"
                />
                <div className="absolute inset-0 border-[14px] border-black rounded-[2rem] shadow-2xl pointer-events-none"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}