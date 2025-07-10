'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { register } from '@/lib/auth'

export default function RegisterPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async () => {
    const success = await register(username, password)
    if (success) {
      router.push('/auth/login')
    } else {
      setError('Registration failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded-xl"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-xl"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
        <button
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  )
}