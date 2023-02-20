import {NextResponse, NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  request.headers.set('x-middleware', new Date().toISOString());
  return NextResponse.next();
}

export const config = {
  matcher: '/'
};
