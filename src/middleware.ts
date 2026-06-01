import { NextResponse, type NextRequest } from 'next/server'
export async function middleware(request: NextRequest) {
  const isAuthPage = request.nextUrl.pathname.startsWith('/login')
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin')
  
  // A simple check for a session cookie set by our Firebase login
  const hasSession = request.cookies.has('sipanda-auth')

  if (!hasSession && isAdminPage && !isAuthPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  if (hasSession && isAuthPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
