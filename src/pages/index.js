import React from 'react'

import  Layout  from '@components/layout';
import styled from 'styled-components';

import { Hero, Skills, Jobs, Certifications, Featured, Projects } from '@components';



const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function IndexPage({location}) {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero/>
        <Jobs/>
        
        <Featured/>
        <Projects/>
        <Skills/>
        <Certifications/>

      </StyledMainContainer>

    </Layout>
  )
}
