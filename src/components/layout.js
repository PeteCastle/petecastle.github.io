import React, { useState } from 'react'

import styled, { ThemeProvider } from 'styled-components';

import {Loader, Header, Nav, Social, Email, Footer} from '@components';
import {GlobalStyle, theme } from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;


  
`;

export default function Layout({children, location}) {
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);
 
  return (
    <>
      <Header />
      
    
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isLoading && isHome ? (
              <Loader finishLoading={() => setIsLoading(false)} />
            ) : (
              <StyledContent>
    
                <Nav isHome={isHome} />
                 <Social isHome={isHome} />
                <Email isHome={isHome} />
                

                <div id="content">
                  {children}
                  <Footer />
                </div> 
              </StyledContent>
            )
            }
        </ThemeProvider>


      </div>

      
    </>
  );
}
