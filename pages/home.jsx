import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../components/homepage/About';
import Contact from '../components/homepage/Contact';
import Projects from '../components/homepage/ProjectsPreview';
import Skills from '../components/homepage/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mihaela Vlad</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>

      <main className="content">
        <Header></Header>

        <About></About>

        <Skills></Skills>

        <Projects></Projects>

        <Contact></Contact>

        <Footer></Footer>
      </main>
    </div>
  );
}
