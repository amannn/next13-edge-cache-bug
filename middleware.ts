import {NextResponse} from 'next/server';

export function middleware() {
  const response = NextResponse.next();
  response.headers.set(
    'cache-control',
    's-maxage=1, stale-while-revalidate=604800'
  );
  return response;
}

export const config = {
  matcher: '/'
};
