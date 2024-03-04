// import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
// import SideBar from 'components/SideBar';
// import Modal from 'components/Modal';

const PageLayout = () => {
  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal(prevState => !prevState);
  // };
  return (
    <>
      {/* {showModal && (
        <Modal name="sidebar" onClose={toggleModal}>
          <SideBar onClose={toggleModal} />
        </Modal>
      )} */}

      <Header />
      {/* <Header onOpen={toggleModal} /> */}

      <Outlet />
    </>
  );
};

export default PageLayout;
