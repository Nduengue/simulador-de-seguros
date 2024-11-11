import React, { useState } from "react";
import { Button, Modal, ButtonProps } from "antd";

interface IAsync {
  children: React.ReactNode;
  //   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenModal?: () => boolean;
  onOkFn: () => Promise<void>;
  modalTitle?: string;
  buttonTitle: string;
  buttonProps?: ButtonProps;
}

export default function Async({ children, modalTitle, buttonTitle, buttonProps, onOpenModal, onOkFn }: IAsync) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    // onOpenModal ? (onOpenModal() ? setOpen(true) : setOpen(false)) : setOpen(true);
    if (onOpenModal) {
      if (onOpenModal()) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    } else {
      setOpen(true);
    }
  };

  const handleOk = () => {
    setConfirmLoading(true);
    onOkFn().then(() => {
      setOpen(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} {...buttonProps}>
        {buttonTitle}
      </Button>

      <Modal title={modalTitle} open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );

}