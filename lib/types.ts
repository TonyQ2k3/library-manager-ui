export interface Book {
  id: number
  title: string
  author: string
  isbn: string
  available: boolean
}

export interface BorrowingRecord {
  id: number
  borrowedAt: string
  returnedAt: string | null
  book: Book
}