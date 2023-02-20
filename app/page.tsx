import {headers} from 'next/headers';

export default async function Page() {
  return <div>{headers().get('x-middleware')}</div>;
}
