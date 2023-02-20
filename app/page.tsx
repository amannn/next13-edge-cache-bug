import {headers} from 'next/headers';

export default async function Page() {
  headers();
  return <div>Hello</div>;
}
