import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { socialMedia } from '@config';
import Icon from '@icons/icon';

const PicturedHeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 60px;
  width: 100%;
  padding: 200px 0px 0 0px; /* top, right, bottom, left */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 100px 0 20px;
  }

  img {
    width: 200px;      /* Fixed width for better control */
    height: auto;      /* Maintain aspect ratio */
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: var(--transition);
    pointer-events: none;
  }

`;

const StyledRightSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 2;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  max-width: 600px;
  width: 100%;

  p {
    max-width: 100%;
    width: 100%;
  }
`;


const StyledSocialList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* allow items to wrap to multiple rows */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 10px; /* optional: use instead of margin on li for better wrap handling */

  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px; /* constant width */
      height: 40px; /* constant height */
      padding: 0;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 25px;
        height: 25px;
        flex-shrink: 0;
      }
    }
  }
`;


const StyledHeroSection = styled.section`
  // position: sticky;
  // top: 100px; /* Adjust based on your header/nav height */
  align-self: flex-start; /* allow it to size properly inside flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 0;
  height: fit-content;

  @media (max-width: 768px) {
    position: static;
  }

  @media (max-height: 700px) and (min-width: 00px), (max-width: 450px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    font-size: clamp(40px, 8vw, 45px);
    margin: 30px 0 10px 0;
    font-weight: 600;
    color: var(--palette-4);
    line-height: 1.1;
  }

  h3 {
    margin-top: 0px;
    font-weight: 500;
    color: var(--palette-3);
    line-height: 0.9;
    font-size: clamp(20px, 4vw, 20px);
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;


const StyledInterestsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .interests {
    flex: 5; /* narrower */
  }

  .education {
    flex: 7 ; /* wider */
  }

  .interests ul {
    padding-left: 20px;
    columns: 2;
    column-gap: 40px;
  }

  .education-entry {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 20px;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin-top: 4px;
    }

    .text {
      h4 {
        margin: 0;
        font-weight: 600;
      }

      p {
        margin: 0;
        color: var(--palette-4);
        font-size: 14px;
      }
    }
  }
`;


const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion) {
      // setIsMounted(true)
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const photo = <img
    style={{ transitionDelay: `100ms` }}
    src="petecastle_frontpage.png"
    alt="PeteCastle_front"
  />;
  const name = <h2>Francis Mark Cayco</h2>;
  const branding = <h3>Full Stack Data Scientist and ETL Developer</h3>;
  
  const socials = <StyledSocialList>
    {socialMedia &&
      socialMedia.map(({ url, name }, i) => (
        <li key={i}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
  </StyledSocialList>



  const about_header = <h2 style={{ transitionDelay: `200ms` }}>Biography</h2>;

  const about = (
    <>
      <p>
        <b>Full-stack Data Scientist</b> with a strong foundation in machine learning, backend development, and data engineering. Skilled in building robust, explainable ML models and deploying scalable systems across cloud platforms. Experienced in MLOps, API development, and orchestrating data pipelines that power real-time insights and strategic decisions.
      </p>
      <p>
        Kiko's path into data science began with a simple yet powerful question in 2022: <i>“How can businesses make meaningful decisions from the vast amounts of customer data?”</i> What started as curiosity sparked by a TED Talk quickly evolved into a deep, disciplined pursuit of knowledge in data science. Passionate about applying data for social and strategic value, Francis continues to explore how intelligent systems can help shape a more informed, equitable future.
      </p>
    </>
  );

  const interests_educ = (
    <StyledInterestsSection>
      <div className="interests">
        <h3>Interests</h3>
        <ul>
          <li>Data Science</li>
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Predictive Analytics</li>
          <li>Data Engineering</li>
          <li>Machine Learning Operations</li>
          <li>Explainable AI</li>
          <li>Network Science</li>
        </ul>
      </div>

      <div className="education">
        <h3>Education</h3>

        <div className="education-entry">
          <img src="asian-institute-of-management.webp" alt="AIM Logo" />
          <div className="text">
            <h4>Master of Science in Data Science, 2025</h4>
            <p>Asian Institute of Management</p>
          </div>
        </div>

        <div className="education-entry">
          <img src="PLM_Seal_2013.png" alt="PLM Logo" />
          <div className="text">
            <h4>Bachelor of Science in Computer Engineering, 2024</h4>
            <p><i>Summa Cum Laude</i></p>
            <p>Pamantasan ng Lungsod ng Maynila</p>
            
          </div>
        </div>
      </div>
    </StyledInterestsSection>
  );

  const left = [photo, name, branding, socials];
  const right = [about_header, about, interests_educ];

  return (
    <PicturedHeroSection id="about">
      <StyledHeroSection>
        <TransitionGroup component={null}>
          {isMounted &&
            left.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}

        </TransitionGroup>
      </StyledHeroSection>

      <StyledRightSection>
        <TransitionGroup component={null}>
          {isMounted &&
            right.map((item, i) => {
              const i_ = i + left.length;
              return (
                <CSSTransition key={i_} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i_}00ms` }}>{item}</div>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </StyledRightSection>
    </PicturedHeroSection>


  );
};

export default Hero;  