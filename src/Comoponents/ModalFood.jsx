import React, { useState, useEffect } from 'react';


const ModalFood = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [comidaModal, setComidaModal] = useState("");

  function mostrarModal(comida) {
    setComidaModal(comida);
    setModalVisible(true);
  }

  return (
    <div>
      <ImagenComida
        src="https://www.recetasderechupete.com/wp-content/uploads/2019/08/Arroz-blanco.jpg"
        alt="Imagen de arroz"
        comida="papa"
        mostrarModal={mostrarModal}
      />
      {modalVisible && <ModalComida comida={comidaModal} />}
    </div>
  );
};

export default ModalFood;

function ImagenComida(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      onClick={() => props.mostrarModal(props.comida)}
    />
  );
}

function ModalComida(props) {
  return (
    <div className="modal">
      <h2>{props.comida}</h2>
    </div>
  );
}
