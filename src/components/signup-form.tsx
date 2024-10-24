'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ethers } from 'ethers'
import { FaGoogle } from 'react-icons/fa'
import { auth } from '@/lib/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { saveWalletAddress } from '@/lib/userService';

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleGoogleSignUp = async () => {
        try {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)
            router.push('/dashboard') // Redirect to dashboard after successful sign-up
        } catch (error) {
            setError('Failed to sign up with Google. Please try again.')
            console.error('Google sign-up error:', error)
        }
    }

    const handleEmailSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            router.push('/dashboard') // Redirect to dashboard after successful sign-up
        } catch (error) {
            setError('Failed to sign up. Please try again.')
            console.error('Email sign-up error:', error)
        }
    }

    const handleMetaMaskConnect = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' })
                const provider = new ethers.BrowserProvider(window.ethereum)
                const signer = await provider.getSigner()
                const address = await signer.getAddress()
                setWalletAddress(address)

                // Save the wallet address to Firebase Realtime Database
                await saveWalletAddress(address);
                router.push('/dashboard') //
                console.log('MetaMask wallet connected and saved:', address)
            } catch (error) {
                setError('Failed to connect to MetaMask or save wallet address. Please try again.')
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
                    <CardTitle className="text-2xl font-light text-center text-gray-800">Sign Up for Livy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <Button
                        variant="outline"
                        className="w-full text-gray-600 hover:bg-gray-50 transition-colors"
                        onClick={handleGoogleSignUp}
                    >
                        <FaGoogle className="mr-2" /> Sign Up with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-400">Or</span>
                        </div>
                    </div>

                    <form onSubmit={handleEmailSignUp} className="space-y-4">
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
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="bg-white/50 border-gray-200 focus:ring-1 focus:ring-gray-400 transition-shadow"
                        />
                        <Button type="submit" className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white transition-colors">
                            Sign Up
                        </Button>
                    </form>

                    <Button
                        variant="outline"
                        className="w-full text-gray-600 hover:bg-gray-50 transition-colors"
                        onClick={handleMetaMaskConnect}
                    >
                        {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect MetaMask'}
                    </Button>

                    <p className="text-sm text-center text-gray-600">
                        Already have an account? <a href="/login" className="text-gray-800 hover:underline">Log in</a>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}