import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
        <h2 id="modal-title" className="text-xl font-semibold mb-4">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
