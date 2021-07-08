import React from 'react';
import BaseHead from '../../components/baseHead';
import '../../components/I18n';
import Sandbox from '../../components/pages/sandbox/sandbox';


/**
 * This render the Home template.
 */
const Landing = () => (
  <>
    <BaseHead />
    <Sandbox />
  </>
);

export default Landing;
