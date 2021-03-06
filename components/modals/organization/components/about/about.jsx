import React from 'react';
import PropTypes from 'prop-types'
import {
  AboutContainer,
  AboutWrapper,
  ProfileImage,
  AgentDetails,
  Name,
  Location,
  Type,
  AgentIcon,
  AgentLabel,
  Line,
  SocialMediaContainer,
  SocialMedia,
} from './about.style';
import { useTranslation } from 'react-i18next';

/**
 * render the About atom.
 */
const About = ({
  name, location, facebook, instagram, twitter, tiktok, avatarImage
}) => {
  const { t } = useTranslation();

  return (
    <AboutWrapper>
      <AboutContainer>
        <ProfileImage src={avatarImage} />
        <AgentDetails>
          <Name>{name}</Name>
          <Location>{location}</Location>
          <Type>
            <AgentIcon src="/icons/agent.svg" />
            <AgentLabel>{t('organization_modal.organization')}</AgentLabel>
          </Type>
          <Line />
          <SocialMediaContainer>
            <SocialMedia
              onClick={() => window.open(facebook)}
              src="/icons/facebook.svg"
            />
            <SocialMedia
              onClick={() => window.open(instagram)}
              src="/icons/instagram.svg"
            />
            <SocialMedia
              onClick={() => window.open(twitter)}
              src="/icons/twitter.svg"
            />
            <SocialMedia
              onClick={() => window.open(tiktok)}
              src="/icons/tiktok.svg"
            />
          </SocialMediaContainer>
        </AgentDetails>
      </AboutContainer>
    </AboutWrapper>
  );
}
About.propTypes = {
};

About.defaultProps = {
};

export default About;
