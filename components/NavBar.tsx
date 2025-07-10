'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    // Dark mode detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (event.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/auth/login')
  }

  const handleClickDonate = () => {
    router.push('/dashboard/donate')
  }

  return (
    <>
      <nav className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        
        {/* Glass morphism overlay */}
        <div className="relative glass-effect dark:glass-effect-dark">
          <div className="px-6 py-4 flex justify-between items-center">
            {/* Enhanced logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center animate-bounce-subtle">
                  <span className="text-white text-xl font-bold">📚</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white text-shadow">
                Libba<span className="text-yellow-300"> Books</span>
              </h1>
              <button className=" bg-white/20 hover-lift rounded-xl p-2" onClick={handleClickDonate}>
                <span className="text-white text-lg font-semibold">Donate a book</span>
              </button>
            </div>

            {/* Enhanced logout button */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-medium hover-lift"
              >
                <span className="flex items-center space-x-2">
                  <span>Logout</span>
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}