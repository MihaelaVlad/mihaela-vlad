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
        <picture>
          <source
            media="(min-width: 993px)"
            srcSet="/design/monochrome-lg.png"
          ></source>
          <img src="/design/monochrome.png" alt="Monochrome"></img>
        </picture>
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
            src="/design/project-monochrome.jpg"
            width="500px"
            height="600px"
            alt="Monochrome"
            title="Monochrome"
          ></Image>
        </div>

        <section className="project-details">
          <section className="project-desciption">
            <header className="project-desciption-header">
              <h1>About</h1>
            </header>

            <p>
              Lorem ivpsum dolor sit amet, consectetur adipiscing elit. Quis
              tristique sed non eget suspendisse massa, morbi dictumst.
            </p>
          </section>

          <section className="project-challenges">
            <header className="project-challenges">
              <h1>Challenges</h1>
            </header>

            <p>
              Lorem ivpsum dolor sit amet, consectetur adipiscing elit. Quis
              tristique sed non eget suspendisse massa, morbi dictumst. At eget
              pulvinar quis ac gravida etiam nisl arcu.
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
