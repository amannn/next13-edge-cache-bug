import {NextRequest, NextResponse} from 'next/server';

export function middleware(request: NextRequest) {
  const time = new Date().toISOString();

  const response = NextResponse.next({
    request: {
      headers: new Headers({
        'x-middleware': time
      })
    }
  });

  response.headers.set('x-middleware', time);
  return response;
}

export const config = {
  matcher: '/'
};
