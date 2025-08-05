import React from 'react';
import styled from 'styled-components';
import { technical_profile } from '@config';

const Skills = () => {
  return (
    <StyledSkillsSection id="skills">
      <h2 className="numbered-heading">My Technical Profile</h2>
      
    {/* Desktop View */}
    <div className="skill-columns">
      {technical_profile.map((category, i) => (
        <div className="skill-column" key={i}>
          <h4>{category.name}</h4>
          <ul>
            {category.skills.map((skill, j) => (
              <li key={j}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Mobile View */}
    {technical_profile.map((category, i) => (
      <details className="skill-dropdown" key={i}>
        <summary>{category.name}</summary>
        <div className="dropdown-content">
          <ul>
            {category.skills.map((skill, j) => (
              <li key={j}>{skill}</li>
            ))}
          </ul>
        </div>
      </details>
    ))}

    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  .skill-columns {
    column-count: 3;
    column-gap: 40px;
  }

  @media (max-width: 1024px) {
    .skill-columns {
      column-count: 2;
    }
  }

  @media (max-width: 600px) {
    .skill-columns {
      column-count: 1;
    }
  }

  .skill-column {
    break-inside: avoid;
    page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    flex: 1 1 200px;
    min-width: 200px;
    margin-bottom: 32px;
  }

  .skill-column h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .skill-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skill-column li {
    margin-bottom: 8px;
    color: var(--palette-4);
    font-size: var(--fz-lg);
    font-weight: 500;
    position: relative;
    padding-left: 16px;
  }

  .skill-column li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--palette-3);
    font-size: var(--fz-md);
    line-height: 1;
  }

  .skill-dropdown {
    margin: 16px 0 32px;
  }

  .skill-dropdown summary {
    font-weight: bold;
    font-size: var(--fz-lg);
    cursor: pointer;
    list-style: none;
    position: relative;
    padding-right: 20px;
    padding-bottom: 0px;
    border-bottom: 1px solid var(--palette-3);
  }

  .skill-dropdown summary::after {
    content: '▾';
    position: absolute;
    right: 0;
    top: 0;
    font-size: var(--fz-md);
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }

  .skill-dropdown[open] summary {
    margin-bottom: 10px;
  }

  .skill-dropdown[open] summary::after {
    transform: rotate(180deg);
  }

  .skill-dropdown ul {
    list-style: none;
    padding-left: 20px;
    margin: 0;
    column-count: 2;
    column-gap: 20px;
  }

  .skill-dropdown li {
    margin-bottom: 8px;
    color: var(--palette-4);
    font-size: var(--fz-lg);
    font-weight: 500;
    position: relative;
    padding-left: 16px;
  }

  .skill-dropdown li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--palette-3);
    font-size: var(--fz-md);
    line-height: 1;
  }

  .skill-dropdown .dropdown-content {
    max-height: 0;
    overflow: hidden;
    animation: hideContent 1s ease forwards;
  }

  .skill-dropdown[open] .dropdown-content {
    animation: showContent 1s ease forwards;
  }

  @media (max-width: 400px) {
    .skill-dropdown ul {
      column-count: 1;
    }
  }
  
  @media (min-width: 768px) {
    .skill-dropdown {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .skill-columns {
      display: none;
    }

    .skill-dropdown {
      display: block;
    }
  }

  @keyframes showContent {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 500px;
      opacity: 1;
    }
  }

  @keyframes hideContent {
    from {
      max-height: 500px;
      opacity: 1;
    }
    to {
      max-height: 0;
      opacity: 0;
    }
  }
`;

export default Skills;
