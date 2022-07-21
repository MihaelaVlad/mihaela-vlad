import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="header-container">
          <section className="header-front-end-portofolio">
            <h1 className="front-end-title">Front end developer</h1>

            <h1 className="ui-ux-design-title">UI/UX designer</h1>
          </section>

          <nav className="header-nav">
            <ul>
              <li>
                <Link href="#about-me">
                  <a title="About me">About me</a>
                </Link>
              </li>

              <li>
                <Link href="#skills">
                  <a title="Skills">Skills</a>
                </Link>
              </li>

              <li>
                <Link href="#projects">
                  <a title="Projects">Projects</a>
                </Link>
              </li>

              <li>
                <Link href="#contact-me">
                  <a title="Contact me">Contact me</a>
                </Link>
              </li>
            </ul>
          </nav>

          <section className="logo">
            <Link href="/">
              <a title="Mihaela Vlad logo">
                <Image
                  src="/design/logo-mihaela-vlad.png"
                  alt="Mihaela Vlad logo"
                  width="40px"
                  height="40px"
                ></Image>
              </a>
            </Link>
          </section>

          <div className="menu">
            <Link href="/">
              <a>
                <Image
                  src="/design/menu.png"
                  alt="menu"
                  title="Menu"
                  width="40px"
                  height="25px"
                ></Image>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="d-none d-lg-block d-xl-none">
          <Image
            src="/design/front-end-dev-portofolio-w993.png"
            className="header-background"
            height="880px"
            width="955px"
            priority={true}
            alt="header background"
          ></Image>
        </div>

        <div className="d-none d-xl-block">
          <Image
            src="/design/front-end-dev-portofolio.png"
            className="header-background"
            height="950px"
            width="1536px"
            priority={true}
            alt="header background"
          ></Image>
        </div>
      </div>
    </header>
  );
}
