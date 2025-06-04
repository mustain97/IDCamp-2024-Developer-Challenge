import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  // Disable scroll saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Tutup modal jika klik di luar konten modal
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative
          transform transition-transform duration-300 scale-100"
        onClick={e => e.stopPropagation()} // Mencegah tutup modal saat klik di dalam modal
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
