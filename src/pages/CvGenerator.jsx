import React, { useState } from "react";
import Modal from "../components/Modal";

export default function CvGenerator() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="btn bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Buka Modal
      </button>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Judul Modal"
      >
        <p>Ini isi modalnya.</p>
      </Modal>
    </div>
  );
}
