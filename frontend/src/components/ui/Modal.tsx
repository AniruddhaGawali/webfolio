import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  isOpen?: boolean;
  setOpenModal?: (open: boolean) => void;
  children: React.ReactNode;
  modalStyle?: React.HTMLAttributes<HTMLDivElement>["className"];
  modalOverlayStyle?: React.HTMLAttributes<HTMLDivElement>["className"];
};

function Modal({
  children,
  modalOverlayStyle,
  modalStyle,
  isOpen,
  setOpenModal,
}: Props) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen ?? false);

  useEffect(() => {
    setIsOpenModal(isOpen ?? false);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpenModal(false);
    setOpenModal && setOpenModal(false);
  };

  return (
    <div
      style={{ display: isOpenModal ? "flex" : "none" }}
      className={twMerge(
        "fixed left-0 top-0 flex h-screen w-screen cursor-pointer items-center justify-center bg-black/50",
        modalOverlayStyle,
      )}
      onClick={() => closeModal()}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          "relative min-h-[60%] min-w-[40%] cursor-auto rounded-lg bg-white p-8 text-black",
          modalStyle,
        )}
      >
        <span
          className="yarndings-20-regular absolute right-5 top-3 cursor-pointer text-5xl"
          onClick={() => closeModal()}
        >
          N
        </span>
        {children}
      </section>
    </div>
  );
}

export default Modal;
