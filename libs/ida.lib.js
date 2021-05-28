import dynamic from "next/dynamic";

const ida = async () => await import('@resystem/ida-js-sdk');
/* eslint-disable no-undef */
/* eslint-disable no-async-promise-executor */

// ida configurations, contains the app keys
const idaConfiguration = {
  appId: process.env.IDA_APP_ID,
  appKey: process.env.IDA_APP_KEY
};

/**
 * this open ida connection, defining the standards functions
 * @param {object} params ida configurations
 * @param {function} params.onAuthChange run when the authorized IDa user is changing
 * @returns {Promise} contains new IDa user or error
 */
export const init = ({ onAuthChange }) =>
  new Promise(async (res) => {
    const localIda = await ida();
    localIda.initializeApp({
      ...idaConfiguration,
      onAuthChange,
      onLoad: (payload) => res(payload),
      onOpen: (data) => console.log('Initialized IDa!')
    });
  });

export default init;
