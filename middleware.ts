import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const token = req.cookies.get('JWT-SESSION')?.value;
    const url = req.nextUrl.clone()

    if (!token && url.pathname.startsWith('/dashboard')) {
        url.pathname = '/auth/login'
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}
