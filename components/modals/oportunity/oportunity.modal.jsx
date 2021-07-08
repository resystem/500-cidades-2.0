import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import {
  AboutContainer,
  Container,
  Header,
  Wrapper,
  BackContainer,
  BackIcon,
  Label,
  MenuIcon,
  AboutWrapper,
  ProfileImage,
  AgentDetails,
  Name,
  Location,
  Type,
  AgentIcon,
  AgentLabel,
  SocialMedia,
  SectionTitle,
  BiographyText,
  Contact,
  Biography,
  Line,
  sectionTitleCustomStyle,
  sectionSmallTitleCustomStyle,
  maxWidthCustomStyle
} from './oportunity.modal.style';
import BackButton from '../../molecules/back-button/backButton';
import About from './components/about/about';
import ContactInfo from '../../molecules/contact-info/contact';
import Characteristic from '../../molecules/characteristic/characteristic';
import OpeningHour from '../../molecules/opening-hour/openingHour';
import Galery from '../../templates/galery/galery.template';
import EventList from '../../templates/event-list/events.template';
import TagList from '../../molecules/taglist/taglist';
import Store from '../../../store/Store';

/**
 * render the OportunityModal atom.
 */
const OportunityModal = ({
}) => {
  const { closeModal, modals, modalInfo, oportunitys } = useContext(Store)
  if (!modals.oportunity || !modalInfo) return null;
  const oportunity = oportunitys[modalInfo.oportunity_id]
  if (!oportunity) return null;
  return (
    <Wrapper onClick={() => closeModal()}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton handleClick={() => closeModal()} />
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <About
          avatarImage={oportunity.avatar_image}
          name={`${oportunity.name}`}
        />
        <Biography>
          <SectionTitle>Descrição</SectionTitle>
          <BiographyText>{oportunity.description}</BiographyText>
        </Biography>
        <Characteristic
          label="A oportunidade é"
          value={oportunity.type}
        />
        <Contact>
          <SectionTitle>Contato</SectionTitle>
          <ContactInfo
            iconPath="/icons/world.svg"
            text={oportunity.facebook}
          />
          <ContactInfo
            iconPath="/icons/mail.svg"
            text={oportunity.instagram}
          />
          <ContactInfo
            iconPath="/icons/phone.svg"
            text={oportunity.twitter}
          />
          <ContactInfo
            iconPath="/icons/whatsapp.svg"
            text={oportunity.tiktok}
          />
        </Contact>
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Tipos de Oportunidade</SectionTitle>
        <TagList tags={oportunity.types} customStyle={maxWidthCustomStyle} />

        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Programação</SectionTitle>
        <OpeningHour />

        <Characteristic
          label="Endereço"
          value={oportunity.addres}
        />
        <Characteristic
          label="Possui bilheteria física?"
          value={oportunity.physical_boxoffice}
        />
        <Characteristic
          label="Capacidade de público ou participantes"
          value={oportunity.capacity}
        />
        <Characteristic
          label="Classe Etária"
          value={oportunity.age_bracket}
        />
        <Characteristic
          label="Tem acessibilidade"
          value={oportunity.has_accessibility}
        />
        <Characteristic
          label="Qual?"
          value={oportunity.has_accessibilities}
        />
        <Contact>
          <SectionTitle>Inscrição</SectionTitle>
          <ContactInfo
            iconPath="/icons/world.svg"
            text={oportunity.link}
          />
        </Contact>
        <Galery
          title="Responsáveis"
          showTitle={true}
          customStyle="margin-top: 40px;"
          lines={1}
          columns={2}
          // images={oportunity.images}
          handleClick={() => console.log('OI')}
        />
      </Container>
    </Wrapper>
  );
}


OportunityModal.propTypes = {
};

OportunityModal.defaultProps = {
};

export default OportunityModal;
