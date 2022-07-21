import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="contact container" id="contact-me">
      <header className="contact-header">
        <h1>Contact me</h1>
      </header>

      <section className="contact-container">
        <div className="d-block">
          <Image
            src="/design/border-small.png"
            height="20px"
            width="808px"
            alt="border"
            className="image"
          ></Image>
        </div>

        <section className="contact-information">
          <ul>
            <li>
              <Link href="https://github.com/MihaelaVlad">
                <a
                  title="Mihaela Vlad GitHub Account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/github.svg"
                    width="30px"
                    height="30px"
                    alt="Mihaela Vlad GitHub Account"
                    title="Mihaela Vlad GitHub Account"
                  ></Image>
                  GitHub Account
                </a>
              </Link>
            </li>

            <li>
              <Link href="https://www.linkedin.com/in/vlad-mihaela-a961a0136/">
                <a
                  title="Mihaela Vlad LinkedIn Account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    width="30px"
                    height="30px"
                    alt="Mihaela Vlad LinkedIn Account"
                    title="Mihaela Vlad LinkedIn Account"
                  ></Image>
                  LinkedIn Account
                </a>
              </Link>
            </li>

            <li>
              <Link href="mailto:mihaela.c.vlad@gmail.com">
                <a title="Mihaela Vlad Email">
                  <Image
                    src="/icons/email.svg"
                    width="30px"
                    height="30px"
                    alt="Mihaela Vlad Email"
                    title="Mihaela Vlad Email"
                  ></Image>
                  Email: mihaela.c.vlad@gmail.com
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}
