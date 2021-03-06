import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { StoreProvider } from '../../store/Store';
import ActivistModal from '../modals/activist/activist.modal';
import RegisterActivistModal from '../modals/register-activist/registerActivist.modal';
import EditActivist from '../modals/edit-activist/editActivist.modal';
import Header from '../templates/header/header.template';
import { initIDA, fetchLoggedUser, getActivists, getAssets, getEntities } from './main.controller';
import RegisterOrganizationModal from '../modals/register-organization/registerOrganization.modal';
import OrganizationModal from '../modals/organization/organization.modal';

const modalsInitialState = {
  activist: false,
  seeMore: false,
  registerActivist: false,
  editActivist: false,
  registerOrganization: false,
};

/**
 * render the Main.
 */
const Main = ({
  children,
}) => {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [idaSDK, setIdaSDK] = useState(null);
  const [modals, setModals] = useState(modalsInitialState);
  const [modalInfo, setModalInfo] = useState(null);
  const [activists, setActivists] = useState([]);
  const [entities, setEntities] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [assets, setAssets] = useState(false);

  const closeModal = () => {
    setModals(modalsInitialState);
    setModalInfo({});
  };

  const openModal = (modalToOpen, info) => {
    const newModals = { ...modalsInitialState };
    newModals[modalToOpen] = true;
    setModals(newModals);
    if (info) setModalInfo(info);
  };
  
  const values = {
    auth, setAuth,
    idaSDK, setIdaSDK,
    modals, modalInfo, closeModal, openModal,
    activists, setActivists,
    user, setUser, showLoading,
    assets, setAssets,
    entities, setEntities,
  }; 
  
  useEffect(() => {
    initIDA(setShowLoading, setAuth, setIdaSDK, router);
    getActivists(setActivists);
    getEntities(setEntities);
    getAssets(setAssets)
  }, []);
 
  useEffect(() => {
    const openRegisterModal = () => openModal('registerActivist');
    
    auth && fetchLoggedUser(auth, openRegisterModal, setUser)
  }, [auth]);
  
  return (
    <StoreProvider values={values}>
      {children}
      <RegisterActivistModal />
      <EditActivist />
      <ActivistModal />
      <RegisterOrganizationModal />
      <OrganizationModal />
    </StoreProvider>
  );
}

export default Main;