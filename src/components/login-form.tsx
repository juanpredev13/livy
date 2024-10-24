'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ethers } from 'ethers'
import { FaGoogle } from 'react-icons/fa'
import { auth } from '@/lib/firebase'
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push('/dashboard') // Redirect to dashboard after successful login
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.')
      console.error('Google sign-in error:', error)
    }
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/dashboard') // Redirect to dashboard after successful login
    } catch (error) {
      setError('Failed to sign in. Please check your email and password.')
      console.error('Email sign-in error:', error)
    }
  }

  const handleMetaMaskLogin = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const address = await signer.getAddress()
        setWalletAddress(address)
        router.push('/dashboard') //
        // Here you would typically verify the wallet address with your backend
        // and create or update a user account associated with this address
        console.log('MetaMask wallet connected:', address)
      } catch (error) {
        setError('Failed to connect to MetaMask. Please try again.')
        console.error('MetaMask connection error:', error)
      }
    } else {
      setError('MetaMask not detected. Please install MetaMask and try again.')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-100 via-pink-100 to-red-100'>
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-center text-gray-800">Login to Livy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button
            variant="outline"
            className="w-full text-gray-600 hover:bg-gray-50 transition-colors"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400">Or</span>
            </div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/50 border-gray-200 focus:ring-1 focus:ring-gray-400 transition-shadow"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/50 border-gray-200 focus:ring-1 focus:ring-gray-400 transition-shadow"
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white transition-colors">
              Login
            </Button>
          </form>

          <Button
            variant="outline"
            className="w-full text-gray-600 hover:bg-gray-50 transition-colors"
            onClick={handleMetaMaskLogin}
          >
            {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect MetaMask'}
          </Button>

          <p className="text-sm text-center text-gray-600">
            Don&apos;t have an account? <a href="/signup" className="text-gray-800 hover:underline">Sign up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}