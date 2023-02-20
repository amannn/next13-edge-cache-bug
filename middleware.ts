import {NextResponse} from 'next/server';

export function middleware() {
  const response = NextResponse.next();

  console.log([...response.headers.entries()]);

  response.headers.delete('cache-control');
  response.headers.set(
    'cache-control',
    's-maxage=1, stale-while-revalidate=604800'
  );
  response.headers.set(
    'x-cache-control',
    's-maxage=1, stale-while-revalidate=604800'
  );
  response.headers.set('x-middleware', new Date().toISOString());
  return response;
}

export const config = {
  matcher: '/'
};
