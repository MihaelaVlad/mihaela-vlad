import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  return (
    <section className="project-tile">
      <article className="project">
        <Link href="/monochrome">
          <a title="Monochrome">
            <Image
              src="/design/project.png"
              alt="Monochrome"
              title="Monochrome"
              width="270px"
              height="473px"
            ></Image>
          </a>
        </Link>

        <header className="project-header">
          <Link href="/monochrome">
            <a title="Monochrome">Monochrome</a>
          </Link>
        </header>
      </article>
    </section>
  );
}
