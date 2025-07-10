'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/api'
import { BorrowingRecord } from '@/lib/types'

export default function BorrowingHistory() {
  const [records, setRecords] = useState<BorrowingRecord[]>([])

  useEffect(() => {
    axios.get('/borrowings').then(res => setRecords(res.data))
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow rounded-2xl">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Book</th>
            <th className="p-3">Borrowed At</th>
            <th className="p-3">Returned At</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id} className="border-t">
              <td className="p-3">{record.book.title}</td>
              <td className="p-3">{new Date(record.borrowedAt).toLocaleString()}</td>
              <td className="p-3">{record.returnedAt ? new Date(record.returnedAt).toLocaleString() : 'Not returned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}