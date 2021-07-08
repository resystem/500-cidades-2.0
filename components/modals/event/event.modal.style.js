import styled from 'styled-components';
// import { black, secondary } from '../../../settings/colors';

// #96638C

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const Container = styled.div`
  opacity: 1;
  padding: 20px;
  height: 100%;
  width: 600px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 16px;
    height: 128px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #96638C;
  }
`;

export const Header = styled.header`
  display: flex;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const MenuIcon = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 0.875;
`;

export const Biography = styled.div`
  max-width: 400px;
`;

export const SectionTitle = styled.h4`
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 1.125em;
  ${props => props.customStyle}
`;

export const BiographyText = styled.p`
  color: #96638C;
  font-size: 0.87em;
`;

export const Contact = styled.div`
  max-width: 400px;
  width: 100%;
  margin-top: 40px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  /* background-color: #E9DDE6; */
  border-top: 1px solid #E9DDE6;
  margin: 32px 0;
  max-width: 400px;
`;


export const sectionTitleCustomStyle =  `
  margin-top: 40px;
  width: 100%;
  max-width: 400px;
`;

export const sectionSmallTitleCustomStyle =  `
  margin-top: 40px;
  width: 100%;
  max-width: 400px;
  font-weight: 500;
`;

export const maxWidthCustomStyle =  `
  max-width: 400px;
`;