import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {
  ActionWrapper, Container,
  customStyleCancelButton, customStyleSaveButton,
} from './handleActivist.modal.style';
import ActivistForm from '../../organisms/activist-form/activistForm';
import Button from '../../atoms/button/button';
import { getAddress, submitProxy } from './handleActivist.controller';

/**
 * render the HandleActivist atom.
 */
const HandleActivistForm = ({
  handleSubmit, handleCancel, activist,
}) => {
  const [name, setName] = useState(activist.name || '');
  const [socialName, setSocialName] = useState(activist.social_name || '');
  const [facebook, setFacebook] = useState(activist.facebook || '');
  const [instagram, setInstagram] = useState(activist.instagram || '');
  const [twitter, setTwitter] = useState(activist.twitter || '');
  const [tiktok, setTiktok] = useState(activist.tiktok || '');
  const [biography, setBiography] = useState(activist.biography || '');
  const [email, setEmail] = useState(activist.email || '');
  const [whatsapp, setWhatsapp] = useState(activist.whatsapp || '');

  const [zipcode, setZipcode] = useState(activist.address?.zipcode || '');
  const [street, setStreet] = useState(activist.address?.street || '');
  const [number, setNumber] = useState(activist.address?.number || '');
  const [complement, setComplement] = useState(activist.address?.complement);
  const [district, setDistrict] = useState(activist.address?.district || '');
  const [city, setCity] = useState(activist.address?.city || '');
  const [state, setState] = useState(activist.address?.state || '');
  const [country, setCountry] = useState(activist.address?.country || '');
  const [geometry, setGeometry] = useState(activist.address?.geolocation || {});
  const [lat, setLat] = useState(activist.address?.lat || null);
  const [lng, setLng] = useState(activist.address?.lng || null);
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {
    const handlers = {
      name: (payload) => setName(payload),
      socialName: (payload) => setSocialName(payload),
      facebook: (payload) => setFacebook(payload),
      instagram: (payload) => setInstagram(payload),
      twitter: (payload) => setTwitter(payload),
      tiktok: (payload) => setTiktok(payload),
      biography: (payload) => setBiography(payload),
      email: (payload) => setEmail(payload),
      whatsapp: (payload) => setWhatsapp(payload),
      zipcode: (payload) => setZipcode(payload),
      street: (payload) => setStreet(payload),
      number: (payload) => setNumber(payload),
      complement: (payload) => setComplement(payload),
      district: (payload) => setDistrict(payload),
      city: (payload) => setCity(payload),
      state: (payload) => setState(payload),
      country: (payload) => setCountry(payload),
      geometry: (payload) => setGeometry(payload),
      lat: (payload) => setLat(payload),
      lng: (payload) => setLng(payload),
    };
    errors[id] = '';
    handlers[id](value);
  };

  const values = {
    name,
    socialName,
    facebook,
    instagram,
    twitter,
    tiktok,
    biography,
    country,
    email,
    whatsapp,
    zipcode,
    street,
    number,
    complement,
    geometry,
    lat,
    lng,
    district,
    city,
    state,
  };

  useEffect(() => {
    getAddress(zipcode, handleChange);
  }, [zipcode])

  return (
    <Container>
      {/* <AboutWrapper>
        <UploadAvatar customStyle={inputCustomStyle}/>
      </AboutWrapper> */}
      <ActivistForm
        handleChange={handleChange}
        values={values}
        errors={errors}
      />
      <ActionWrapper>
        <Button
          handleClick={handleCancel}
          customStyle={customStyleCancelButton}
        >Cancelar</Button>
        <Button
          handleClick={() => submitProxy(values, handleSubmit, setErrors)}
          customStyle={customStyleSaveButton}
        >Salvar</Button>
      </ActionWrapper>
    </Container>
  );
}

HandleActivistForm.propTypes = {
};

HandleActivistForm.defaultProps = {
  activist: {},
  title: 'Criar Perfil',
  handleSubmit: (activist) => console.log('🚀 ~ activist', activist),
  handleCancel: () => console.log('🚀 ~ CANCEL'),
};

export default HandleActivistForm;
