import { Modal } from "../components/Modal";
import { Context } from "../components/layout/Context";
import { useContext } from "react";

export default function Modaltest() {
  const { handleOpenModal, handleCloseModal } = useContext(Context);

  return (
    <div className="max-w-screen m-auto">
      <Modal></Modal>
    </div>
  );
}
