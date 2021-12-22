import React, { useState } from "react";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth/Auth";

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
          <Auth closeModal={closeModal} />
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
