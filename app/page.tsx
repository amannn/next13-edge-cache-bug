export default async function Page() {
  return <div>{new Date().toISOString()}</div>;
}

export const runtime = 'nodejs';
