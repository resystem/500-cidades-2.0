import React from 'react';
import {
  Wrapper,
  HeroContainer,
  Title,
  Headline,
  ButtonIcon,
  signUpButtonCustomStyle} from './landing.style';
import Button from '../../atoms/button/button';
import Header from '../../templates/header/header.template';


const LandingTemplate = () => {
  // const router = useRouter();
  // const { state } = useContext(Store);

  return (
    <Wrapper>
      <Header />
      <HeroContainer>
        <Title>500 Cidades</Title>
        <Headline><b>Encontre</b> sua comunidade!</Headline >
        <Button customStyle = {signUpButtonCustomStyle} >
          <ButtonIcon src = "/icons/ida.svg" / >Cadastre - se
        </Button>
      </HeroContainer>
    </Wrapper>
  );
};

export default LandingTemplate;