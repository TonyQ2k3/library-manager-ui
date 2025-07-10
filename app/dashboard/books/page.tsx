'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/api'
import { Book } from '@/lib/types'

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    axios.get('/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error('Failed to fetch books', err))
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

  return (
    <>      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Book Collection
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Discover and explore our amazing library collection
            </p>
          </div>
          
          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div 
                key={book.id} 
                className="glass-card dark:glass-card-dark rounded-2xl p-6 shadow-lg hover-scale animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Book Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 mx-auto shadow-lg">
                  <span className="text-white text-2xl font-bold">📖</span>
                </div>
                
                {/* Book Info */}
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    by <span className="font-medium">{book.author}</span>
                  </p>
                  
                  {/* Availability Status */}
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium status-badge ${
                    book.available 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                      : 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                  }`}>
                    <span>
                      {book.available ? 'Available' : 'Not Available'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {books.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No Books Found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                The library collection is currently empty or loading...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}