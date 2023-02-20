export default async function Page() {
  return (
    <div>
      This is a static page. It should be cached in the edge. But it is not.
    </div>
  );
}

// export const dynamic = 'error';
// export const runtime = 'experimental-edge';
