import styled from 'styled-components';
import { black, secondary } from '../../../../../settings/colors';

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  display: flex;
  max-width: 400px;
  margin: 70px 0;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-right: 22px;
  object-fit: cover;
`;

export const AgentDetails = styled.div`
`;

export const Name = styled.label`
  display: block;
  color: ${black};
  font-weight: bold;
  font-size: 1.37em;
  padding-bottom: 8px;
  line-height: 1.62em;
`;

export const Location = styled.label`
  display: block;
  font-size: 1em;
  padding-bottom: 8px;
`;

export const Type = styled.span`
  display: flex;
  padding-bottom: 16px;
  align-items: center;
  cursor: pointer;
`;

export const AgentIcon = styled.img`
  width: 24px;
  margin-right: 8px;
`;

export const AgentLabel = styled.label`
  font-weight: 500;
  font-size: 1em;
  color: ${secondary};
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #E9DDE6;
`;

export const SocialMedia = styled.img`
  margin-right: 26px;
  margin-top: 16px;
  cursor: pointer;
`;

export const SocialMediaContainer = styled.div`
  
`;