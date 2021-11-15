import React, { useState } from "react";
import BasicModal from "../../Modal/BasicModal";

export default function Menuweb() {
  return (
    <div>
      <div>
        <Menu />
      </div>

      <div>
        <Account />
      </div>
      <div>
        <BasicModal show={true}></BasicModal>
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

function Account() {
  return (
    <a>
      <li>Account</li>
    </a>
  );
}
