import Image from 'next/image';
import Project from '../projects/Project';

export default function Projects() {
  return (
    <section className="projects-preview container" id="projects">
      <header className="projects-preview-header">
        <h1>Projects</h1>
      </header>

      <div className="project-tiles-container">
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

        <section className="projects-tiles">
          <Project></Project>

          <Project></Project>
        </section>
      </div>
    </section>
  );
}
