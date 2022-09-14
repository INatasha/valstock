import React, { useEffect } from "react";

import "./Modal.scss";

import Portal from "./Portal";
import Typography from "./Typography";

export type ModalProps = {
  className?: string;
  open?: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
};

type ModalTitleProps = {
  className?: string;
  children: string;
};

type ModalContentProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

type ModalActionsProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

function Modal({
  className = "",
  open = true,
  onClose,
  children,
}: ModalProps): JSX.Element | null {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!open) return null;

  return (
    <Portal>
      <div className={`modal ${className}`}>
        <div className="modal__inner">{children}</div>
      </div>
    </Portal>
  );
}

function ModalTitle({
  className = "",
  children,
}: ModalTitleProps): JSX.Element {
  return (
    <div className={`modal__title ${className}`}>
      <Typography>{children}</Typography>
    </div>
  );
}

function ModalContent({
  className = "",
  children,
}: ModalContentProps): JSX.Element {
  return <div className={`modal__content ${className}`}>{children}</div>;
}

function ModalActions({
  className = "",
  children,
}: ModalActionsProps): JSX.Element {
  return <div className={`modal__actions ${className}`}>{children}</div>;
}

Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export default Modal;
