// Imports:
import Head from 'next/head';

export function HeadComponent({ label }: { label: string }) {
  return (
    <Head>
      <title>{label}</title>
    </Head>
  );
}
