'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from '@/lib/api'
import { Book } from '@/lib/types'

export default function BookDetailPage() {
  const { id } = useParams()
  const [book, setBook] = useState<Book | null>(null)

  useEffect(() => {
    if (id) {
      axios.get(`/books/${id}`).then(res => setBook(res.data))
    }
  }, [id])

  if (!book) return <p className="text-center">Loading...</p>

  return (
    <div className="bg-white p-6 rounded-2xl shadow max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-4 text-sm">ISBN: {book.isbn}</p>
      <p className={`mt-2 text-sm ${book.available ? 'text-green-600' : 'text-red-600'}`}>Status: {book.available ? 'Available' : 'Not Available'}</p>
    </div>
  )
}