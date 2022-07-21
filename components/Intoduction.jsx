import Link from 'next/link';

export default function Introduction() {
  return (
    <section className="introduction container">
      <div className="introduction-inner">
        <h1 className="title">Hello!</h1>

        <p>
          I’m a Front-End Developer from Romania. I have a passion for UI
          effects, animations, 3d and creating intuitive, dynamic user
          experiences.
        </p>

        <Link href="/home">
          <a title="Enter" className="btn-cta">
            Enter
          </a>
        </Link>
      </div>
    </section>
  );
}
