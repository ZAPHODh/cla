import { HomePage } from '@/templates/HomePage';

import Head from 'next/head';
export type Char = {
  _id: string | number;
  charName: string;
  position: string;
  __v: number;
};
export type HomeProps = {
  chars: Char[];
};
export default function Home({ chars }: HomeProps) {
  return (
    <>
      <Head>
        <title>Clã FairyTail</title>
        <meta name="description" content="Home Page do clã fairyTail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage chars={chars} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/char');
  const data = await res.json();
  const chars: Char[] = JSON.parse(data);

  return {
    props: {
      chars,
    },
  };
}
