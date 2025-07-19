import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-800">
        Library Management System
      </h1>

      <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl">
        Easily manage books, users, and borrowing records. Designed for admins, students, and libraries.
      </p>

      <div className="flex gap-4">
        <Link href="/auth/login" className="px-6 py-3 text-lg rounded-2xl shadow-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          Login
        </Link>
        <Link href="/auth/register"className="px-6 py-3 text-lg rounded-2xl shadow-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
          Register
        </Link>
      </div>
    </main>
  )
}
