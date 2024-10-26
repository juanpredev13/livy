'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ChartDataPoint {
  name: string
  value: number
}

const data: ChartDataPoint[] = [
  { name: 'Ene', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Abr', value: 400 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
]

interface EmployeeData {
  name: string
  value: number
}

const employeeData: EmployeeData[] = [
  { name: 'Empleados', value: 80 },
  { name: 'Contratistas Independientes', value: 60 },
  { name: 'Empleados Contratados', value: 40 },
  { name: 'Accionistas', value: 20 },
]

export default function Dashboard() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading spinner
  }

  return (
    <section className="max-w-screen-xl mx-auto bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-lg shadow-lg space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-bold text-purple-600 mb-2">¡Impulsa tu éxito con NFTs!</h2>
        <p className="text-xl text-gray-600">Descubre cómo nuestras campañas están revolucionando la fidelización de clientes</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          title="Total de NFTs Creados"
          value="35,024"
          increase="+10.23%"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-purple-600"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          }
        />
        <StatCard
          title="Ingresos Totales"
          value="$40,069"
          increase="+28.35%"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-purple-600"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />
        <StatCard
          title="Campañas Activas"
          value="20"
          increase="+28.35%"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-purple-600"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          }
          
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="col-span-1 bg-white">
          <CardHeader>
            <CardTitle className="text-purple-600">Resumen Financiero</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-600">Balance Total</div>
                <div className="text-2xl font-bold text-purple-600">$350.0</div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Transferir</Button>
              <div>
                <div className="text-sm font-medium text-gray-600">Ingresos Totales</div>
                <div className="text-2xl font-bold text-purple-600">$320.0</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">Gastos Totales</div>
                <div className="text-2xl font-bold text-purple-600">$220.0</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2 bg-white">
          <CardHeader>
            <CardTitle className="text-purple-600">Rendimiento de Campañas</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 bg-white">
          <CardHeader>
            <CardTitle className="text-purple-600">Distribución de Participantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {employeeData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-600">{item.name}</span>
                    <span className="text-sm text-purple-600">{item.value}%</span>
                  </div>
                  <div className="w-full bg-purple-100 h-2 rounded-full">
                    <div
                      className="bg-purple-600 h-full rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface StatCardProps {
  title: string
  value: string
  increase: string
  icon: ReactNode
  chartData: ChartDataPoint[]
}

function StatCard({ title, value, increase, icon, chartData }: StatCardProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-purple-600">{value}</div>
        <p className="text-xs text-purple-600">{increase}</p>
        <div className="h-4 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <Bar dataKey="value" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}