import React, { useState } from "react";
import BasicModal from "../../Modal/BasicModal";
<<<<<<< HEAD
import Auth from "../../Auth/Auth";
=======
import Auth from "../../Auth";
>>>>>>> 24f861a63e5f07ffc76bb849ca165ea478940533

export default function Menuweb() {
  const [showmodal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <div>
        <Menu />
      </div>

      <div>
        <Account openModal={openModal} />
      </div>
      <div>
        <BasicModal
          showmodal={showmodal}
          setShowModal={setShowModal}
          title="Inicia Sesión"
        >
<<<<<<< HEAD
          <Auth closeModal={closeModal} />
=======
          <Auth />
>>>>>>> 24f861a63e5f07ffc76bb849ca165ea478940533
        </BasicModal>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <nav>
      <a>
        <li>Ropa</li>
      </a>
      <a>
        <li>Zapatos</li>
      </a>
      <a>
        <li>Viaje</li>
      </a>
      <a>
        <li>Marcas</li>
      </a>
      <a>
        <li>Complementos</li>
      </a>
    </nav>
  );
}

function Account(props) {
  const { openModal } = props;

  return (
    <a onClick={openModal}>
      <li>Account</li>
    </a>
  );
}
