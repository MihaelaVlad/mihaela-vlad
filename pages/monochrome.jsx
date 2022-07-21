import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';
import MonochromeProject from '../components/projects/MonochromeProject';

export default function Monochrome() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>

      <main className="content">
        <MonochromeProject></MonochromeProject>

        <Footer></Footer>
      </main>
    </div>
  );
}
