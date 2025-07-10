'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from '@/lib/api'

export default function AddBookPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [error, setError] = useState('')

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

  const handleAddBook = async () => {
    try {
      await axios.post('/books', { title, author, isbn })
      router.push('/dashboard/books')
    } catch (err) {
      setError('Failed to add book')
      console.error(err)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block animate-float mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-glow">
                <span className="text-white text-3xl font-bold">📚</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Donate a Book
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Share knowledge by adding a new book to our collection
            </p>
          </div>

          {/* Form Container */}
          <div className="glass-container dark:glass-container-dark rounded-3xl p-8 shadow-2xl hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Title Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📖 Book Title
              </label>
              <input
                type="text"
                placeholder="Enter the book title"
                className="input-field dark:input-field-dark w-full p-4 rounded-xl text-base font-medium"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            {/* Author Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ✍️ Author Name
              </label>
              <input
                type="text"
                placeholder="Enter the author's name"
                className="input-field dark:input-field-dark w-full p-4 rounded-xl text-base font-medium"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>

            {/* ISBN Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔢 ISBN Number
              </label>
              <input
                type="text"
                placeholder="Enter the ISBN"
                className="input-field dark:input-field-dark w-full p-4 rounded-xl text-base font-medium"
                value={isbn}
                onChange={e => setIsbn(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-xl animate-shake">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">⚠️</span>
                  <span className="font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleAddBook}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Add Book to Library</span>
            </button>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Help grow our library collection! 🌱
            </p>
          </div>
        </div>
      </div>
    </>
  )
}