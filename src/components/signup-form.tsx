// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ethers } from 'ethers'
// import { FaGoogle } from 'react-icons/fa'
// import { auth } from '@/lib/firebase'
// import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import { useRouter } from 'next/navigation'
// import { saveWalletAddress } from '@/lib/userService';

// export default function SignUpForm() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [walletAddress, setWalletAddress] = useState('')
//     const [error, setError] = useState('')
//     const router = useRouter()

//     const handleGoogleSignUp = async () => {
//         try {
//             const provider = new GoogleAuthProvider()
//             await signInWithPopup(auth, provider)
//             router.push('/login') // Redirige al inicio de sesión después de un registro exitoso
//         } catch (error) {
//             setError('Error al registrarse con Google. Inténtalo de nuevo.')
//             console.error('Error al registrarse con Google:', error)
//         }
//     }

//     const handleEmailSignUp = async (e: React.FormEvent) => {
//         e.preventDefault()
//         if (password !== confirmPassword) {
//             setError('Las contraseñas no coinciden')
//             return
//         }
//         try {
//             await createUserWithEmailAndPassword(auth, email, password)
//             router.push('/login') // Redirige al inicio de sesión después de un registro exitoso
//         } catch (error) {
//             setError('Error al registrarse. Inténtalo de nuevo.')
//             console.error('Error al registrarse con correo electrónico:', error)
//         }
//     }

//     const handleMetaMaskConnect = async () => {
//         if (typeof window.ethereum !== 'undefined') {
//             try {
//                 await window.ethereum.request({ method: 'eth_requestAccounts' })
//                 const provider = new ethers.BrowserProvider(window.ethereum)
//                 const signer = await provider.getSigner()
//                 const address = await signer.getAddress()
//                 setWalletAddress(address)

//                 // Guarda la dirección de la cartera en Firebase Realtime Database
//                 await saveWalletAddress(address);
//                 router.push('/login') // 
//                 console.log('Cartera MetaMask conectada y guardada:', address)
//             } catch (error) {
//                 setError('Error al conectar con MetaMask o guardar la dirección de la cartera. Inténtalo de nuevo.')
//                 console.error('Error de conexión con MetaMask:', error)
//             }
//         } else {
//             setError('MetaMask no detectado. Instala MetaMask e inténtalo de nuevo.')
//         }
//     }
//     return (
//         <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-100 via-pink-100 to-red-100'>
//             <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-md">
//                 <CardHeader>
//                     <CardTitle className="text-2xl font-light text-center text-gray-800">Regístrate para Livy</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                     {error && <p className="text-red-500 text-center">{error}</p>}
//                     <Button
//                         variant="outline"
//                         className="w-full text-gray-600 hover:bg-gray-50 transition-colors"
//                         onClick={handleGoogleSignUp}
//                     >
//                         <FaGoogle className="mr-2" /> Regístrate con Google
//                     </Button>

//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <span className="w-full border-t border-gray-200" />
//                         </div>
//                         <div className="relative flex justify-center text-xs uppercase">
//                             <span className="bg-white px-2 text-gray-400">O</span>
//                         </div>
//                     </div>

//                     <form onSubmit={handleEmailSignUp} className="space-y-4">
//                         <Input
//                             type="email"
//                             placeholder="Correo electrónico"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="bg-white/50 border-gray-200 focus:ring-1 focus:ring-gray-400 transition-shadow"
//                         />
//                         <Input
//                             type="password"
//                             placeholder="Contraseña"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="bg-white/50 border-gray-200 focus:ring-1 focus:ring-gray-400 transition-shadow"
//                         />
//                         <Input
//                             type="password"
//                             placeholder="Confirmar contraseña"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                             className="bg-white/50 border-gray-200 focus:ring-1 focus:ring-gray-400 transition-shadow"
//                         />
//                         <Button type="submit" className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white transition-colors">
//                             Regístrate
//                         </Button>
//                     </form>

//                     <Button
//                         variant="outline"
//                         className="w-full text-gray-600 hover:bg-gray-50 transition-colors"
//                         onClick={handleMetaMaskConnect}
//                     >
//                         {walletAddress ? `Conectado: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Conectar MetaMask'}
//                     </Button>

//                     <p className="text-sm text-center text-gray-600">
//                         ¿Ya tienes una cuenta? <a href="/login" className="text-gray-800 hover:underline">Iniciar sesión</a>
//                     </p>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }
