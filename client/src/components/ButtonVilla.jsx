import React, { useState } from 'react';

const ModalConfirmation = ({ isOpen, onClose, onConfirm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleConfirm = () => {
    onConfirm({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>X</button>
        <div className="modal-content">
          <h2 id='produitMondal'>Confirmer la réservation</h2>
          <label>Nom:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Téléphone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleConfirm}>Confirmer</button>
        </div>
      </div>
    </div>
  );
};

export const ButtonVilla = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmReservation = (userData) => {
    console.log('Données utilisateur:', userData);
  };

  return (
    <>
      <input id='buttonvilla' type="button" value="Réserver un Séjour" onClick={openModal} />
      <ModalConfirmation isOpen={isModalOpen} onClose={closeModal} onConfirm={handleConfirmReservation} />
    </>
  );
};
