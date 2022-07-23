import Image from 'next/image';

export default function About() {
  return (
    <section className="about container" id="about-me">
      <header className="about-header">
        <picture>
          <source
            media="(min-width: 993px)"
            srcSet="/design/about-lg.png"
          ></source>
          <img src="/design/about.png" alt="About me"></img>
        </picture>
      </header>

      <section className="profile">
        <div className="about-me">
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

          <section className="about-me-summery">
            <div>
              <Image
                src="/design/avatar.png"
                height="383px"
                width="269px"
                alt="avatar"
                className="image"
              ></Image>

              <section className="title">
                <h1>Front-end developer</h1>
                <h1>Ui/ux designer</h1>
              </section>
            </div>

            <div>
              <p>
                I&apos;m currently working on becoming a front end developer at
                Pixellab Traning Center. I have a passion for UI design,
                animations, 3d graphics and creating intuitive, dynamic user
                experiences.
              </p>

              <p>
                I have expericence working with various programs within the
                Adobe Creative Suite, for example, Photoshop, XD and
                Illustrator. In the past months I have gained the skills to
                develop websites by using web technologies such as HTML, CSS,
                Bootstrap, Sass and Next.js. Also, I was able to maintain an
                organized workflow with Git and Github.
              </p>

              <p>
                I also have a passion for digital painting, technology and game
                development.
              </p>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
