import React from 'react';
import BaseHead from '../components/baseHead';
import LandingTemplate from '../components/templates/landing/landing';
import '../components/I18n';


/**
 * This render the Home template.
 */
const Home = () => (
  <>
    <BaseHead />
    <LandingTemplate />
  </>
);

export default Home;
