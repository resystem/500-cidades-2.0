import React from 'react';
import BaseHead from '../components/baseHead';
import Sandbox from '../components/pages/sandbox/sandbox';
import '../components/I18n';


/**
 * This render the Home template.
 */
const Home = () => (
  <div>
    <BaseHead />
    <Sandbox />
  </div>
);

export default Home;
