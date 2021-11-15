import React, { useState } from "react";
import BasicModal from "../../Modal/BasicModal";

export default function Menuweb() {
  const [showmodal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

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
          Componenete Básico
        </BasicModal>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <nav>
      <a>
        <li>Carne</li>
      </a>
      <a>
        <li>Cestas</li>
      </a>
      <a>
        <li>Regalos</li>
      </a>
      <a>
        <li>Contacto</li>
      </a>
      <a>
        <li>Blog</li>
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
