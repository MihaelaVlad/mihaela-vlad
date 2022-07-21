import Image from 'next/image';

export default function Skills() {
  return (
    <section className="skills container" id="skills">
      <header className="skills-header">
        <h1>Skills</h1>
      </header>

      <div className="technologies-container">
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

        <section className="technologies">
          <h1>Technologies</h1>

          <div className="technologies-skills">
            <section className="programming-technologies">
              <header className="programming-technologies-header">
                <Image
                  src="/icons/webdev.png"
                  height="50px"
                  width="50px"
                  alt="front end development"
                  className="image"
                ></Image>

                <h2>Front-end development skills</h2>
              </header>

              <ul className="technologies-list">
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

            <section className="design-technologies">
              <header className="design-technologies-header">
                <Image
                  src="/icons/uiux.png"
                  height="50px"
                  width="50px"
                  alt="ui ux design"
                  className="image"
                ></Image>

                <h2>UI/UX design skills</h2>
              </header>

              <ul className="technologies-list">
                <li>
                  <Image
                    src="/icons/photoshop.svg"
                    alt="Photoshop"
                    title="Photoshop"
                    height="50px"
                    width="50px"
                  ></Image>
                </li>

                <li>
                  <Image
                    src="/icons/illustrator.svg"
                    alt="Illustrator"
                    title="Illustrator"
                    height="50px"
                    width="50px"
                  ></Image>
                </li>

                <li>
                  <Image
                    src="/icons/xd.svg"
                    alt="Adobe XD"
                    title="Adobe XD"
                    height="50px"
                    width="50px"
                  ></Image>
                </li>

                <li>
                  <Image
                    src="/icons/figma.svg"
                    alt="Figma"
                    title="Figma"
                    height="50px"
                    width="50px"
                  ></Image>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}
