'use client'

import { cookies } from 'next/headers'
import axios from './api'

export async function login(username: string, password: string): Promise<boolean> {
  try {
    const res = await axios.post('/auth/login', { username, password })
    localStorage.setItem('token', res.data.token)
    document.cookie = `JWT-SESSION=${res.data.token}; path=/;`
    return true
  } catch {
    return false
  }
}

export async function register(username: string, password: string): Promise<boolean> {
  try {
    await axios.post('/auth/register', { username, password })
    return true
  } catch {
    return false
  }
}