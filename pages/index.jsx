import Head from 'next/head';
import Introduction from '../components/Intoduction';

export default function Welcome() {
  return (
    <div>
      <Head>
        <title>Mihaela Vlad</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>

      <main className="content">
        <Introduction></Introduction>
      </main>
    </div>
  );
}
