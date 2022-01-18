import React from "react";
import { Modal, Icon } from "semantic-ui-react";

export default function BasicModal(props) {
  const { showmodal, setShowModal, title, children, ...rest } = props;

  const onClose = () => setShowModal(false);

  return (
    <Modal className="basic-modal" open={showmodal} onClose={onClose} {...rest}>
      <Modal.Header>
        {title}
        <Icon name="close" onClick={onClose} />
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}
