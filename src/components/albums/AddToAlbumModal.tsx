import React, { ChangeEvent, useState } from "react";

import "./AddToAlbumModal.scss";

import Modal, { ModalProps } from "../common/Modal";
import Button from "../common/Button";
import Typography from "../common/Typography";
import Input from "../common/Input";

type AddToAlbumModalProps = {
  open: ModalProps["open"];
  onClose: ModalProps["onClose"];
};

const MODAL_TABS = {
  CREATE_NEW_ALBUM: {
    KEY: "CREATE_NEW_ALBUM",
    LABEL: "Create new album",
  },
  ADD_TO_EXISTING: {
    KEY: "ADD_TO_EXISTING",
    LABEL: "Add to existing",
  },
};

function AddToAlbumModal({ open, onClose }: AddToAlbumModalProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(MODAL_TABS.CREATE_NEW_ALBUM.KEY);
  const [newAlbumName, setNewAlbumName] = useState("");

  function onTabClick(tabKey: string) {
    setActiveTab(tabKey);
  }

  function handleAlbumNameInput(e: ChangeEvent<HTMLInputElement>) {
    setNewAlbumName(e.target.value);
  }

  function handleSave() {
    return;
  }

  return (
    <Modal className="add-to-album-modal" open={open} onClose={onClose}>
      <Modal.Content>
        <div className="add-to-album-modal__tabs">
          {Object.values(MODAL_TABS).map((tab) => (
            <span
              className="add-to-album-modal__tab"
              onClick={() => onTabClick(tab.KEY)}
            >
              <Typography
                key={tab.KEY}
                size={14}
                weight="bold"
                transform="uppercase"
                color={tab.KEY === activeTab ? "dark" : "grey"}
              >
                {tab.LABEL}
              </Typography>
            </span>
          ))}
        </div>
        <div className="add-to-album-modal__tab-content">
          {activeTab === MODAL_TABS.CREATE_NEW_ALBUM.KEY && (
            <Input
              value={newAlbumName}
              onChange={handleAlbumNameInput}
              placeholder="Enter title here"
            />
          )}
          {activeTab === MODAL_TABS.ADD_TO_EXISTING.KEY && <>List of albums</>}
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          className="add-to-album-modal__action"
          variant="outlined-light"
          label="Cancel"
          onClick={onClose}
        />
        <Button
          className="add-to-album-modal__action"
          label="Save"
          onClick={handleSave}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default AddToAlbumModal;
