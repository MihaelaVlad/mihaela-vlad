import Link from 'next/link';
import Image from 'next/image';

export default function MonochromeProject() {
  return (
    <section className="project-presentation container">
      <div className="homepage">
        <Link href="/home">
          <a title="Home">
            <Image
              src="/design/arrow.svg"
              width="30px"
              height="30px"
              alt="Home"
              title="Home"
            ></Image>
            Home
          </a>
        </Link>
      </div>

      <header className="project-presentation-header">
        <h1>Monochrome</h1>
      </header>

      <div className="d-block d-lg-none">
        <Image
          src="/design/border-small.png"
          height="20px"
          width="808px"
          alt="border"
          className="image"
        ></Image>
      </div>

      <div className="d-none d-lg-block">
        <Image
          src="/design/border.png"
          height="20px"
          width="1360px"
          alt="border"
          className="image"
        ></Image>
      </div>

      <section className="project-presentation-details">
        <div className="project-image">
          <Image
            src="/design/monochrome.png"
            width="1380px"
            height="974px"
            alt="Monochrome"
            title="Monochrome"
          ></Image>
        </div>

        <section className="project-details">
          <section className="project-description">
            <header className="project-description-header">
              <h1>About</h1>
            </header>

            <p>Monochrome is an e-commerce website build with NEXT.js. </p>

            <ul>
              <li>Layout: responsive layout made with CSS grid.</li>
              <li>I used a responsive, mobile-first strategy.</li>
              <li>It was built with reusable UI components.</li>
              <li>
                I used animations for better user experience on buttons,
                products and links.
              </li>
              <li>
                I strictly followed the design, making changes only when needed.
              </li>
            </ul>
          </section>

          <section className="project-challenges">
            <header className="project-challenges">
              <h1>Challenges</h1>
            </header>

            <p>
              Developing the mobile version only with the design for the
              homepage.
            </p>
          </section>

          <section className="project-technologies">
            <header className="project-technologies-header">
              <h1>Technologies used</h1>
            </header>

            <ul className="project-programming-technologies">
              <li>
                <Image
                  src="/icons/html.svg"
                  alt="HTML"
                  title="HTML"
                  height="50px"
                  width="50px"
                ></Image>
              </li>

              <li>
                <Image
                  src="/icons/css.svg"
                  alt="CSS"
                  title="CSS"
                  height="50px"
                  width="50px"
                ></Image>
              </li>

              <li>
                <Image
                  src="/icons/javascript.svg"
                  alt="Javascript"
                  title="Javascript"
                  height="50px"
                  width="50px"
                ></Image>
              </li>

              <li>
                <Image
                  src="/icons/nextjs.svg"
                  alt="Next JS"
                  title="Next JS"
                  height="50px"
                  width="50px"
                ></Image>
              </li>

              <li>
                <Image
                  src="/icons/sass.svg"
                  alt="SASS"
                  title="SASS"
                  height="50px"
                  width="50px"
                ></Image>
              </li>

              <li>
                <Image
                  src="/icons/bootstrap.svg"
                  alt="Bootstrap"
                  title="Bootstrap"
                  height="50px"
                  width="50px"
                ></Image>
              </li>

              <li>
                <Image
                  src="/icons/git.svg"
                  alt="Git"
                  title="Git"
                  height="50px"
                  width="50px"
                ></Image>
              </li>

              <li>
                <Image
                  src="/icons/github.svg"
                  alt="Github"
                  title="Github"
                  height="50px"
                  width="50px"
                ></Image>
              </li>
            </ul>
          </section>

          <footer className="project-footer">
            <Link href="https://github.com/MihaelaVlad/monochrome">
              <a
                title="Visit repository"
                className="btn-cta-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit repository
              </a>
            </Link>

            <Link href="https://monochrome-mihaela-vlad.netlify.app/">
              <a
                title="Visit website"
                className="btn-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </Link>
          </footer>
        </section>
      </section>
    </section>
  );
}
