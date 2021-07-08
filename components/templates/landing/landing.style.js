import styled from 'styled-components';
import { white, purple } from '../../../settings/colors';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const HeroContainer = styled.section`
  max-width: 100%;
  height: 864px;
  padding: 25%;

  background-image: url('images/landing_map-4x.png');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SupportSection = styled.section`
  background-color: #3B2737;
  height: 864px;
  width: 100%;
`;

export const InfoCard = styled.div`
  max-width: 680px;
  height: 600px;
  background-image: url('images/mobilizador.png');

  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

export const InfoCardTitle = styled.h2`
  font-size: 4em;
  color: ${white};
`;

export const InfoCardSubtitle = styled.h3`
  font-size: 1em;
  color: ${white};
`;

export const EducationalOportunitiesSection = styled.section`
  background-color: #F7F2F6;
  height: 678px;
`;

export const EducationalOportunitiesSectionTitle = styled.h2`
  font-size: 5.25em;
  color: #3B2737;
`;

export const MoreOportunitiesSection = styled.section`
  height: 928px;
`;

export const FlowSection = styled.section`
  background-color: #E63A3A;
  height: 2420px;
`;

export const MoreOportunitiesSectionTitle = styled.h2`
  font-size: 4em;
  color: #3B2737;
`;

export const Title = styled.h1`
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
  color: ${white};
`;

export const Headline = styled.h2`
  font-size: 3em;
  font-weight: 500;
  margin-bottom: 34px;
  color: ${white};
  line-height: 100%;

  max-width: 480px;

  @media (min-width: 1024px) {
    font-size: 3.2em;
  }
`;

export const Text = styled.p`
  font-size: 0.875em;
  font-weight: 300;
  line-height: 1.625em;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 30px;
  left: 0;
  text-align: center;
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 2em;
  margin-right: 8px;
`;

export const signUpButtonCustomStyle = `
  background-color: #1D1D1D;
  border-color: #1D1D1D;
  color: ${white};
  font-weight: 500;
  front-size: 1.125em;
  width: 200px;
  line-heigh: 1.25em;

  display: flex;
  align-items: center;
  justify-content: space-around;

`;
