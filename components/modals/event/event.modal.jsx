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
} from './event.modal.style';
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
 * render the EventModal atom.
 */
const EventModal = ({
}) => {
  const { closeModal, modals, modalInfo, events } = useContext(Store)
  if (!modals.event || !modalInfo) return null;
  const event = events[modalInfo.event_id]
  if (!event) return null;
  return (
    <Wrapper onClick={() => closeModal()}>
      <Container onClick={e => e.stopPropagation()}>
        <Header>
          <BackButton handleClick={() => closeModal()} />
          <MenuIcon src="/icons/dots_menu.svg" />
        </Header>
        <About
          avatarImage={event.avatar_image}
          name={`${event.name}`}
        />
        <Biography>
          <SectionTitle>Descrição</SectionTitle>
          <BiographyText>{event.description}</BiographyText>
        </Biography>
        <Characteristic
          label="A oportunidade é"
          value={event.type}
        />
        <Contact>
          <SectionTitle>Contato</SectionTitle>
          <ContactInfo
            iconPath="/icons/world.svg"
            text={event.facebook}
          />
          <ContactInfo
            iconPath="/icons/mail.svg"
            text={event.instagram}
          />
          <ContactInfo
            iconPath="/icons/phone.svg"
            text={event.twitter}
          />
          <ContactInfo
            iconPath="/icons/whatsapp.svg"
            text={event.tiktok}
          />
        </Contact>
        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Tipos de Oportunidade</SectionTitle>
        <TagList tags={event.types} customStyle={maxWidthCustomStyle} />

        <SectionTitle customStyle={sectionSmallTitleCustomStyle} >Programação</SectionTitle>
        <OpeningHour />

        <Characteristic
          label="Endereço"
          value={event.addres}
        />
        <Characteristic
          label="Possui bilheteria física?"
          value={event.physical_boxoffice}
        />
        <Characteristic
          label="Capacidade de público ou participantes"
          value={event.capacity}
        />
        <Characteristic
          label="Classe Etária"
          value={event.age_bracket}
        />
        <Characteristic
          label="Tem acessibilidade"
          value={event.has_accessibility}
        />
        <Characteristic
          label="Qual?"
          value={event.has_accessibilities}
        />
        <Contact>
          <SectionTitle>Inscrição</SectionTitle>
          <ContactInfo
            iconPath="/icons/world.svg"
            text={event.link}
          />
        </Contact>
        <Galery
          title="Responsáveis"
          showTitle={true}
          customStyle="margin-top: 40px;"
          lines={1}
          columns={2}
          // images={event.images}
          handleClick={() => console.log('OI')}
        />
      </Container>
    </Wrapper>
  );
}


EventModal.propTypes = {
};

EventModal.defaultProps = {
};

export default EventModal;
