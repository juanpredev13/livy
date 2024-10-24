import { Metadata } from 'next'
import LoginForm from '@/components/login-form'

export const metadata: Metadata = {
  title: 'Login | Livy',
  description: 'Login to your Livy account',
}

export default function LoginPage() {
  return (
    <main className="">
      <LoginForm />
    </main>
  )
}