import styled from 'styled-components';

const BACKGROUND_COLOR = '#5352ED';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${BACKGROUND_COLOR};
  color: #fff;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  flex: 15vh;
  /* background-color: tomato; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderH1 = styled.h1`
  font-size: calc(50px + (80 - 14) * ((100vw - 320px) / (2560 - 320)));
  margin: 0;
`;
export const ContentH1 = styled.h1`
  font-size: calc(30px + (80 - 14) * ((100vw - 320px) / (2560 - 320)));
  margin: 0;
  padding: 0;

  @media (min-width: 900px) {
    margin: 0 !important;
  }
`;

export const ContentWrapper = styled.div`
  flex: 60vh;
  /* background-color: limegreen; */

  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const WordContent = styled.div`
  flex: 50%;
  padding: 0.5rem;
  /* background-color: chartreuse; */
  font-family: 'Poppins', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WordContentHeader = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 900px) {
    margin-bottom: 0;
    flex: 10%;
  }
`;

export const WordContentBody = styled.div`
  width: 85%;
  margin-top: -30px;
  font-size: calc(12px + (50 - 14) * ((100vw - 320px) / (2560 - 320)));

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 900px) {
    flex: 50%;
    margin-top: -4.5rem;
  }
`;

export const ImageContent = styled.div`
  flex: 50%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Image = styled.img`
  /* width: auto; */
  /* max-height: 550px; */
  min-width: 500px;
  max-width: 90%;
  height: auto;
`;

export const Footer = styled.div`
  flex: 20vh;
  /* background-color: gray; */

  display: flex;
  align-items: center;
  justify-content: center;
`;
