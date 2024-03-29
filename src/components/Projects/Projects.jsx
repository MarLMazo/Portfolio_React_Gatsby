import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import IsotopeGrid from 'react-isotope';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import myfilters from './filters.json';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [filtered, updateFilters] = useState(myfilters);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const onFilter = (event) => {
    const {
      target: { value },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: true,
          };
        }
        return {
          ...f,
          isChecked: false,
        };
      })
    );
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <div className="filter-container">
            {filtered.map((f) => (
              <div key={`${f.label}_key`}>
                <input
                  id={f.label}
                  type="radio"
                  value={f.label}
                  onChange={onFilter}
                  checked={f.isChecked}
                />
                <label htmlFor={f.label}>{f.label}</label>
              </div>
            ))}
          </div>
          <Container className="filter-proj-container">
            {projects && (
              <IsotopeGrid gridLayout={projects} filters={filtered}>
                {projects.map((project) => {
                  const { title, info, info2, url, repo, img, id, technologies, filter } = project;
                  return (
                    <div key={id} className={`proj-card card ${filter}`}>
                      <Row>
                        <Col lg={4} sm={12}>
                          <Fade
                            left={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={500}
                            distance="30px"
                          >
                            <div className="project-wrapper__text">
                              <h3 className="project-wrapper__text-title">
                                {title || 'Project Title'}
                              </h3>
                              <div>
                                <p>
                                  {info ||
                                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                                </p>
                                <p className="mb-4">{info2 || ''}</p>
                              </div>
                              <p>
                                {technologies.map((tech) => (
                                  <span key={`proj-${tech}`}> {tech} |</span>
                                ))}
                              </p>
                              <div>{}</div>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-btn--hero"
                                href={url || '#!'}
                              >
                                See Live
                              </a>

                              {repo && (
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="cta-btn text-color-main"
                                  href={repo}
                                >
                                  Source Code
                                </a>
                              )}
                            </div>
                          </Fade>
                        </Col>
                        <Col lg={8} sm={12}>
                          <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={1000}
                            distance="30px"
                          >
                            <div className="project-wrapper__image">
                              <a
                                href={url || '#!'}
                                target="_blank"
                                aria-label="Project Link"
                                rel="noopener noreferrer"
                              >
                                <Tilt
                                  options={{
                                    reverse: false,
                                    max: 8,
                                    perspective: 1000,
                                    scale: 1,
                                    speed: 300,
                                    transition: true,
                                    axis: null,
                                    reset: true,
                                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                                  }}
                                >
                                  <div data-tilt className="thumbnail rounded">
                                    <ProjectImg alt={title} filename={img} />
                                  </div>
                                </Tilt>
                              </a>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </IsotopeGrid>
            )}
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
