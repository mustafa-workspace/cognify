import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the auth token from cookies (cookie name in lib/cookies.ts is "Auth_Token")
  const token = request.cookies.get('Auth_Token')?.value;
  const { pathname } = request.nextUrl;

  // Define public routes that don't require authentication
  const isPublicRoute = pathname === '/signin' || pathname === '/signup';

  // 1. Redirect unauthenticated users trying to access protected routes to signin
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // 2. Redirect authenticated users away from public auth pages to /feed
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL('/feed', request.url));
  }

  // Allow the request to proceed if no redirect conditions are met
  return NextResponse.next();
}

// Config to specify which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - API routes (/api)
     * - Next.js internal/static files (_next/static, _next/image)
     * - Favicon and static assets (images, icons)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};